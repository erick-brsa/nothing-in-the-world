import { useState, useEffect } from 'react'

import './Header.css'

export const Header = () => {

  const [menuActive, setMenuActive] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleMenu = () => {
    setMenuActive(!menuActive)
  }

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${
      scrollPosition > 48 ? 'header-fixed' : '' 
    }`}>
      <nav className='nav'>
        
        <div className='nav__logo'>
          <a href='/' className='nav__logo-link'>
            <img src="/icon.png" alt="logo" className='nav__logo-img' />
            NITW
          </a>
        </div>
        
        <div className={`nav__menu ${ menuActive ? 'show-menu' : '' }`}>
          <div className='nav__menu-bg' onClick={handleMenu}></div>
          <ul className='nav__list'>
            <li className='nav__item'>
                <a href='/' className='nav__link'>Inicio</a>
            </li>
            <li className='nav__item'>
                <a href='/casting' className='nav__link'>Casting</a>
            </li>
            <li className='nav__item'>
                <a href='/patreon' className='nav__link'>Patrocinadores</a>
            </li>
            <li className='nav__item'>
                <a href='/history' className='nav__link'>Historia</a>
            </li>
          </ul>

          <div className='nav__menu-close' onClick={handleMenu}>
            { 
              menuActive ? (
                  <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
               )
            }  
          </div>
        </div>
      </nav>
    </header>
  )
}
