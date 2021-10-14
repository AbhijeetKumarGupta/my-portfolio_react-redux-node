import React, { Component } from "react";
import styles from "./experience.module.css";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expData: [],
    };
  }

  componentDidMount() {
    fetch("https://pf-backend-api.herokuapp.com/companies")
      .then((res) => res.json())
      .then((result) => this.setState({ expData: result }));
  }

  render() {
    return (
      <div id={styles.experience} className={styles.experienceDiv}>
        <p id={styles.experienceHeading}>Experience</p>
        <div id={styles.experienceCardWrapper}>
          {this.state.expData.length > 0 &&
            this.state.expData.map(
              (
                {
                  compLink,
                  compLogo,
                  compName,
                  compDesc,
                  role,
                  duration,
                  year,
                },
                index
              ) => (
                <div className={styles.cardExperience} key={index}>
                  <a
                    href={compLink}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.companyLogoDiv}
                  >
                    <img src={compLogo} alt="" />
                  </a>
                  <div className={styles.companyDetailsDiv}>
                    <p className={styles.companyName}>
                      <span className={styles.headingsCompanyDetails}>
                        Company:{" "}
                      </span>
                      {compName}
                    </p>
                    <p className={styles.companyAbout}>
                      <span className={styles.headingsCompanyDetails}>
                        Description:{" "}
                      </span>
                      {compDesc}
                    </p>
                    <p className={styles.roleInCompany}>
                      <span className={styles.headingsCompanyDetails}>
                        Role:{" "}
                      </span>
                      {role}
                    </p>
                    <p className={styles.timeWorked}>
                      <span className={styles.headingsCompanyDetails}>
                        Duration:{" "}
                      </span>
                      {duration}
                    </p>
                    <p className={styles.workedFromTo}>
                      <span className={styles.headingsCompanyDetails}>
                        Year:{" "}
                      </span>
                      {year}
                    </p>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    );
  }
}

export default Experience;
