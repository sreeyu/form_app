import React, { useState } from "react";

function SimpleForm(){

    const [enteredName, setEnteredName] = useState('');
    const [nameIsValid, setNameIsValid] = useState(false);
    const [inputIsTouched, setInputIsTouched] = useState(false);

    const getName = (event) => {
        setEnteredName(event.target.value);
    }

    const onLostFocus = (event) => {
        setInputIsTouched(true)

        if(enteredName.trim() === ''){
            setNameIsValid(false);
            return;
        }
    }

    const formSubmit = (event) => {
        event.preventDefault();

        setInputIsTouched(true);

        if(enteredName.trim() === ''){
            setNameIsValid(false);
            return;
        }

        setNameIsValid(true);

        console.log(enteredName);
        setEnteredName('')
    }

    const inputIsInvalid = inputIsTouched && !nameIsValid

    const formClass = inputIsInvalid ? 'form-control invalid' : 'form-control';

    return(
        <form onSubmit={formSubmit} >
            <div className={formClass}>
                <label htmlFor="name">Your Name</label>
                <input value={enteredName} type="text" id="name" onChange={getName} onBlur={onLostFocus} />
            </div>
            {inputIsInvalid && <p className="error-text">Please enter your name</p>}
            <div className="form-action">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleForm;