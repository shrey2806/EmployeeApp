const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({

    name:{
        type :String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    address :{ 
        type : String,
        required : true
    },
    company : {
        type :String,
        required: true
    }
});

module.exports = mongoose.model('Employee',EmployeeSchema);