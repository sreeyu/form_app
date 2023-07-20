import React, { useState } from "react";

function BasicForm(){

  const [enteredFName, setEnteredFName] = useState('');
  const [fNameIsTouched, setFNameIsTouched ] = useState(false);

  const [enteredLName, setEnteredLName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const fNameIsValid = enteredFName.trim() !== '';
  const fNameIsInvalid = fNameIsTouched && !fNameIsValid;

  const getFname = (event) => {
    setEnteredFName(event.target.value);
  }

  const fNameBlur = () => {
    setFNameIsTouched(true);
  }

  const getLname = (event) => {
    setEnteredLName(event.target.value);
  }

  const getEmail = (event) => {
    setEnteredEmail(event.target.value);
  }

  const formSubmission = (event) => {
    event.preventDefault();

    console.log(enteredEmail, enteredFName, enteredLName);
    setEnteredFName('');
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
              <input value={enteredFName} type='text' id='fname' onChange={getFname} onBlur={fNameBlur} />
              {fNameIsInvalid && message}
            </div>
            <div className='form-control'>
              <label htmlFor='lname'>Last Name</label>
              <input value={enteredLName} type='text' id='lname' onChange={getLname} />
            </div>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>E-Mail Address</label>
            <input value={enteredEmail} type='email' id='email' onChange={getEmail} />
          </div>
          <div className='form-actions'>
            <button>Submit</button>
          </div>
        </form>
      );
};

export default BasicForm;