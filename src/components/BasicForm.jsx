import React, { useState } from "react";

function BasicForm(){

  const [enteredFName, setEnteredFName] = useState('');
  const [enteredLName, setEnteredLName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const getFname = (event) => {
    setEnteredFName(event.target.value);
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

    return (
        <form onSubmit={formSubmission}>
          <div className='control-group'>
            <div className='form-control'>
              <label htmlFor='fname'>First Name</label>
              <input value={enteredFName} type='text' id='fname' onChange={getFname} />
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