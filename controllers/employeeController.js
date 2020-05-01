const express  = require('express');
var router = express.Router();
const Employee = require('../models/employee.model');

router.get('/',(req,res)=>{ //localhost:3000/employee/
    res.render('employee/addOrEdit',{
        viewTitle:'Insert Employee'
    });
});

router.post('/',(req,res)=>{
    if(req.body._id == '')
    InsertRecord(req,res);
    else
    UpdateRecord(req,res);
});

router.get('/list',(req,res)=>{  //localhost:3000/employee/list
    Employee.find((err,docs)=>{ //db.posts.find()  Employee1 = EmployeeDB.employees
        if(!err){
            console.log(docs);
            res.render("employee/list",{list:docs});
        }
        else
        console.log('Error in retrieving employee list'+err);
    });
});

router.get('/:id',(req,res)=>{
    Employee.findById(req.params.id,(err,doc)=>{
        res.render("employee/addOrEdit",{ //render 'views' me 'files' me jata hai
            viewTitle : 'Update Employee',
            employee : doc
        })
    });
});

router.get('/delete/:id',(req,res)=>{
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){res.redirect('/employee/list');}
    });
});


function InsertRecord(req,res){
    
    var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err,doc)=>{
        if(!err) 
        res.redirect('employee/list'); //redirect controllers k anadr url chck krta h
        else 
        console.log('Error during record insertion'+err);
    });
}

function UpdateRecord(req,res){
    
    Employee.findOneAndUpdate({_id:req.body._id},req.body,{new:true},(err,doc)=>{
        if(!err){res.redirect('employee/list');}
    });

}


module.exports = router;