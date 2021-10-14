import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setLogo,
  setLinks,
  setHomeBackImage,
  setAboutImage,
  setAboutPara,
  setSkillsBackImage,
  setContactBackImage,
  setContactData,
} from "./Redux/Actions/Actions";

import Home from "./Components/Home";
import Topbar from "./Components/Topbar";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Certifications from "./Components/Certification";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";

class App extends Component {
  componentDidMount() {
    fetch("https://pf-backend-api.herokuapp.com/others")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ otherData: result });
        this.props.setLogo(result[0].otherImages.topbarLogo);
        this.props.setLinks(result[3]);
        this.props.setHomeBackImage(result[0].otherImages.homeBackImage);
        this.props.setAboutImage(result[0].otherImages.aboutImage);
        this.props.setAboutPara(result[1].aboutInfo.aboutPara);
        this.props.setSkillsBackImage(result[0].otherImages.skillsBackImage);
        this.props.setContactBackImage(result[0].otherImages.contactBackImage);
        this.props.setContactData(result[2].contactInfo);
      });
  }
  render() {
    return (
      <main>
        <Topbar />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Project />
        <Contact />
        <Footer />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLogo: (payload) => dispatch(setLogo(payload)),
  setLinks: (payload) => dispatch(setLinks(payload)),
  setHomeBackImage: (payload) => dispatch(setHomeBackImage(payload)),
  setAboutImage: (payload) => dispatch(setAboutImage(payload)),
  setAboutPara: (payload) => dispatch(setAboutPara(payload)),
  setSkillsBackImage: (payload) => dispatch(setSkillsBackImage(payload)),
  setContactBackImage: (payload) => dispatch(setContactBackImage(payload)),
  setContactData: (payload) => dispatch(setContactData(payload)),
});

export default connect(null, mapDispatchToProps)(App);
