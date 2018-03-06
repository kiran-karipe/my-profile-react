import React, { Component } from 'react';
import './CSS/Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I am Sai Kiran Karipe</h1>
          <h3>I am passionate about
              <span> web applications </span>
              and looking for a place where
              I can work with large-scale systems that can handle millions of users.
              Building both
              <span> server side </span>
              and
              <span> client side </span>
              web applications using
              <span> Node.js </span> and <span>React</span>.
          </h3>
        </div>
      </div>
    )
  }
}

export default Welcome;
