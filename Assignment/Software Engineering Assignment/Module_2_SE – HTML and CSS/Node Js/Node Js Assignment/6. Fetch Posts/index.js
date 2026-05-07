const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.static(path.join(__dirname, 'public')));

/**
 * Task 6 Core: Fetch Data using Fetch API
 */
async function fetchAndLogPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        console.log('\n--- FETCHED POST TITLES ---');
        posts.slice(0, 10).forEach((post, index) => {
            console.log(`${index + 1}. ${post.title}`);
        });
        console.log('---------------------------\n');
        
        return posts;
    } catch (error) {
        console.error('Fetch Error:', error);
        return [];
    }
}

// Initial fetch to log to console immediately on start
fetchAndLogPosts();

// API route for frontend
app.get('/api/posts', async (req, res) => {
    const posts = await fetchAndLogPosts();
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`\n📰 Task 6 Post Fetcher running at http://localhost:${PORT}`);
});
