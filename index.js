import express from 'express';
import student from "./student.json" with { type: "json" };

const app = express();
const PORT = 2500;

app.get("/", (req, res) => {
  res.send(student);
});

//students details
app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  const studentById = student.find(s => s.id === parseInt(id));
  if (!studentById) {
    return res.status(404).send({ error: "Student not found" });
  }
  res.send(studentById);
});


//update student details by id


//delete student details by id



//create new student details



app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
