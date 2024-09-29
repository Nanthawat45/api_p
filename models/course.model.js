const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Course = sequelize.define("course", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    courseCode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    credit: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Course;
