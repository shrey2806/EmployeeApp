import React from 'react';

const Input = ({name,label,value,onChange, errorMessage}) => {
    return ( 
        
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                id = {name}
                type="text" 
                className="form-control"
                onChange = {onChange}
                value = {value}
            />
            
            { errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        </div>

     );
}
 
export default Input;
 