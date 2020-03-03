import React from 'react'
import { connect } from 'react-redux'
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
      <div className='page-container'>
        <Header />
        <Footer />
      </div>
    )
  }
}

export default connect()(NotFound);
