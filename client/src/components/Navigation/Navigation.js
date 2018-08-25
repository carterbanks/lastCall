import React, { Component } from 'react';
import API from '../../utils/API';
import { getFromStorage, setInStorage } from '../../utils/storage';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import './Navigation.css';

  export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      token: '',
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  
  componentDidMount() {
    console.log(this.state.token);
    if(this.state.token.length !== 24) {
      // this.props.history.push("/");
      return null;
    } else {
      return null;
    }
  }

  logoutUser = () => {
    
    const obj = getFromStorage('lastCall');
    console.log(obj);
    if (obj && obj.token) {
      //Verify token
      const token = obj.token;
      console.log(token);
      API.userLogout(token)
        .then(res => res.data.success)
        .then(res => {
          //If there is a token
          //Update state to token and halt loading
          if (res) {
            setInStorage('lastCall', {token: ''});
            this.setState({
              token: '',
              isLoading: false
            });
            console.log(this.state.token);
          } else if (!res){
            this.setState({
              isLoading: false
            });
          }
        });

    }
    else {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    
    return (
        <Navbar light expand="md">
          <NavbarBrand href="/"><img className="lc-logo-nav" src="https://github.com/carterbanks/test-images/blob/master/lc-logo-placeholder.png?raw=true" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/go-to-a-party">Guest</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/host-a-party">Host</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Settings
                  </DropdownItem>
                  <DropdownItem>
                    Customize
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                  onClick={this.logoutUser}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}



export default Navigation
