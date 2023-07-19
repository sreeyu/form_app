import { useState } from "react";

function useInput(validateValue){

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = isTouched && !valueIsValid;

    const getValue = (event) => {
        setEnteredValue(event.target.value);
    }

    const onLostFocus = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return{
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        getValue,
        onLostFocus,
        reset
    };
};

export default useInput;