import React, { useState } from "react";
import useValidate from "../hooks/use-validate";

function BasicForm(){

  const {
    value: enteredFName,
    inputIsValid: fNameIsValid,
    inputIsInvalid: fNameIsInvalid,
    getInput: getFName,
    inputBlur: fNameBlur,
    reset: fNameReset
  } = useValidate(value => value.trim() !== '');

  

  const [enteredLName, setEnteredLName] = useState('');
  

  const [enteredEmail, setEnteredEmail] = useState('');

  
  
  

  const formSubmission = (event) => {
    event.preventDefault();

    if (!fNameIsValid){
      return;
    }

    console.log(enteredEmail, enteredFName, enteredLName);
    
    fNameReset();
    

    setEnteredLName('');
    

    setEnteredEmail('');
  }

  const fNameClass = fNameIsInvalid ? 'form-control invalid' : 'form-control';
  const message = <p className="error-text">Enter valid input</p>

  

    return (
        <form onSubmit={formSubmission}>
          <div className='control-group'>
            <div className={fNameClass}>
              <label htmlFor='fname'>First Name</label>
              <input value={enteredFName} type='text' id='fname' onChange={getFName} onBlur={fNameBlur} />
              {fNameIsInvalid && message}
            </div>
            <div className='form-control'>
              <label htmlFor='lname'>Last Name</label>
              <input value={enteredLName} type='text' id='lname'  />
            </div>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>E-Mail Address</label>
            <input value={enteredEmail} type='email' id='email' />
          </div>
          <div className='form-actions'>
            <button>Submit</button>
          </div>
        </form>
      );
};

export default BasicForm;