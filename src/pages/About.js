import React, { Component } from 'react';
import "./About.css";
import elizabeth_lee from "../assets/elizabeth_lee.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {elizabeth_lee}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Elizabeth Lee</div>
            <div className="brief_description">
              Hi, I'm Elizabeth! I'm a rising junior at Carnegie Mellon University
              studying Information Systems, Human-Computer Interaction, and Computer Science.
              Outside classes, I like to play the piano and drive for my CMU Buggy team.
              This summer, I'm a Product Management intern for HP Inc. in Houston, TX!
            </div>
          </div>
        </div>
      </div>
    )
  }
}