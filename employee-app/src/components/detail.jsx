import React, { Component } from 'react';
import Input from './input';    
import '../css/detail.css';


import Title from './title';
class Detail extends Component {
    state = {
        queryId : '',
        details : {
            name : "",
            email: "",
            address:  "",
            company : ""
       },


    }
    callBackend = async () =>{

        // const requestOptions = {
        //     method: 'GET',
        //     headers: { 'Content-Type': 'application/json' },
           
        // };
        
        const response =  await fetch('http://localhost:8080/employee/get/'+ this.state.queryId);
        const data = await response.json();
        console.log(data);

        this.setState({
            details :{
                name : data.name,
                email : data.email,
                address: data.address,
                company : data.company
            }
            
        });



    }


    handleChange = ({target: input}) =>{

    
        const queryId = input.value;
        this.setState({queryId: queryId});
    };


    handleSubmit = () =>{
        this.callBackend();

    };
    render() {
        return (
            <div className = "input">
                <Title titleName ="Employee Detail"/>
                <Input label="Enter Employee ID" name="id" value={this.state.queryId} onChange = {this.handleChange} />
                <button  type="submit" className="btn btn-primary button" onClick={this.handleSubmit}>Submit</button>
                <div>
                    <p key = "1">Name: {this.state.details.name}</p>
                    <p key = "2">Email: {this.state.details.email}</p>
                    <p key = "3">Address:  {this.state.details.address}</p>
                    <p key = "4">Company:  {this.state.details.company}</p>
                </div>
            </div>    
            
            
        );
    }
}
 
export default Detail;