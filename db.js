const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const student = new Schema({
    name:String,
    email: {type: String, unique: true},
    course : String,
    id: String

})



const StudentModel = mongoose.model('students',student);

module.exports = {
    StudentModel
};