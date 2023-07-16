import React, { useState } from "react";

function SimpleForm(){

    const [enteredName, setEnteredName] = useState('');

    const getName = (event) => {
        setEnteredName(event.target.value);
    }

    const formSubmit = (event) => {
        event.preventDefault();

        console.log(enteredName);
        setEnteredName('')
    }

    return(
        <form onSubmit={formSubmit} >
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" onChange={getName} />
            </div>
            <div className="form-action">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleForm;