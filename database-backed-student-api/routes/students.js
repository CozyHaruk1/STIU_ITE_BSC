const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const requireRole = require("../middleware/requireRole");

// GET all students
router.get("/", (req, res) => {
  let result = req.students;

  // Filter by major
  if (req.query.major) {
    result = result.filter(
      student =>
        student.major.toLowerCase() === req.query.major.toLowerCase()
    );
  }

  res.json(result);
});

// GET random student
router.get("/random", (req, res) => {
  const students = req.students;

  const randomIndex = Math.floor(Math.random() * students.length);
  const randomStudent = students[randomIndex];

  res.json(randomStudent);
});

// GET student by ID
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = req.students.find(
    student => student.id === id
  );

  if (!student) {
    return res.status(404).json({
      error: "Student not found"
    });
  }

  res.json(student);
});

// POST new student
router.post("/", (req, res) => {
  const student = req.body;

  req.students.push(student);

  res.status(201).json(student);
});

module.exports = router;