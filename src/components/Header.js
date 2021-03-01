import React from 'react';
import {ReactComponent as Logo} from '../assets/logo.svg'

function Header() {

    const [openMenu, setOpenMenu] = React.useState(false)

    const handleMenu = () => setOpenMenu(!openMenu)

    return (
        <header className={`header ${openMenu ? 'open' : ''}`}> 
            <Logo className="header__logo" />

            <ul className="header__links hide-for-mobile">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Blog</a>
                <a href="/">Careers</a>
            </ul>
            
            <a href="/" className="header__cta hide-for-mobile">Request Invite</a>

            <button className="header__menu hide-for-desktop" onClick={handleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className="header__dropdown hide-for-desktop">
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Blog</a>
                    <a href="/">Careers</a> 
                </div>
            </div>
        </header>
    )
}

export default Header;
