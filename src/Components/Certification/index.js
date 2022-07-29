import React, { Component } from "react";
import { connect } from "react-redux";
import { setCertifications } from "../../Redux/Actions/Actions";
import styles from "./certifications.module.css";

class Certifications extends Component {
  componentDidMount() {
    fetch("https://pf-backend-api.herokuapp.com/certificates")
      .then((res) => res.json())
      .then((result) => this.props.setCertifications(result));
  }

  render() {
    return (
      <div id="certificates">
        <div id={styles.certification} className={styles.certificationDiv}>
          <div id={styles.certifictionHeading}>
            <span>Certification's</span>
          </div>
          <div id={styles.certificationCardsDiv}>
            {this.props.certData.length > 0 &&
              this.props.certData.map(
                (
                  { instLink, instLogo, cerLink, certName, skillName },
                  index
                ) => (
                  <div className={styles.certCard} key={index}>
                    <a
                      href={instLink}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.certInstLogo}
                    >
                      <img src={instLogo} alt="" />
                    </a>
                    <a
                      href={cerLink}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.certDetails}
                    >
                      <p className={styles.certName}>{certName}</p>
                      <p className={styles.keySkillName}>
                        Key Skill: <span>{skillName}</span>
                      </p>
                    </a>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  certData: state.certifications,
});

const mapDispatchToProps = (dispatch) => ({
  setCertifications: (payload) => dispatch(setCertifications(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Certifications);
