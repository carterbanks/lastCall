import React, { Component } from 'react';
import './Signup.css';
import { Userinfo } from './UserInfo/Userinfo';
// import Userinfo from './UserInfo/';

export class Signup extends Component {
  render() {
    return (
      // <div>
      //   <div class="section">
      //     <div class="container-flex">
      //       <div class="jumbotron jumbotron-fluid phone-screen">
      //         {/* NAV BAR */}
      //         <div class="container-flex">
      //           <nav class="navbar navbar-light bg-light" className="lcNav">
      //             <ul class="nav nav-fill">
      //               <li class="nav-item">
      //                 <a class="navbar-brand" href="#">
      //                   <img className="left-arrow" src="https://github.com/carterbanks/test-images/blob/master/left-arrow.png?raw=true" />
      //                 </a>
      //               </li>
      //               <li class="nav-item">
      //                 <a class="navbar-brand" href="#">
      //                   {/* <h2 className="home-button nav-title">Home</h2>  */}
      //                   <img className="account-profile" src="https://github.com/carterbanks/test-images/blob/master/lc-account-img.png?raw=true" />
      //                 </a>
      //               </li>
      //               <li class="nav-item">
      //                 <a class="navbar-brand" href="#">
      //                   <img className="message-bubble" src="https://github.com/carterbanks/test-images/blob/master/lc-message-img.png?raw=true" />
      //                 </a>
      //               </li>
      //             </ul>
      //           </nav>
      //         </div>
      //         {/* SPACE */}
      //         <div class="container-flex" className="space">
      //         </div>
      //         {/* SPACE */}
      //         <div class="container-flex" className="space">
      //         </div>
      //         {/* LOGO */}
      //         <div class="container-flex">
      //           <img className="lcLogo" src="https://github.com/carterbanks/test-images/blob/master/lc-logo-placeholder.png?raw=true" />
      //         </div>
      //         {/* SPACE */}
      //         <div class="container-flex" className="space">
      //         </div>
      //         {/* TITLE/TAGLING */}
      //         <div class="container">
      //           <h1 class="display-4" className="title-font">The Uber of</h1>
      //           <h1 class="display-4" className="title-font">Partying</h1>
      //         </div>
      //         {/* BUTTON: LOGIN */}
      //         <div class="containter">
      //           <button type="button" class="btn btn-primary btn-lg">Login</button>
      //         </div>
      //         {/* SPACE */}
      //         <div class="container-flex" className="space">
      //         </div>
      //         {/* BUTTON: SIGN UP */}
      //         <div class="containter">

      //           <button type="button" class="btn btn-primary btn-lg">
      //             <Link
      //               to="/signup"
      //               className={
      //                 window.location.pathname === "/signup"
      //               }
      //             >Sign Up
      //                 </Link></button>

      //         </div>
      //         {/* SPACE */}
      //         <div class="container-flex" className="space">
      //         </div>
      //         {/* SPACE */}
      //         <div class="container-flex" className="space">
      //         </div>
      //         {/* SPACE */}
      //         <div class="container-flex" className="space">
      //         </div>
      //         {/* SPACE */}
      //         <div class="container-flex" className="space">
      //         </div>
      //         {/* DISCLAIMER */}
      //         <div class="container-flex">
      //           <p class="lead" className="disclaimer">We do not post or share your information. By proceeding, you're confirming that you're 21+ and accept our terms of service.</p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <Userinfo></Userinfo>

    )
  }
}

export default Signup;
