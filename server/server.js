const express = require('express');
const {Employee} = require("../Database/db")
const cors = require('cors');
const axios = require('axios'); // To call Python
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 3. SEED ROUTE (Call this once to fill DB with dummy data)
app.post('/seed', async (req, res) => {
    const dummyData = [
        { name: "John", department: "Eng", gender: "Male", performance_score: 5, promoted: 1 },
        { name: "Sarah", department: "Eng", gender: "Female", performance_score: 5, promoted: 0 },
        { name: "Mike", department: "Sales", gender: "Male", performance_score: 3, promoted: 1 },
        { name: "Anna", department: "Sales", gender: "Female", performance_score: 4, promoted: 1 },
        // ... add more to create 'bias'
    ];
    await Employee.insertMany(dummyData);
    res.json({ msg: "Data Seeded" });
});

// 4. API: Get Data & Analyze
app.get('/api/dashboard-stats', async (req, res) => {
    try {
        // A. Get Real Data from Mongo
        const employees = await Employee.find();
        
        // B. Send to Python AI Engine
        // Note: We format data to match Pydantic model in Python
        const aiResponse = await axios.post('http://127.0.0.1:8000/analyze_bias', {
            employees: employees
        });

        // C. Combine results
        res.json({
            total_employees: employees.length,
            db_data: employees,
            ai_insights: aiResponse.data
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch insights" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));