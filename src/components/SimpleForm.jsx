import React, { useState } from "react";

function SimpleForm(){

    const [enteredName, setEnteredName] = useState('');
    const [inputIsTouched, setInputIsTouched] = useState(false);

    const nameIsValid = enteredName.trim() !== '';
    const inputIsInvalid = inputIsTouched && !nameIsValid

    const getName = (event) => {
        setEnteredName(event.target.value);
    }

    const onLostFocus = () => {
        setInputIsTouched(true)
    }

    const formSubmit = (event) => {
        event.preventDefault();

        setInputIsTouched(true);

        console.log(enteredName);
        setEnteredName('');
        setInputIsTouched(false);
    }

    

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