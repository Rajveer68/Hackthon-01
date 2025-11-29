const mongoose = require('mongoose');


// 1. Connect to Mongo (Replace with your connection string)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 2. Define Schema
const EmployeeSchema = new mongoose.Schema({
    name: String,
    department: String,
    gender: String,
    performance_score: Number,
    promoted: Number // 0 or 1
});
const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = {
    Employee
}