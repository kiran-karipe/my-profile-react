import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import NavBar, {
  HOME,
  ABOUT,
  PROJECTS,
  SKILLS
} from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNavItem: HOME,
    };
    this.handleClickNavItem = this.handleClickNavItem.bind(this);
    this.handleClickFooterHome = this.handleClickFooterHome.bind(this);
  }

  handleClickNavItem = (item) => {
    this.setState({
      selectedNavItem: item
    })
  }

  handleClickFooterHome = () => {
    this.setState({
      selectedNavItem: HOME
    })
  }


  render() {
    return (
      <div className="App">
        <NavBar selected={ this.state.selectedNavItem }
          onClickNavItem={ this.handleClickNavItem } />
        { this.state.selectedNavItem === HOME     && <Welcome /> }
        { this.state.selectedNavItem === ABOUT    && <About /> }
        { this.state.selectedNavItem === PROJECTS && <Projects /> }
        { this.state.selectedNavItem === SKILLS   && <Skills /> }
        <Footer
        onClickFooterItem={ this.handleClickFooterHome }/>
      </div>
    );
  }
}

export default App;
