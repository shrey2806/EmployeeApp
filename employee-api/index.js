const express = require('express');
var app = express();
const mongoose = require('mongoose');
const httpError =  require('http-errors');
var cors = require('cors')
require('dotenv').config();

// Adding Router
var employeeRouter = require('./routes/employee');


// Adding Middleware Configuration : 
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended :false}));


app.use("/employee" , employeeRouter);




// Error Handler : 

app.use(function(req,res,next){
    next(httpError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

// Connect to DB : 
mongoose.connect(process.env.DB, {useNewUrlParser:true,useUnifiedTopology:true} , ()=>{
    console.log("Connected To DB");
});

app.listen(8080,()=>{
    console.log("Listening On Port 8080");
})

module.exports = app;