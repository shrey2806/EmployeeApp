import React from 'react';
import {Route} from 'react-router-dom';
import './css/App.css';
import Form from './components/form';
import Detail from './components/detail';

function App() {
  return (
    <React.Fragment>
    <main className ="container">
    
        <Route path = "/employee-form"  exact component = {Form}/>
        <Route path = '/employee-detail' exact component = {Detail}/>
    </main>
    </React.Fragment>
    
  );
}

export default App;
