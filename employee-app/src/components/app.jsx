// import React from 'react';
import React, { Component } from "react";
import "../css/App.css";
import Form from "./form";
import Detail from "./detail";
import EmployeeList from "./employeeList";

class App extends Component {
  state = {
    list: []
  };

  handleEmployeeAdd = (args) =>{
    let newList = this.state.list;
    newList.push(args)
    
    this.setState({
        list : newList
        
    });
    
    console.log(this.state.list);
    console.log('Inside handle employee Add');
    

  } 


  callBackend = async()=> {       
    const response = await fetch('http://localhost:8080/employee/getAll');
    const data = await response.json();
    //console.log(data);
    return data;    
  }

  async componentDidMount(){
    var data = await this.callBackend();      
    this.setState({
      list : data
    });

  }
  render() {
    return (
      <div className="appContainer">
        <div key="sdfsdfews" className="container1">
          <Form onAdd = {this.handleEmployeeAdd}/>
          <Detail />
        </div>

        <div key="sfasdfd" className="container2">
          <EmployeeList list= {this.state.list} />
        </div>
      </div>
    );
  }
}
export default App;

// function App() {
//   return (

//   );
// }

// export default App;
