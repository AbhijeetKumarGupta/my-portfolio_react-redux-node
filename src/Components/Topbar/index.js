import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./topbar.module.css";

class Topbar extends Component {
  scrollTo = (val) => {
    window.scrollTo({
      top: val,
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
            onClick={() => this.scrollTo(625)}
          >
            About
          </span>

          <span
            className={styles.navMenuItem}
            onClick={() => this.scrollTo(1250)}
          >
            Experience
          </span>

          <span
            className={styles.navMenuItem}
            onClick={() => this.scrollTo(1865)}
          >
            Skills
          </span>

          <span
            className={styles.navMenuItem}
            onClick={() => this.scrollTo(2470)}
          >
            Certification
          </span>

          <span
            className={styles.navMenuItem}
            onClick={() => this.scrollTo(3080)}
          >
            Projects
          </span>

          <span
            className={styles.navMenuItem}
            onClick={() => this.scrollTo(3685)}
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
