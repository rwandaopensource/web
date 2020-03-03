import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    document.title = 'Rwanda Open Source - Home';
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

export default Home;
