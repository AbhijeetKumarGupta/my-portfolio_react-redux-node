import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./topbar.module.css";

class Topbar extends Component {
  scrollTo = (val) => {
    window.scrollTo({
      top: window.innerHeight * val,
      behavior: "smooth",
      sel: 0,
    });
  };

  render() {
    return (
      <div className={styles.topbarDiv}>
        <span id={styles.logoDiv} onClick={() => this.scrollTo(0)}>
          <img className={styles.userLogo} src={this.props.logo} alt="" />
        </span>
        <div id={styles.publicProfileLinksDiv}>
          <a
            href={this.props.links.linkedInLink}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>
          <a
            href={this.props.links.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true" />
          </a>
        </div>
        <div id={styles.navMenuDiv}>
          <span className={styles.navMenuItem} onClick={() => this.scrollTo(0)}>
            Home
          </span>

          <span
            className={styles.navMenuItem}
            onClick={() => this.scrollTo(0.93)}
          >
            About
          </span>

          <span
            className={styles.navMenuItem}
            onClick={() => this.scrollTo(1.845)}
          >
            Experience
          </span>

          <span
            className={styles.navMenuItem}
            onClick={() => this.scrollTo(2.77)}
          >
            Skills
          </span>

          <span
            className={styles.navMenuItem}
            onClick={() => this.scrollTo(3.68)}
          >
            Certification
          </span>

          <span
            className={styles.navMenuItem}
            onClick={() => this.scrollTo(4.56)}
          >
            Projects
          </span>

          <span
            className={styles.navMenuItem}
            onClick={() => this.scrollTo(5.55)}
          >
            Contact
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logo: state.logo,
  links: state.links,
});

export default connect(mapStateToProps, null)(Topbar);
