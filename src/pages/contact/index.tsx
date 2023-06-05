import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "./styles.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <section className={'wrapper contact'}>
      <div className={'form-wrap'}>
        <form>
          <div className={'form-item'}>
            <input type={'text'} name={'name'} placeholder={'Name'} required aria-required />
          </div>
          <div className={'form-item'}>
            <input type={'email'} name={'email'} placeholder={'Email'} required aria-required />
          </div>
          <div className={'form-item'}>
            <input type={'text'} name={'phone'} placeholder={'Phone Number'} />
          </div>
          <div className={'form-item'}>
            <textarea name={'message'} required aria-required />
          </div>
          <div className={'form-button'}>
            <button type={'submit'}>Send</button>
          </div>
        </form>
      </div>
      <div className={'contact-sidebar'}>
        <div className={'city-image'}>
          <img src={'https://erik-portfolio.s3.amazonaws.com/charlotte.jpg'} alt={'Charlotte NC'} />
        </div>
        <div className={'contact-info'}>
          <a href={"mailto:erik@nearbycreative.com"}>erik@nearbycreative.com</a>

          <div className={'social-icon'}>
            <a href={'https://github.com/jameset1024'} target={'_blank'}>
              <FontAwesomeIcon icon={faGithub} size={'lg'} />
            </a>
            <a href={'https://www.linkedin.com/in/erikjamesthomas/'} target={'_blank'}>
              <FontAwesomeIcon icon={faLinkedinIn} size={'lg'} />
            </a>
            <a href={'https://twitter.com/jameset1024/'} target={'_blank'}>
              <FontAwesomeIcon icon={faTwitter} size={'lg'} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage

export const Head: HeadFC = () => <title>Contact | Erik James Thomas - Senior Software Engineer</title>
