require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML file
app.use(express.static("public"));

// Handle form submission
app.post("/add-student", async (req, res) => {
  const { name, email, password } = req.body;

  const db = await connectDB();
  await db.collection("students").insertOne({
    name,
    email,
    password
  });

  // Redirect back to home page
  res.redirect("/");
});

// Get students (API)
app.get("/students", async (req, res) => {
  const db = await connectDB();
  const students = await db.collection("students").find().toArray();
  res.json(students);
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
