import React from "react";
import image from '@app/images/erik-james-thomas-logo.png';
import { Link } from "gatsby";
import { ETHeader } from "@app/components/layout/header/styles";
import useScrollDirection from "@app/hooks/useScrollDirection";
import './styles.scss';

const Header = () => {
  const scrollDirection: string = useScrollDirection('up');

  return (
    <ETHeader $scrollDirection={scrollDirection}>
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
    </ETHeader>
  )
}

export default Header;
