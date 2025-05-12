const express = require("express");
const mongoose = require("mongoose");
const { StudentModel } = require("./db");

async function main() {
        await mongoose.connect(
            "mongodb+srv://faizkhan941fkfk:f0aCyYkhW86yT13w@cluster0.xzslgms.mongodb.net/studnets-data"
            );
   
}

main();

const app = express();
app.use(express.json());

app.post("/addstudent", async (req, res) => {
    try {
        const { name, email, course, id } = req.body;
        console.log(name, email, course, id);
        
        await StudentModel.create({ name, email, course, id });
        res.json({ message: "Student added successfully" });
    } catch (err) {
        console.error("Error adding student:", err);
        res.status(500).json({ message: "Failed to add student" });
    }
});

app.get("/me", async (req, res) => {
    res.json({ message: "success" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
