import React, { Component } from "react";
import Navbar from "./components/navbar";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";
import Signup from './components/SignUp';
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton>
                <Signup/>
            </div>
        );
    }
}

export default App;