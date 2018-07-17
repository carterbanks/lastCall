import React from 'react';
import './App.css';
// import Birthdate from "./Components/Pages/Signup/Birthdate";
import Home from "./components/Pages/Home/";
// import GroupSnap from "./Components/Pages/JoinTheParty/GroupSnap";
import Login from "./components/Pages/Login";
import Logout from "./components/Pages/Logout";
import Signup from "./components/Pages/Signup";
import Navigation from "./components/Navigation";
import Wrapper from "./components/Wrapper";
import { BrowserRouter, Route } from 'react-router-dom';
import Guest from "./components/Pages/ChooseRole/Guest/Guest.js";
import Btn from "./components/Btn.js";
import Host from "./components/Pages/ChooseRole/Host/Host.js";
import Matches from "./components/Pages/ChooseRole/Matches/Matches.js";
import FirstImpression from "./components/Pages/JoinTheParty/FirstImpression/FirstImpression.js"; 
import GroupSnap from "./components/Pages/JoinTheParty/GroupSnap/GroupSnap.js";


export default () => (
  <BrowserRouter>
    <div>
    
    <Wrapper>
      <Navigation/>
    <Route exact path="/" component= {Home} />
    <Route path = "/login" component = {Login} />
    <Route path = "/logout" component = {Logout} />
    <Route path = "/signup" component = {Signup} />
    <Route path = "/camera" component= {FirstImpression} />
    <Route path = "/host-a-party" component= {Host} />
    <Route path = "/go-to-a-party" component= {Guest} />
    </Wrapper>
    </div>
  </BrowserRouter>
)
