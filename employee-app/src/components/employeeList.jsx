import React, { Component } from 'react';
class EmployeeList extends Component {
    // state = {
    //   list : this.props.list
    // }

    // callBackend = async()=> {       
    //   const response = await fetch('http://localhost:8080/employee/getAll');
    //   const data = await response.json();
    //   //console.log(data);
    //   return data;    
    // }

    // async componentDidMount(){
    //   var data = await this.callBackend();      
    //   this.setState({
    //     list : data
    //   });
  
    // }

    
    render() { 
        return (
            <table className="table table-sm">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Company</th>
                </tr>
              </thead>
              <tbody>
                {this.props.list.map((value)=>{
                    return (
                      <tr key ={value._id}>
                        <td key="effwf">{value._id}</td>
                        <td key = "wefvw">{value.name}</td>
                        <td key="wfewf">{value.email}</td>
                        <td key="asdbf">{value.address}</td>
                        <td key="asas">{value.company}</td>
                      </tr>
                    );
                })}
              
              </tbody>
            </table>

        );
    }
}
 
export default EmployeeList;