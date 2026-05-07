var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");

var emp_schema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  mobile: Number,
  dob: Date,
});

var emp_model = mongoose.model("emp_model", emp_schema, "employees");
