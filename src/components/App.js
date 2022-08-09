import React from "react";
import {
  CardImg,
  Card,
  CardText,
  CardImgOverlay,
  CardTitle,
  Row,
} from "reactstrap";
import Purple from '../image/Purple.png';
import Home from "./home";

import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import Goals from "./goals";

class App extends React.Component {
  state = {
    home: true,
    education: false,
    skills: false,
    experience: false,
    goals: false,
  };

  handleClick = (event) => {
    console.log(event.target.getAttribute("name"));
    this.setState({
      home: false,
      education: false,
      skills: false,
      experience: false,
      goals: false,
    });
    this.setState({
      [event.target.getAttribute("name")]: true,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App text-center" >
        <div className="d-none d-lg-block">
        <div className=" row mt-4 mx-2">
          <div className="col d-flex justify-content-start   ">
            <div className=" btn mx-2 btn-primary  " onClick={this.handleClick} name="home">
              Home
            </div>
           
          </div>
          
          <div className="col d-flex justify-content-end">
            <div
              className="btn btn-success mx-2"
              onClick={this.handleClick}
              name="education"
            >
              Education
            </div>
            <div className="btn mx-2 btn-success" onClick={this.handleClick} name="skills">
              skills
            </div>
            <div
              className="btn mx-2 btn-success"
              onClick={this.handleClick}
              name="experience"
            >
              Experience
            </div>
            <div className="btn mx-2 btn-success" onClick={this.handleClick} name="goals">
              Contact
            </div>
          </div>
        </div></div>

{/* small screen */}
        <div className="d-block d-lg-none">
        <div className=" row m-2 ">
          
            <div className=" btn  btn-primary  " onClick={this.handleClick} name="home">
              Home
            </div>
            </div>
            <div className="row  mx-1">
            <div
              className="btn btn-success btn-sm mx-1 col"
              onClick={this.handleClick}
              name="education"
            >
              Education
            </div>
            <div className="btn btn-sm mx-1  btn-success col" onClick={this.handleClick} name="skills">
              skills
            </div>
            <div
              className="btn btn-success btn-sm mx-1 col"
              onClick={this.handleClick}
              name="experience"
            >
              Experience
            </div>
            <div className="btn btn-success btn-sm  col mx-1" onClick={this.handleClick} name="goals">
              Contact
            </div>
          </div>
        </div>



        {/* <Home /> */}
        {this.state.education ? <Education /> : null}
        {this.state.experience ? <Experience /> : null}
        {this.state.skills ? <Skills /> : null}
        {this.state.goals ? <Goals /> : null}
        {this.state.home ? <Home /> : null}
      </div>
    );
  }
}

export default App;
