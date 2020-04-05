import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getMembers } from "./../redux/actions/members";
import { connect } from "react-redux";
import propTypes from "prop-types";

export class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.getMembers();
    document.title = "Rwanda Open Source - Members";
  }

  render() {
    const { members, status } = this.props;
    return (
      <div className="page-container section">
        <Header />
        <h1 className="title is-4 has-text-centered">
          RWANDA OPEN SOURCE MEMBERS
        </h1>
        {status == 200 ? (
          <div className="container members">
            <div className="wrapper">
              {members.map((member) => (
                <div className="member" key={member.id}>
                  <div className="member-card">
                    <img className="member-image" src={member.profileURL} alt />
                    <div className="card-content">
                      <div className="member-details has-text-centered">
                        <h3 className="name">{member.name}</h3>
                        <p className="bio">{member.location}</p>
                      </div>
                      <div className="content">{member.bio}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="buttons">
              <button className="button is-grey">
                <i className="fas fa-plus is-white fas-space"></i>Show more
              </button>
            </div>
          </div>
        ) : (
          <div className="members-not-found"></div>
        )}
        <Footer />
      </div>
    );
  }
}

Members.defaultProps = {
  members: [],
  status: 0,
  getMembers,
};

Members.propTypes = {
  members: propTypes.array,
  status: propTypes.number,
  getMembers: propTypes.func,
};

const mapStateToProps = ({ Members }) => ({
  members: Members.members,
  status: Members.status,
});

const mapDispatchToProps = (dispatch) => ({
  getMembers: async () => getMembers(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
