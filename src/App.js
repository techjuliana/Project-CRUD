import React from "react";
import { Header } from "./components/header";
import {Resume} from "./components/resume";
import {Form} from "./components/form";

function App() {
  return (
    <div>
      <Header/> 
      <Resume/>
      <Form/>
    </div>
  );
}

export default App;
