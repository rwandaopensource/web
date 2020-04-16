import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state= {};
    document.title = 'Rwanda Open Source - Page not found';
  }

  render() {
    return (
      <div className='page-container section'>
        <Header />
        <div className='container content has-text-centered'>
          <p className='title is-1 has-text-grey'>
              404
          </p>
          <span className="icon title is-4">
            <i className="fas fa-eye-slash"></i>
          </span>
          <br />
          <p className="subtitle is-1 is-family-monospace">
              We can&apos;t find the page <br/ >you are looking for.
          </p>
          <a href="/about" className="button custom-button">
                  Go back home
          </a>
          &nbsp; &nbsp; &nbsp;
          <a href="/about" className="button custom-button">
                  Learn more
          </a>
        </div>
        <Footer />
      </div>
    )
  }
}

export default NotFound;
