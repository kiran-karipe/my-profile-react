import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import './CSS/Projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      selectedLearnMoreButtonFirstProject: false,
      selectedLearnMoreButtonSecondProject: false,
      selectedLearnMoreButtonThirdProject: false
    }
  }

  render() {
    let buttonNameFirstProject = "See More";
    let buttonNameSecondProject = "See More";
    let buttonNameThirdProject = "See More";
    if(this.state.selectedLearnMoreButtonFirstProject) {
      buttonNameFirstProject = "See Less";
    }
    if(this.state.selectedLearnMoreButtonSecondProject) {
      buttonNameSecondProject = "See Less";
    }
    if(this.state.selectedLearnMoreButtonThirdProject) {
      buttonNameThirdProject = "See Less";
    }
    return(
      <div className="Projects">
        <div>
          <h2>ZenSurvey using Node & React</h2>
          <p>
            Built and deployed feedback-collection web application with NodeJS, React, Redux, Express, and MongoDB.
          </p>
          <p>
            <Button bsStyle="primary" onClick = {() => this.setState({ selectedLearnMoreButtonFirstProject: !this.state.selectedLearnMoreButtonFirstProject})}>
            {buttonNameFirstProject}</Button>
          </p>
          <Collapse in={this.state.selectedLearnMoreButtonFirstProject}>
            <div>
              <p>Built rich user interfaces using React/Redux and connected it to a NodeJS and Express backend.</p>
              <p>Enhanced authentication flows with Google OAuth authentication.</p>
              <p>Integrated with Stripe payment system for handling credit card transactions.</p>
              <p>Communicating data from Mongo database to the React application.</p>
            </div>
          </Collapse>
        </div>
        <div>
          <h2>Integration of Google Actions Using DialogFlow</h2>
          <p>
            Integrated various Google actions using DialogFlow which allowed the users to
            interact with the application via the Google Assistant using their voice commands.
          </p>
          <p>
            <Button bsStyle="primary" onClick = {() => this.setState({ selectedLearnMoreButtonSecondProject: !this.state.selectedLearnMoreButtonSecondProject})}>
            {buttonNameSecondProject}</Button>
          </p>
          <Collapse in={this.state.selectedLearnMoreButtonSecondProject}>
            <div>
              <p>Created a backend service on Node.js that interacts with UPS tracking APIs to retrieve the package tracking details for the voice assistant.</p>
            </div>
          </Collapse>
        </div>
        <div>
          <h2>Database Schema Design for a Reservation Systems</h2>
          <p>
            Presented a relational database design for a simple Railway Reservation Management Systems
            as a part of coursework for Integration of Database Systems.
          </p>
          <p>
            <Button bsStyle="primary" onClick = {() => this.setState({ selectedLearnMoreButtonThirdProject: !this.state.selectedLearnMoreButtonThirdProject})}>
            {buttonNameThirdProject}</Button>
          </p>
          <Collapse in={this.state.selectedLearnMoreButtonThirdProject}>
            <div>
              <p>Created Entity-Relationship diagram to represent the association between various entities in the system.</p>
              <p>Optimized query performance by identifying the common functional SQL statements, normalizing/de-normalizing and adding appropriate indexes and views.</p>
            </div>
          </Collapse>
        </div>
      </div>
    )
  }
}


export default Projects;
