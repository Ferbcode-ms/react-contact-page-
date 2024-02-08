import React from "react";
import "./app.css";
import Contacthead from "./components/contacthead/contacthead";
import Form from "./components/form/Form";

const App = () => {
  return (
    <>
      <div className="container">
        <Contacthead />
        <Form/>
      </div>
    </>
  );
};

export default App;
