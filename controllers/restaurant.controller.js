// restaurant.controller.js
const db = require("../models");
const Course = db.Course;

// สร้างข้อมูลวิชาใหม่
exports.create = async (req, res) => {
    try {
        console.log("DB Course Model:", Course);
        const course = {
            courseCode: req.body.courseCode,  // รหัสวิชา
            courseName: req.body.courseName,  // ชื่อวิชา
            credit: req.body.credit,          // หน่วยกิต
        };

        const newCourse = await Course.create(course);
        res.status(201).send(newCourse);
    } catch (err) {
        res.status(500).send({ message: err.message || "Error occurred while creating the Course." });
    }
};

// ดึงข้อมูลวิชาทั้งหมด
exports.getAll = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.status(200).send(courses);
    } catch (err) {
        res.status(500).send({ message: err.message || "Error occurred while retrieving courses." });
    }
};

// ดึงข้อมูลวิชาตาม ID
exports.getById = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (course) {
            res.status(200).send(course);
        } else {
            res.status(404).send({ message: `Course with id=${req.params.id} was not found.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Error retrieving Course." });
    }
};

// แก้ไขข้อมูลวิชา
exports.update = async (req, res) => {
    try {
        const courseId = req.params.id;

        const updatedCourse = await Course.update(req.body, { where: { id: courseId } });
        if (updatedCourse == 1) {
            res.status(200).send({ message: "Course was updated successfully." });
        } else {
            res.send({ message: `Cannot update Course with id=${courseId}. Maybe Course was not found or req.body is empty.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Error updating Course." });
    }
};

// ลบข้อมูลวิชา
exports.delete = async (req, res) => {
    try {
        const courseId = req.params.id;
        const deleted = await Course.destroy({ where: { id: courseId } });
        if (deleted) {
            res.status(200).send({ message: "Course was deleted successfully." });
        } else {
            res.send({ message: `Cannot delete Course with id=${courseId}. Maybe Course was not found.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Error deleting Course." });
    }
};
