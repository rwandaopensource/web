import React from "react";
import Logo from "../assets/logo.png";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="footer top-margin">
        <div className="columns">
          <div className="column has-text-centered">
            <a href="/">
              <img
                src={Logo}
                alt="Rwanda Open Source"
                className="icon is-medium"
              />
            </a>
          </div>
          <div className="column">
            <p className="has-text-black menu-label"> Pages </p>
            <br />
            <a href="/blog" className="has-text-white">
              {" "}
              Blog{" "}
            </a>
            <br />
            <a href="teams" className="has-text-white">
              {" "}
              Teams{" "}
            </a>
            <br />
            <a href="/members" className="has-text-white">
              {" "}
              Members{" "}
            </a>
            <br />
            <a href="/about" className="has-text-white">
              {" "}
              About{" "}
            </a>
          </div>
          <div className="column">
            <p className="has-text-black menu-label"> More </p>
            <br />
            <a href="/services" className="has-text-white">
              {" "}
              Services{" "}
            </a>
            <br />
            <a href="/about#contact" className="has-text-white">
              {" "}
              Contact us{" "}
            </a>
            <br />
            <a href="/about/?s=join#contact" className="has-text-white">
              {" "}
              Join Us{" "}
            </a>
          </div>
          <div className="column">
            <p className="menu-label has-text-black"> Social </p>
            <br />
            <a
              href="https://github.com/rwandaopensource"
              target="_blank"
              rel="noopener noreferrer"
              title="github"
              className="has-text-white"
            >
              {" "}
              Github{" "}
            </a>
            <br />
            <a
              href="https://twitter.com/opensource_rw"
              target="_blank"
              rel="noopener noreferrer"
              title="twitter"
              className="has-text-white"
            >
              {" "}
              Twitter{" "}
            </a>
            <br />
            <a
              href="https://bit.ly/2JANowH"
              target="_blank"
              rel="noopener noreferrer"
              title="slack"
              className="has-text-white"
            >
              {" "}
              Slack{" "}
            </a>
          </div>
        </div>
        <p className="has-text-white copr has-text-centered">
          © 2020 Rwanda Open Source.
        </p>
      </footer>
    );
  }
}

export default Footer;
