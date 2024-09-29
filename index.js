// index.js
const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const restaurantRouter = require("./routers/restaurant.router");
const authRouter = require("./routers/auth.routers");
const db = require("./models/");
const role = db.Role;
const cors = require("cors");

const corsOption = {
    origin: "http://localhost:5173",
};

// ใช้ sequelize.sync() เพื่อสร้างตารางในฐานข้อมูล
// db.sequelize.sync({ force: true }).then(() => {
//     initRole()
//     console.log("Drop and Sync DB"); // จะลบตารางเดิมและสร้างใหม่
// });

// ถ้าคุณไม่ต้องการให้ลบตารางทุกครั้งที่รัน
// db.sequelize.sync().then(() => {
//     console.log("DB is synced");
// });


const initRole = () => {
    role.create({ id: 1, roleName: "user"});
    role.create({ id: 2, roleName: "moderator" });
    role.create({ id: 3, roleName: "admin" });
}

//use middleware
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use router
app.use("/api/v1/restaurants", restaurantRouter);
app.use("/api/v1/auth", authRouter);

app.get('/', (req, res) => {
    res.send('<h1>Hello Academic API</h1>');
});

app.listen(PORT, () => {
    console.log("Listening to http://localhost:" + PORT);
});
