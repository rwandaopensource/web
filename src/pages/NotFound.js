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
        <div className=' container content has-stext-centered'>
          <div className='title is-4'>
              We can&apos;t find what you are looking for!
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default NotFound;
