// Connecting to MongoDB and creating a schema and model for employee data, as well as setting up an Express server to handle CRUD operations.
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");

var express = require("express");
var app = express();
app.use(express.json());

// Define the validation employee schema and model
var emp_schema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: Number, required: true },
  dob: { type: Date, required: true },
});

// Create the employee model using the defined schema and specify the collection name as "employees"
var emp_model = mongoose.model("emp_model", emp_schema, "employees");

// insert employee data into the database
app.post("/post_emp", async (req, res) => {
  let data = new emp_model(req.body);
  const result = await data.save();
  res.send({ status: "success", data: result });
});

// get employee data from the database
app.get("/get_emp", async (req, res) => {
  const result = await emp_model.find();
  res.send({ status: "success", data: result });
});

// update employee data in the database
// app.put("/update_emp/:_id", async (req, res) => {
//   const result = await emp_model.findByIdAndUpdate(req.params._id, req.body, {
//     new: true,
//   });
//   res.send({ status: "success", data: result });
// });

// delete employee data from the database
app.delete("/delete_emp/:_id", async (req, res) => {
  const result = await emp_model.DeleteOne({ _id: req.params });
  res.send({ status: "success", data: result });
});

// get employee data by id from the database
// app.get("/get_emp/:_id", async (req, res) => {
//   const result = await emp_model.findById(req.params._id);
//   res.send({ status: "success", data: result });
// });

app.listen(3000, () => {
  console.log(
    "\x1b[36m✅ Successfully connected to MongoDB and Server is running on port 3000\x1b[0m",
  );
});
