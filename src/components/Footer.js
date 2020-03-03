import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOsi } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className='footer'>
        <div className='content has-text-centered'>
          <p>
          © 2020 Rwanda Open Source. <FontAwesomeIcon icon={faOsi} /> <a href='/contact'> contact us </a>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer;
