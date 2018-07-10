import React from 'react';
import './App.css';
// import Birthdate from "./Components/Pages/Signup/Birthdate";
import Home from "./components/Pages/Home/";
// import FirstImpression from "./Components/Pages/JoinTheParty/FirstImpression";
// import GroupSnap from "./Components/Pages/JoinTheParty/GroupSnap";
import Login from "./components/Pages/Login";
import Logout from "./components/Pages/Logout";
import Signup from "./components/Pages/Signup";
import Navigation from "./components/Navigation";
import Wrapper from "./components/Wrapper";
import { BrowserRouter, Route } from 'react-router-dom';


export default () => (
  <BrowserRouter>
    <div>
    <Navigation/>
    <Wrapper>
    <Route exact path="/" component= {Home} />
    <Route path = "/login" component = {Login} />
    <Route path = "/logout" component = {Logout} />
    <Route path = "/signup" component = {Signup} />
    </Wrapper>
    </div>
  </BrowserRouter>
)
