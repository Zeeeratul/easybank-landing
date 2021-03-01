import React from 'react';
import {ReactComponent as Logo} from '../assets/logo.svg'
import {ReactComponent as FacebookLogo} from '../assets/icon-facebook.svg'
import {ReactComponent as TwitterLogo} from '../assets/icon-twitter.svg'
import {ReactComponent as PinterestLogo} from '../assets/icon-pinterest.svg'
import {ReactComponent as InstagramLogo} from '../assets/icon-instagram.svg'
import {ReactComponent as YoutubeLogo} from '../assets/icon-youtube.svg'

function Footer() {

    return (
        <footer className="footer"> 
            <Logo className="footer__logo" />

            <div className="footer__socials">
                <FacebookLogo viewBox="0 0 20 20" width={24} height={24} />
                <YoutubeLogo viewBox="0 0 20 20" width={24} height={24} />
                <TwitterLogo viewBox="0 0 20 20" width={24} height={19.5} />
                <PinterestLogo viewBox="0 0 20 20" width={24} height={24} />
                <InstagramLogo viewBox="0 0 20 20" width={24} height={24} />
            </div>

            <ul className="footer__links links1">
                <a href="/">About us</a>
                <a href="/">Contact</a>
                <a href="/">Blog</a>
            </ul>

            <ul className="footer__links links2">
                <a href="/">Careers</a>
                <a href="/">Support</a>
                <a href="/">Privacy Policy</a>
            </ul>

            <a href="/" className="cta footer__cta">Request Invite</a>

            <p className="footer__copyright">© Easybank. All Rights Reserved</p>
        </footer>
    )
}

export default Footer;
