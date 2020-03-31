import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export class Members extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [
        {
          id: 1,
          name: "ISHIMWE URBAIN",
          bio: "Kigali,Rwanda",
          profileURL:
            "https://versions.bulma.io/0.7.0/images/placeholders/1280x960.png",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 2,
          name: "ISHIMWE URBAIN",
          bio: "Kigali,Rwanda",
          profileURL:
            "https://versions.bulma.io/0.7.0/images/placeholders/1280x960.png",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 3,
          name: "ISHIMWE URBAIN",
          bio: "Kigali,Rwanda",
          profileURL:
            "https://versions.bulma.io/0.7.0/images/placeholders/1280x960.png",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 4,
          name: "ISHIMWE URBAIN",
          bio: "Kigali,Rwanda",
          profileURL:
            "https://versions.bulma.io/0.7.0/images/placeholders/1280x960.png",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 5,
          name: "ISHIMWE URBAIN",
          bio: "Kigali,Rwanda",
          profileURL:
            "https://versions.bulma.io/0.7.0/images/placeholders/1280x960.png",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 6,
          name: "ISHIMWE URBAIN",
          bio: "Kigali,Rwanda",
          profileURL:
            "https://versions.bulma.io/0.7.0/images/placeholders/1280x960.png",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    };
    document.title = "Rwanda Open Source - Members";
  }

  render() {
    return (
      <div className="page-container section">
        <Header />
        <h1 className="title is-4 has-text-centered">
          RWANDA OPEN SOURCE MEMBERS
        </h1>
        <div className="container members">
          <div className="wrapper">
            {this.state.members.map(member => (
              <div className="member" key={member.id}>
                <div className="member-card">
                  <img className="member-image" src={member.profileURL} alt />
                  <div className="card-content">
                    <div className="member-details has-text-centered">
                      <h3 className="name">{member.name}</h3>
                      <p className="bio">{member.bio}</p>
                    </div>
                    <div className="content">{member.details}</div>
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
        <Footer />
      </div>
    );
  }
}

export default Members;
