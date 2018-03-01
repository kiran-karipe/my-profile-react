import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
const HOME = 'HOME';
const ABOUT = 'ABOUT';
const PROJECTS = 'PROJECTS';
const SKILLS = 'SKILLS';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Nav
          bsStyle="tabs"
          justified
          activeKey={ this.props.selected }
          onSelect={ key => this.props.onClickNavItem(key) }>
          <NavItem eventKey={HOME}>
            Sai Kiran Karipe
          </NavItem>
          <NavItem eventKey={ABOUT}>
            About Me
          </NavItem>
          <NavItem eventKey={PROJECTS}>
            Projects
          </NavItem>
          <NavItem
            eventKey={SKILLS}
            >
            Skills
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar;
export { HOME, ABOUT, PROJECTS, SKILLS };
