import React, { Component } from 'react';
import './CSS/About.css';

class About extends Component {
  render () {
    return(
      <div className="About">
        <div>
          <h2>About Me</h2>
          <p>I am self-motivated programmer who is interested in solving problems using advanced
              data structures and algorithms. I am passionate about web applications and looking
              for a place where I can work with large-scale systems that can handle millions of users.</p>
          <p> I am a graduate student, completed my masters in Computer Information Systems from
              Florida Institute of Technology (December 2017). </p>
          <h3>I am a new graduate NodeJS and React with the following skills: </h3>
          <ul>
            <li>5 years of academic experience in Java and 3 years in JavaScript for building web applications.</li>
            <li>Excellent knowledge in Data Structures & Algorithms, Object Oriented Programming & Java.</li>
            <li>Building front end user interfaces using React, Redux and ES6.</li>
          </ul>
        </div>

      </div>
    )
  }
}

export default About;
