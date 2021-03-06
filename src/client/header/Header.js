import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './header.scss'
import logo from './buildcanaries-logo.png'
import {NavLink} from 'react-router-dom'
import Shortcut from '../common/Shortcut'

const items = [
  {id: 'monitor', iconClass: 'eye', title: 'monitor', shortcuts: ['m', '1']},
  {id: 'tracking', iconClass: 'eye-plus', title: 'tracking', shortcuts: ['t', '2']},
  {id: 'success', iconClass: 'checkmark', title: 'success', shortcuts: ['s', '3']},
  {id: 'settings', iconClass: 'cog', title: 'settings', shortcuts: [',', '4']},
  {id: 'backup', iconClass: 'floppy-disk', title: 'backup', shortcuts: ['b', '5']},
  {id: 'help', iconClass: 'question', title: 'help', shortcuts: ['h', '6']}
]

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {menuVisible: false}
  }

  render() {
    const toggleMenu = () => this.setState({menuVisible: !this.state.menuVisible})
    const hideMenu = () => this.setState({menuVisible: false})
    const headerClassNames = classNames('site-header', {'fullscreen': this.props.fullScreen})
    const menuClassNames = classNames('menu', {'open': this.state.menuVisible})
    const toggleLabel = this.state.menuVisible ? 'hide menu' : 'show menu'
    const iconClassNames = classNames('site-menu-toggle-icon', {
      'icon-menu3': !this.state.menuVisible,
      'icon-menu4': this.state.menuVisible
    })

    return (
      <header role='banner' className={headerClassNames}>
        <h1 className='visually-hidden'>Nevergreen</h1>
        <NavLink to='/monitor'>
          <img src={logo} className='logo' alt='Build Canaries'/>
        </NavLink>
        <nav role='navigation' className='site-menu'>
          <h2 className='visually-hidden'>Site menu</h2>
          <button className='site-menu-toggle' onClick={toggleMenu} aria-label={toggleLabel}><i className={iconClassNames}/></button>
          <ul className={menuClassNames}>
            {
              items.map((item) => {
                const iconClasses = classNames('menu-icon', `icon-${item.iconClass}`)

                return (
                  <li key={item.id}>
                    <NavLink to={`/${item.id}`} className='menu-item' activeClassName='active' onClick={hideMenu} data-locator={`menu-${item.id}`}>
                      <i className={iconClasses}/>
                      <span className='menu-title'>{item.title}</span>
                      <Shortcut hotkeys={item.shortcuts}/>
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  fullScreen: PropTypes.bool
}

export default Header
