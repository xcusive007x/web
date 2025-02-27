require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ตั้งค่าการเชื่อมต่อ MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // เปลี่ยนเป็น user ของคุณ
    password: '', // เปลี่ยนเป็นรหัสผ่านของคุณ
    database: 'mylove_db'
});

db.connect(err => {
    if (err) {
        console.error('MySQL connection failed:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

// บันทึกข้อมูลลง MySQL
app.post('/save-action', (req, res) => {
    const { passcode, action, message } = req.body;
    const sql = 'INSERT INTO user_actions (passcode, action, message) VALUES (?, ?, ?)';
    db.query(sql, [passcode, action, message], (err, result) => {
        if (err) {
            console.error('Insert failed:', err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        res.json({ success: true, message: 'Data saved successfully' });
    });
});

// เริ่มเซิร์ฟเวอร์
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});