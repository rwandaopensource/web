import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { contactUsURL } from "../helpers/url";

class About extends React.Component {
  constructor(props) {
    super(props);
    let subject = document.location.search.replace("?s=", "");
    if (!subject) subject = "connect"
    let data = window.sessionStorage.getItem("contactUs");
    let state = {};
    if (data) {
      state = JSON.parse(data);
    } else {
      state = {
        from: "",
        subject,
        message: "",
        isFromValid: true,
        isMessageValid: true,
      };
    }
    state.status = "not_started";
    this.state = state;
    this.handleInput = this.handleInput.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  handleInput(name) {
    return function(e) {
      e.preventDefault();
      const { value } = e.target;
      this.setState({ [name]: value });
      this.setState({ isMessageValid: true, isFromValid: true });
      const cache = this.state;
      delete cache.status;
      window.sessionStorage.setItem("contactUs", JSON.stringify(cache));
    }.bind(this);
  }
  handleInvalid(name) {
    return function(e) {
      e.preventDefault();
      this.setState({ [name] : false });
      const cache = this.state;
      delete cache.status;
      window.sessionStorage.setItem("contactUs", JSON.stringify(cache));
    }.bind(this);
  }
  submit(e) {
    e.preventDefault();
    const { isFromValid, isMessageValid, from, message, subject } = this.state;
    if (isFromValid && isMessageValid ) {
      this.setState({ status: "pending" });
      fetch(contactUsURL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ from, message, subject }),
        }).then(res => {
        if (res.status === 200 ) {
          this.cancel({ preventDefault : () => {} });
          this.setState({ status: "not_started" });
          return
        }
        throw null;
      }).catch(()=> {
        this.setState({ status: "fail" });
      });
    }
  }

  cancel(e) {
    e.preventDefault();
    window.sessionStorage.removeItem("contactUs");
    this.setState({
      from: "",
      subject: "Connect",
      message: "",
      isFromValid: true,
      isMessageValid: true,
      status: "not_started",
    });
  }

  render() {
    const { message, from, subject, isMessageValid, isFromValid, status  } = this.state;
    return (
      <div className="page-container section">
        <Header />
        <div className="container ">
          <div className="has-text-centered-mobile">
            <h1> About page </h1>
          </div>
          <form className="has-text-centered-mobile is-vcentered" onSubmit={this.submit}>
            <span className="title is-4 is-full" id="contact"> Contact Us. </span>
            <div className="field column is-half">
              <label className="label">From</label>
              <div className={`control has-icons-left${isFromValid ? "" : " has-icons-right"}`}>
                <input
                  className={`input${ isFromValid ? "" : " is-danger"}`}
                  type="email"
                  placeholder="Email"
                  value={from}
                  onChange={this.handleInput("from")}
                  onInvalid={this.handleInvalid("isFromValid")}
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                {isFromValid || (
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                )}
              </div>
              {isFromValid ? <span/>: <p className="help is-danger"> This email is invalid </p>}
            </div>

            <div className="field column is-half">
              <label className="label">Subject</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select value={subject} onChange={this.handleInput("subject")} required>
                    <option> connect </option>
                    <option> inquiry</option>
                    <option> join </option>
                    <option> report </option>
                    <option> request </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field column is-half">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className={`textarea${ isMessageValid? "": " is-danger"}`}
                  placeholder="Textarea"
                  value={message} minLength={3}
                  onChange={this.handleInput("message")}
                  onInvalid={this.handleInvalid("isMessageValid")}
                  required>
                </textarea>
              </div>
              {isMessageValid? (<span/>) : <p className="help is-danger"> message is too small </p>}
            </div>

            <div className="field is-grouped column is-half">
              <div className="control">
                <button type="submit" className={`button custom-button${ status === "pending"? " is-loading" : "" }`}>
                Send
                </button>
              </div>
              <div className="control">
                <button className="button second-button" onClick={this.cancel}> Cancel </button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About;
