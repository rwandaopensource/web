import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getMembers } from "./../redux/actions/members";
import { connect } from "react-redux";
import propTypes from "prop-types";

export class Members extends React.Component {
  constructor(props) {
    super(props);
    document.title = "Rwanda Open Source - Members";
    this.props.getMembers(this.props.page);
    this.loadMore = this.loadMore.bind(this);
    this.memberBlog = this.memberBlog.bind(this);
  }

  loadMore() {
    const { page, getMembers, more } = this.props;
    if (more) {
      getMembers(page);
    }
  }

  memberBlog(a) {
    if (a && !(a.startsWith("http://", 0) || a.startsWith("http://", 0))) {
      return "https://" + a;
    }
    return a;
  }

  render() {
    const { members, pending, more } = this.props;
    return (
      <div className="page-container section">
        <Header />
        <p className="title is-6 has-text-centered">
        🙏 SPECIAL THANKS TO
        </p>
        <div className="container members">
          <div className="wrapper">
            {members.map((member) => (
              <div className="member" key={member.id} title={member.bio}>
                <div className="member-card">
                  <img className="member-image" src={member.avatar_url} alt="avatar" />
                  <div className="card-content">
                    <div className="member-details has-text-centered">
                      <a  href={member.html_url} target="_blank" rel="noopener noreferrer"  className="name">{member.login}</a>
                      <br /><br />
                      <span className="icon">
                        <i className="fas fa-code-branch" /> { member.public_repos}
                      </span>
                      &nbsp; &nbsp; &nbsp;
                      <a  href={this.memberBlog(member.blog)} target="_blank" rel="noopener noreferrer"  className="name">
                        <span className="icon">
                          <i className="fas fa-link"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="buttons">
            {pending ?
              (<div className="fa-3x"><i className="fas fa-spinner fa-pulse"></i></div>)
              : more && (<button className="button is-grey" onClick={this.loadMore}>
                <i className="fas fa-plus is-white fas-space"></i>Show more
              </button>)
            }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Members.defaultProps = {
  members: [],
  status: 0,
  page: 1,
  pending: false,
  more: true,
  getMembers,
};

Members.propTypes = {
  members: propTypes.array,
  status: propTypes.number,
  page: propTypes.number,
  pending: propTypes.bool,
  more: propTypes.bool,
  getMembers: propTypes.func,
};

const mapStateToProps = ({ Members }) => ({
  members: Members.members,
  status: Members.status,
  page: Members.page,
  more: Members.more,
  pending: Members.pending
});

const mapDispatchToProps = (dispatch) => ({
  getMembers: async (page) => getMembers(dispatch, page),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
