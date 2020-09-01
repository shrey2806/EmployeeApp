import React, { Component } from 'react';
import Title from './title'
import '../css/form.css';
import Input from './input';
import Joi from 'joi-browser';


class Form extends Component {
    
    state = {
       details : {
            name : "",
            email: "",
            address:  "",
            company : ""
       },
       errors: {

       },

       isSuccess : false,
       employeeId: ''
       
    };
    

    validationSchema = {

        name : Joi.string().required(),
        email : Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        address : Joi.string().required(),
        company : Joi.string().required()

    };

    validateField = (input) =>{
        
        if(input.id === 'name' && input.value.trim() === ''){
            return "Name Should not be empty";
        }
 
     }
 
    validateForm = () =>{

        const options=  {abortEarly : false};
        const result = Joi.validate(this.state.details , this.validationSchema, options);
        //console.log(result);

        if(!result.error) return null;
        
        const errors = {}
        for(let item of result.error.details)
            errors[item.path[0]]  = item.message;

        return errors;
 
 
    };

    handleChange = ({target: input}) =>{

        // First check for error
        const errors = {...this.state.errors};
        const errorMessage =  this.validateField(input);
        
        if(errorMessage){
            errors[input.id] = errorMessage;
        
        }else{
            delete errors[input.id];
        }


        const detail = {...this.state.details};
        detail[input.id] = input.value
        
          
        
        this.setState({details: detail, errors : errors})
    };

    callBackend = async() => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.details)
        };
        
        const response =  await fetch('http://localhost:8080/employee/create',requestOptions);
        const data = await response.json();
        //console.log(data);

        this.props.onAdd(data);
        
        this.setState({
            isSuccess : true,
            employeeId : data._id
        });



    }
    

    handleSubmit = (e) =>{

        e.preventDefault();

        const errors = this.validateForm();
        
        this.setState({
            errors : errors || {}
        });
        if(errors){
            return;
        }   
        
        console.log('Submitted');
        
        this.callBackend();

    }
    
    render() { 
        const { details , errors }  = this.state; 

        return (    
            <div className= "employeeForm">
                <Title titleName="Employee Form" className="title"/>
                
                <form onSubmit= {this.handleSubmit}>

                    <Input name= "name" value = {details.name} label ="Name" onChange= {this.handleChange}
                            errorMessage = {errors.name}   />
                    <Input name= "address" value = {details.address} label="Address" onChange = {this.handleChange} 
                            errorMessage = {errors.address}/>
                    <Input name= "email" value ={details.email} label ="Email" onChange= {this.handleChange}
                            errorMessage = {errors.email}/>
                    <Input name= "company" value = {details.company} label ="Company" onChange = {this.handleChange}
                            errorMessage = {errors.company}/>
                
                    <button  type="submit" className="btn btn-primary">Submit</button>

                </form>

                <div className = "span">
        {this.state.isSuccess && <span>Generated employee ID : {this.state.employeeId}</span>}
                </div>
            </div>



        );
    }
}
 
export default Form;