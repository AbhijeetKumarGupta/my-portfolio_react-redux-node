import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setProjects,
  setProjectCurSel,
  setProjectDesc,
  setProjectURL,
  setViewFrame,
} from "../../Redux/Actions/Actions";
import arrowLogo from "../../Images/play.svg";
import styles from "./projects.module.css";

class Project extends Component {
  componentDidMount() {
    fetch("https://pf-backend-api.herokuapp.com/projects")
      .then((res) => res.json())
      .then((result) => {
        this.props.setProjects(result.reverse());
        if (this.props.projectsData.length > 0) {
          var desc = this.props.projectsData[0].description.split("\n");
          this.props.setProjectDesc(desc);
          this.props.setProjectURL(
            this.props.projectsData[this.props.curSel].url
          );
        }
      });
  }

  handleSelect = (e) => {
    console.log(e.target.id);
    this.props.setProjectCurSel(parseInt(e.target.id));
    this.props.setProjectDesc(
      this.props.projectsData[parseInt(e.target.id)].description.split("\n")
    );
    this.props.setProjectURL(
      this.props.projectsData[parseInt(e.target.id)].url
    );
  };

  handleViewFrame = (e) => {
    let val = this.props.viewFrame === "0" ? "1" : "0";
    this.props.setViewFrame(val);
  };

  render() {
    return (
      <div id="projects">
        {this.props.viewFrame === "0" ? (
          <div className={styles.projectDiv}>
            <div id={styles.projectHeading}>
              <span>Projects</span>
            </div>
            <div id={styles.projectCardsDiv}>
              <div id={styles.projListDiv}>
                {this.props.projectsData.length > 0 &&
                  this.props.projectsData.map(
                    ({ name, institution, cLogo }, index) => (
                      <div
                        className={
                          this.props.curSel === index
                            ? `${styles.card}${" "}${styles.active}`
                            : `${styles.card}`
                        }
                        key={index}
                      >
                        <div className={styles.listDiv}>
                          <div className={styles.logoInstDiv}>
                            <img src={cLogo} alt="" />
                          </div>
                          <div className={styles.projInfoDiv}>
                            <span
                              className={styles.projName}
                              id={index}
                              onClick={this.handleSelect}
                            >
                              {name}
                            </span>
                            <span className={styles.instName}>
                              {institution}
                            </span>
                          </div>
                        </div>
                        <div
                          className={
                            this.props.curSel === index
                              ? `${styles.arrowDiv}${" "}${styles.active}`
                              : `${styles.arrowDiv}`
                          }
                        >
                          <img src={arrowLogo} alt="" />
                        </div>
                      </div>
                    )
                  )}
              </div>
              <div className={styles.projDetailDiv}>
                <h2>About :-</h2>
                <div className={styles.otherProjects}>
                  {this.props.desc.map((item, index) => (
                    <p key={index + 100}>{item}</p>
                  ))}
                  {this.props.projUrl && (
                    <>
                      <button onClick={this.handleViewFrame}>Open</button>
                      <a
                        href={this.props.projUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open In New Tab
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.frameDiv}>
            <button onClick={this.handleViewFrame}>{"Go Back"}</button>
            <iframe
              className={styles.siteFrame}
              src={this.props.projUrl}
              title={this.props.projUrl}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  projectsData: state.projects,
  curSel: state.projCurSel,
  desc: state.projDesc,
  projUrl: state.projUrl,
  viewFrame: state.viewFrame,
});

const mapDispatchToProps = (dispatch) => ({
  setProjects: (payload) => dispatch(setProjects(payload)),
  setProjectCurSel: (payload) => dispatch(setProjectCurSel(payload)),
  setProjectDesc: (payload) => dispatch(setProjectDesc(payload)),
  setProjectURL: (payload) => dispatch(setProjectURL(payload)),
  setViewFrame: (payload) => dispatch(setViewFrame(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
