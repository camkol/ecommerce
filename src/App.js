import React from "react";
import "./app.css";

import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <main>
      <section id="registration">
        <h1>Registration Form</h1>
        <p>Please fill out this form with the required information</p>
        <RegistrationForm />
      </section>
    </main>
  );
}

export default App;
