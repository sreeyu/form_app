import React from "react";

function SimpleForm(){

    return(
        <form >
            <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleForm;