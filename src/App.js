import React, { Fragment } from "react";
import SimpleForm from "./components/SimpleForm";
import BasicForm from "./components/BasicForm";

function App() {
  return (
    <Fragment>
      <div className="App">
        <SimpleForm />
      </div>
      <div className="App">
        <BasicForm />
      </div>
    </Fragment>
    
  );
}

export default App;
