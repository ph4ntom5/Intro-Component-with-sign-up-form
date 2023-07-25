import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Signup from "./components/Signup/Signup.js";
import supabase from "../src/config/supabaseClient";

function App() {
  console.log(supabase);
  return (
    <div className="App">
      <Header />
      <Signup />
    </div>
  );
}

export default App;
