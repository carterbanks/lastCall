import React from 'react';
import './App.css';
// import Birthdate from "./Components/Pages/Signup/Birthdate";
import Home from "./components/Pages/Home/";
// import GroupSnap from "./Components/Pages/JoinTheParty/GroupSnap";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import Navigation from "./components/Navigation";
import Wrapper from "./components/Wrapper";
import { BrowserRouter, Route } from 'react-router-dom';
import Guest from "./components/Pages/ChooseRole/Guest/Guest.js";
import Btn from "./components/Btn.js";
import Host from "./components/Pages/ChooseRole/Host/Host.js";
import Matches from "./components/Matches/Matches.js";
import FirstImpression from "./components/Pages/JoinTheParty/FirstImpression/FirstImpression.js";
import ChooseRole from "./components/Pages/ChooseRole/ChooseRole.js";
//import GroupSnap from "./components/Pages/JoinTheParty/GroupSnap/GroupSnap.js";
import store from './store';
import { Provider } from 'react-redux';



export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navigation />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/camera" component={FirstImpression} />
          <Route path="/host-a-party" component={Host} />
          <Route path="/go-to-a-party" component={Guest} />
          <Route path="/choose-your-role" component={ChooseRole} />
          <Route path="/matches" component={Matches} />
        </Wrapper>
      </div>
    </BrowserRouter>
  </Provider>
)
