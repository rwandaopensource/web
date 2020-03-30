import React from 'react'
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
          <a href='/' >
            <img src={Logo} alt='Rwanda Open Source' className='logo' />
          </a>
          <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='header-menu' href='/#' onClick={this.navAnchorPreventRedirect}>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div id='header-menu' className='navbar-menu'>
          <div className='navbar-end'>
            <a href='/projects' className='navbar-item header-link'> Projects </a>
            <a href='/teams' className='navbar-item header-link'> Teams </a>
            <a href='/members' className='navbar-item header-link'> Members </a>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link header-link' href='/#' onClick={this.navAnchorPreventRedirect}>  More </a>
              <div className='navbar-dropdown'>
                <a href='/wiki' className='navbar-item header-link'> Wiki </a>
                <a href='/services' className='navbar-item header-link'> Services </a>
                <a href='/about#contact' className='navbar-item header-link'> Contact us </a>
                <a href='/about' className='navbar-item header-link'> About us </a>
              </div>
            </div>
            <a href='/about#' className='navbar-item custom-button button has-margin-left-7-mobile has-padding-7-mobile'> Join Us </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
