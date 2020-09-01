const express =require('express');
const Employee =  require('../models/Employee');
const router = express.Router();



router.post("/create", (req,res) => {

    const employee =  new Employee(req.body);

    employee.save()
        .then( data => {
            res.json(data);        
    })
    .catch(err => {
        res.json({
            status : "failure",
            message : err.message
        })
    })


})


router.get("/get/:id", (req,res)=>{
    
    Employee.findById(req.params.id).
    then(data => { 
        if(data!==null){
            res.json(data);
        }else{
            res.json({
                status : "failure",
                message : "employee not found"
            })
        }
        
    }).catch(err => {
        res.json({
            status :"failure",
            message  : err.message
        });
    })


});


router.get("/getAll",(req,res)=>{

    Employee.find()
    .then(data=>{
        if(data!=null){
            res.json(data);
        }else{
            res.json({})

        }


    })
    .catch(err=>{
        res.json({
            status: "faliure",
            message : err.message
        });
    });
})


module.exports = router;


//5f425b5c2292431fe64eb315