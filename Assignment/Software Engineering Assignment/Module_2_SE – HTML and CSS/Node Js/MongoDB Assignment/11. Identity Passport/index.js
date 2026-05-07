const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const path = require('path');
const app = express();
const PORT = 5011;
const SECRET_KEY = "PASSPORT_NEXUS_SECRET";

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// MongoDB Connection
const MONGODB_URI = 'mongodb://127.0.0.1:27017/mongodb_assignment_db';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('\n🍃 [IDENTITY_PASSPORT] Linked to MongoDB Registry.'))
    .catch(err => console.error('🚨 [PASSPORT_FAULT]:', err));

// User Model
const User = mongoose.model('PassportUser', new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}));

// --- PASSPORT CONFIGURATION ---

// 1. Local Strategy (For Login)
passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        if (!user) return done(null, false, { message: 'Identity not found.' });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return done(null, false, { message: 'Invalid security key.' });
        
        return done(null, user);
    } catch (err) { return done(err); }
}));

// 2. JWT Strategy (For Protected Routes)
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY
}, async (jwtPayload, done) => {
    try {
        const user = await User.findById(jwtPayload.id);
        if (user) return done(null, user);
        return done(null, false);
    } catch (err) { return done(err, false); }
}));

// --- ROUTES ---

// Registration
app.post('/register', async (req, res) => {
    console.log("🔐 [PASSPORT_VAULT] Initiating encryption protocol...");
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ status: "SUCCESS", message: "Identity synchronized." });
    } catch (err) { res.status(400).json({ status: "FAIL", message: err.message }); }
});

// Login (Using Passport Local)
app.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({ status: "DENIED", message: info ? info.message : "Access Refused." });
        }
        
        const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
        console.log(`🔓 [PASSPORT_VAULT] Authorized: Token synthesized for ${user.email}`);
        res.json({ status: "AUTHORIZED", token, user: { email: user.email } });
    })(req, res, next);
});

// Protected Profile (Using Passport JWT)
app.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        status: "SUCCESS",
        message: "You have accessed the Nexus Inner Circle.",
        identity: req.user.email
    });
});

app.listen(PORT, () => {
    console.log(`\n🛂 Task 11 Identity Passport active at http://localhost:${PORT}`);
    console.log(`Core: Passport.js (Local + JWT) | DB: MongoDB\n`);
});
