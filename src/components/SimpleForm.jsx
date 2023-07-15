import React from "react";

function SimpleForm(){

    return(
        <form >
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
            </div>
            <div className="form-action">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleForm;