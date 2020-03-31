import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { getHomeStats } from "../redux/actions/home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamWork from "../assets/teamwork.svg";
import Project from "../assets/project.svg";
import Member from "../assets/member.svg";
import Team from "../assets/team.svg";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    document.title = "Rwanda Open Source - Home";
    this.props.getHomeStats();
  }

  render() {
    const { status, members, repos, teams } = this.props;
    return (
      <div className="page-container section">
        <Header />
        <div className="container has-text-centered-mobile">
          <div className="columns">
            <div className="column is-half">
              <div className="title is-4 is-6-mobile">
                RWANDA OPEN SOURCE COMMUNITY
              </div>
              <div className="title is-6 is-6-mobile">
                Grow through what you do with{" "}
                <span role="img" aria-label="heart">
                  {" "}
                  ❤️
                </span>
                , Open Source from Rwanda.
              </div>
              <p className="has-padding-6-mobile">
                A community driven to make and publish Open Source contents and
                softwares with the power of distributed peer review and
                transparency of process.
              </p>
              <br />
              <p>
                <a href="/about" className="button custom-button">
                  {" "}
                  Learn more{" "}
                </a>
              </p>
            </div>
            <div className="column is-half">
              <img
                src={TeamWork}
                alt="teamwork"
                className="image has-padding-7-mobile"
              />
            </div>
          </div>
        </div>
        <div className="container top-margin">
          <div className="columns is-mobile is-centered">
            <div className="column status has-text-centered">
              <div className="title is-5">WHAT IS OUR CURRENT STATUS ?</div>
            </div>
          </div>
          <div className="columns is-mobile has-text-centered">
            <div className="column">
              <img src={Project} alt="project" className="icon" />
              <br />
              <span className="font-primary title is-6">
                {status === 200 ? repos : "..."}
              </span>
              <br />
              Projects
            </div>
            <div className="column">
              <img src={Team} alt="team" className="icon" />
              <br />
              <span className="font-primary title is-6">
                {status === 200 ? teams : "..."}
              </span>
              <br />
              Teams
            </div>
            <div className="column">
              <img src={Member} alt="member" className="icon" />
              <br />
              <span className="font-primary title is-6">
                {status === 200 ? members : "..."}
              </span>
              <br />
              Members
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Home.defaultProps = {
  members: 0,
  repos: 0,
  teams: 0,
  status: 0,
  getHomeStats
};

Home.propTypes = {
  repos: propTypes.number,
  members: propTypes.number,
  teams: propTypes.number,
  status: propTypes.number,
  getHomeStats: propTypes.func
};

const mapStateToProps = ({ Home }) => ({
  repos: Home.repos,
  members: Home.members,
  teams: Home.teams,
  status: Home.status,
  projects: Home.projects
});

const mapDispatchToProps = dispatch => ({
  getHomeStats: async () => getHomeStats(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
