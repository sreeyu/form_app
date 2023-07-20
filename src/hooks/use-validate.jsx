import { useState } from "react";

function useValidate(validateInput){
    const [enteredInput, setEnteredInput] = useState('');
    const [inputIsTouched, setInputIsTouched ] = useState(false);

    const inputIsValid = validateInput(enteredInput);
    const inputIsInvalid = inputIsTouched && !inputIsValid;

    const getInput = (event) => {
        setEnteredInput(event.target.value);
    };
    
    const inputBlur = () => {
        setInputIsTouched(true);
    };

    const reset = () => {
        setEnteredInput('');
        setInputIsTouched(false);
    };

    return {
        value: enteredInput,
        inputIsValid,
        inputIsInvalid,
        getInput,
        inputBlur,
        reset
    };
};

export default useValidate;