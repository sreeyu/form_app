import React, { useState } from "react";

function SimpleForm(){

    const [enteredName, setEnteredName] = useState('');
    const [inputIsTouched, setInputIsTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsTouched, setEmailIsTouched] = useState(false);

    const nameIsValid = enteredName.trim() !== '';
    const inputIsInvalid = inputIsTouched && !nameIsValid;
    let formIsValid = false;

    if(nameIsValid){
        formIsValid = true;
    }

    const emailIsValid = enteredEmail.trim().includes('@');
    const emailIsInvalid = emailIsTouched && !emailIsValid;

    const getName = (event) => {
        setEnteredName(event.target.value);
    }

    const onLostFocus = () => {
        setInputIsTouched(true)
    }

    const getEmail = (event) => {
        setEnteredEmail(event.target.value);
    }

    const emailBlur = () => {
        setEmailIsTouched(true);
    }

    const formSubmit = (event) => {
        event.preventDefault();

        setInputIsTouched(true);

        console.log(enteredName);
        console.log(enteredEmail);

        setEnteredName('');
        setInputIsTouched(false);

        setEnteredEmail('');
        setEmailIsTouched(false);
    }

    

    

    const formClass = inputIsInvalid ? 'form-control invalid' : 'form-control';
    const emailClass = emailIsInvalid ? 'form-control invalid' : 'form-control';

    return(
        <form onSubmit={formSubmit} >
            <div className={formClass}>
                <label htmlFor="name">Your Name</label>
                <input value={enteredName} type="text" id="name" onChange={getName} onBlur={onLostFocus} />
            </div>
            {inputIsInvalid && <p className="error-text">Please enter your name</p>}
            <div className={emailClass}>
                <label htmlFor="email">Email</label>
                <input value={enteredEmail} type="email" id="email" onChange={getEmail} onBlur={emailBlur} />
                {emailIsInvalid && <p className="error-text">Please enter valid email</p>}
            </div>
            <div className="form-action">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleForm;