// restaurant.model.js
module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
        courseCode: {  // รหัสวิชา
            type: Sequelize.STRING,
        },
        courseName: {  // ชื่อวิชา
            type: Sequelize.STRING,
        },
        credit: {      // หน่วยกิต
            type: Sequelize.INTEGER,
        },
    });

    return Course;
};
