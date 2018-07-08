import React, { Component } from 'react';
import './App.css';
// import Birthdate from "./Components/Pages/Signup/Birthdate";
import Home from "./Components/Pages/Home/";
// import FirstImpression from "./Components/Pages/JoinTheParty/FirstImpression";
// import GroupSnap from "./Components/Pages/JoinTheParty/GroupSnap";
import Login from "./Components/Pages/Login";
import Logout from "./Components/Pages/Logout";
import Signup from "./Components/Pages/Signup";
import Navigation from "./Components/Navigation";
import Wrapper from "./Components/Wrapper";
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
