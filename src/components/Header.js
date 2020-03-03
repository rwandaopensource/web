import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';
import $ from 'jquery';
import Logo from '../assets/logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const $navbarBurgers = $('.navbar-burger');
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach = [].forEach;
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const {target} = el.dataset;
          const $target = $(`#${target}`);
          el.classList.toggle('is-active');
          if ($target.hasClass('is-active')) {
            $target.removeClass('is-active');
          } else {
            $target.addClass('is-active');
          }
        });
      });
    }
  }

  navAnchorPreventRedirect= (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <nav className='navbar header' role='navigation' aria-label='main-navigation'>
        <div className='navbar-brand'>
          <Link to='/' >
            <img src={Logo} alt='Rwanda Open Source' className='logo' />
          </Link>
          <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='header-menu' href='/#' onClick={this.navAnchorPreventRedirect}>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div id='header-menu' className='navbar-menu'>

          <div className='navbar-start'>
            <Link to='/stories' className='navbar-item header-link'> Stories </Link>
            <Link to='/connect' className='navbar-item header-link'> Connect </Link>
            <Link to='/marketplace' className='navbar-item header-link'> Marketplace </Link>
            <div className='navbar-item has-dropdown is-hoverable'>
              <Link to='/members' className='navbar-link header-link'>  For Members </Link>
              <div className='navbar-dropdown'>
                <Link to='/members/sub-domain' className='navbar-item header-link'>  Sub-Domain </Link>
                <Link to='/members/join-team' className='navbar-item header-link'> Join Github Team </Link>
                <Link to='/members/access-token' className='navbar-item header-link'>  Get Access Token </Link>
              </div>
            </div>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <a href='https://github.com/rwandaopensource' target='_blank' rel='noopener noreferrer' title='github'>
                <FontAwesomeIcon icon={faGithub} title='github' className='brand-logo'/>
              </a>
              <a href='https://twitter.com/rwanda_open' target='_blank' rel='noopener noreferrer' title='twitter'>
                <FontAwesomeIcon icon={faTwitter} title='twitter' className='brand-logo'/>
              </a>
              <a href='http://bit.ly/2VmpgVp' target='_blank' rel='noopener noreferrer' title='twitter'>
                <FontAwesomeIcon icon={faSlack} title='slack' className='brand-logo'/>
              </a>
            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
