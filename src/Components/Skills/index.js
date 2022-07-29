import React, { Component } from "react";
import { connect } from "react-redux";
import { setSkills } from "../../Redux/Actions/Actions";

import styles from "./skills.module.css";

class Skills extends Component {
  componentDidMount() {
    fetch("https://pf-backend-api.herokuapp.com/skills")
      .then((res) => res.json())
      .then((result) => this.props.setSkills(result));
  }

  render() {
    const style = {
      backgroundImage: `linear-gradient(25deg,rgba(255, 255, 255, 0.83) 50%,rgba(193, 195, 204, 0.28) 100%),url(${this.props.image})`,
    };
    return (
      <div id="skills">
        <div id={styles.skills} className={styles.skillsDiv} style={style}>
          <div id={styles.skillsHeading}>
            <span>Skills</span>
          </div>
          <div id={styles.skills} className={styles.cardsDiv}>
            {this.props.skillsData.length > 0 &&
              this.props.skillsData.map(({ name, logo, detailLink }, index) => (
                <div className={styles.cardSkill} key={index}>
                  <a
                    className={styles.skillLogo}
                    href={detailLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={logo} alt="" />
                  </a>
                  <p className={styles.skillName}>{name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  image: state.skillsBackImage,
  skillsData: state.skills,
});

const mapDispatchToProps = (dispatch) => ({
  setSkills: (payload) => dispatch(setSkills(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
