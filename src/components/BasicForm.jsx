import React, { useState } from "react";
import useValidate from "../hooks/use-validate";

function BasicForm(){

  const {
    value: enteredFName,
    inputIsValid: fNameIsValid,
    inputIsInvalid: fNameIsInvalid,
    getInput: getFName,
    inputBlur: fNameBlur,
    reset: fNameReset,
    inputClass: fNameClass
  } = useValidate(value => value.trim() !== '');

  const {
    value: enteredLName,
    inputIsValid: lNameIsValid,
    inputIsInvalid: lNameIsInvalid,
    getInput: getLName,
    inputBlur: lNameBlur,
    reset: lNameReset,
    inputClass: lNameClass
  } = useValidate(value => value.trim() !== '');

  const {
    value: enteredEmail,
    inputIsValid: emailIsValid,
    inputIsInvalid: emailIsInvalid,
    getInput: getEmail,
    inputBlur: emailBlur,
    reset: emailReset,
    inputClass: emailClass
  } = useValidate(value => value.includes('@'));
  

  const formSubmission = (event) => {
    event.preventDefault();

    if (!fNameIsValid){
      return;
    }

    console.log(enteredEmail, enteredFName, enteredLName);
    
    fNameReset();
    

    lNameReset();
    

    emailReset();
  }

  
  const message = <p className="error-text">Enter valid input</p>

  

    return (
        <form onSubmit={formSubmission}>
          <div className='control-group'>
            <div className={fNameClass}>
              <label htmlFor='fname'>First Name</label>
              <input value={enteredFName} type='text' id='fname' onChange={getFName} onBlur={fNameBlur} />
              {fNameIsInvalid && message}
            </div>
            <div className={lNameClass}>
              <label htmlFor='lname'>Last Name</label>
              <input value={enteredLName} type='text' id='lname' onChange={getLName} onBlur={lNameBlur}  />
              {lNameIsInvalid && message}
            </div>
          </div>
          <div className={emailClass}>
            <label htmlFor='email'>E-Mail Address</label>
            <input value={enteredEmail} type='email' id='email' onChange={getEmail} onBlur={emailBlur} />
            {emailIsInvalid && message}
          </div>
          <div className='form-actions'>
            <button>Submit</button>
          </div>
        </form>
      );
};

export default BasicForm;