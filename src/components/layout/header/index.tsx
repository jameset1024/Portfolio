import React from 'react';
import image from '@app/images/erik-james-thomas-logo.png';
import "./styles.scss";
import {Link} from "gatsby";

const Header = () => {
  return (
    <header className={'siteHeader'}>
      <div className={'wrapper innerHeader'}>
        <div className={'siteLogo'}>
          <Link to={'/'}>
            <img src={image} alt={'Erik James Thomas Logo'} />
          </Link>
        </div>
        <div className={'navigation'}>
          <Link to={'/about'}>About</Link>
          <Link to={'/work'}>Work</Link>
          <Link to={'/articles'}>Articles</Link>
          <Link to={'/contact'}>Contact</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
