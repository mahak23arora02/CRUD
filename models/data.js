const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmplyoeeDB', {useNewUrlParser: true, useUnifiedTopology:true},(err)=>{
    if(!err){console.log("MongoDb Connected Successfully");}
    else
    console.log("Problem Occur"+err);
});

require('./employee.model');