const mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    fullName:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    }
});

var Employee1 = mongoose.model('employee',employeeSchema); //EmployeeDB (table k andr) --> employees (k andar)--> employeeSchema222222(fullname,email,mobile,city)
module.exports = Employee1;
