// restaurant.router.js
const router = require("express").Router();
const courseController = require("../controllers/restaurant.controller");
//create a restaurant
//POST http://localhost:5000/api/v1/restaurants
// สร้างวิชาใหม่

router.post("/", courseController.create);

// ดึงข้อมูลวิชาทั้งหมด
router.get("/", courseController.getAll);

// ดึงข้อมูลวิชาตาม ID
router.get("/:id", courseController.getById);

// แก้ไขข้อมูลวิชาตาม ID
router.put("/:id", courseController.update);

// ลบวิชาตาม ID
router.delete("/:id", courseController.delete);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const restaurantController = require("../controllers/restaurant.controller");
// const { authJwt } = require("../middleware");