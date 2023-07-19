import React, { useState } from "react";
import useInput from "../hooks/use-input";

function SimpleForm(){

    const {
        value: enteredName, 
        isValid: nameIsValid, 
        hasError: inputIsInvalid, 
        getValue: getName, 
        onLostFocus, 
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailIsInvalid,
        getValue: getEmail,
        onLostFocus: emailBlur,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'))

    

   

    let formIsValid = false;

    if(nameIsValid && emailIsValid){
        formIsValid = true;
    }

    

    const formSubmit = (event) => {
        event.preventDefault();

        if(!nameIsValid){
            return;
        }

        console.log(enteredName);
        console.log(enteredEmail);

        resetNameInput();

        resetEmailInput();
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