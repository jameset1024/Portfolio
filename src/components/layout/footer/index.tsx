import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./styles.scss";

const Footer = () => {
  const [date] = useState<Date>(new Date());
  return (
    <footer className={'siteFooter'}>
        <div className={'wrapper'}>
          <div className={'iconWrapper'}>
            <div>
              <a href={'https://github.com/jameset1024'} target={'_blank'}>
                <FontAwesomeIcon icon={faGithub} color={'#ffffff'} size={'lg'} />
              </a>
              <a href={'https://www.linkedin.com/in/erikjamesthomas/'} target={'_blank'}>
                <FontAwesomeIcon icon={faLinkedinIn} color={'#ffffff'} size={'lg'} />
              </a>
              <a href={'https://twitter.com/jameset1024/'} target={'_blank'}>
                <FontAwesomeIcon icon={faTwitter} color={'#ffffff'} size={'lg'} />
              </a>
            </div>
            <div>
              <span>@ {date.getFullYear()} Erik James Thomas | <a href={'mailto:erik@nearbycreative.com'}>erik@nearbycreative.com</a></span>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer;
