import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedinIn, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import {StaticImage} from "gatsby-plugin-image";
import {FormEvent, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import { toast } from "react-toastify";
import Sending from "@app/components/interactives/sending";
import {SEO} from "@app/components/layout/head";
import {graphql} from "gatsby";


const ContactPage: React.FC<PageProps> = () => {
  const [sending, setSending] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  /**
   * Handle the sending of the contact form
   *
   * @param e
   */
  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);

    const formData = new FormData(e.currentTarget);
    let message = `From: ${formData.get('name')}\n`;
    message += `Phone: ${formData.get('phone')}\n\n`;
    message += formData.get('message');

    const response = await fetch(process.env.GATSBY_CONTACT_FORM, {
      method: 'POST',
      body: JSON.stringify({
        sendTo: "me@erikjamesthomas.com",
        replyTo: formData.get('email'),
        content: message,
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    const result = await response.text();
    if ( result === 'success' ) {
      setSuccess(true);

      // Delay removing the sending banner
      setTimeout(() => setSending(false), 3000);
    } else {
      setSending(false);

      // Display an error message
      toast.error('Sorry your message could not be sent', {
        position: 'top-right',
        autoClose: 4000,
        draggable: false,
        hideProgressBar: true
      });
    }
  }

  return (
    <div className={'contact-page'}>
      <div className={'banner-wrap'} role={'banner'}>
        <div className={'banner-text'}>
          Contact
        </div>
      </div>
      <section className={'contact'}>
        <div className={'form-wrap'}>
          <form onSubmit={formSubmit}>
            <AnimatePresence initial={false}>
              {
                sending &&
                  <motion.div
                      className={'hide-form'}
                      animate={sending ? 'open' : 'closed'}
                      initial={'closed'}
                      exit={'open'}
                      variants={{
                        open: { opacity: 1},
                        closed: { opacity: 0}
                      }}
                  >
                      <Sending />
                  </motion.div>
              }
            </AnimatePresence>

            { success &&
                <div className={'success-send'}>
                    <div>
                        <p>Thank you for contacting me and I'll be sure to get back to you as soon as possible.</p>
                        <p>I look forward to speaking with you.</p>

                        <FontAwesomeIcon icon={faThumbsUp} size={'2xl'} />
                    </div>
                </div>
            }

            <div className={'form-text'}>
              Thanks for wanting to contact me, I look forward to hearing from you.
            </div>
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
              <textarea name={'message'} required placeholder={'Message'} aria-required />
            </div>
            <div className={'form-button'}>
              <button type={'submit'}>Send</button>
            </div>
          </form>
        </div>
        <div className={'contact-sidebar'}>
          <div className={'city-image'}>
            <StaticImage src={'https://erik-portfolio.s3.amazonaws.com/charlotte.jpg'} alt={'Charlotte NC'} />
          </div>
          <div className={'contact-info'}>
            <h3>Contact Methods:</h3>
            <div className={'email'}><FontAwesomeIcon icon={faEnvelope} /> <a href={"mailto:erik@nearbycreative.com"}>erik@nearbycreative.com</a></div>

            <div className={'social-icon'}>
              <a href={'https://github.com/jameset1024'} target={'_blank'}>
                <FontAwesomeIcon icon={faGithub} color={'#ffffff'} size={'lg'} />
              </a>
              <a href={'https://www.linkedin.com/in/erikjamesthomas/'} target={'_blank'}>
                <FontAwesomeIcon icon={faLinkedinIn} color={'#ffffff'} size={'lg'} />
              </a>
              <a href={'https://twitter.com/jameset1024/'} target={'_blank'}>
                <FontAwesomeIcon icon={faTwitter} color={'#ffffff'} size={'lg'} />
              </a>
              <a href={'https://www.pinterest.com/jameset1024/recipes/'} target={'_blank'}>
                <FontAwesomeIcon icon={faPinterest} color={'#ffffff'} size={'lg'} />
              </a>
              <a href={'https://www.instagram.com/jameset1024'} target={'_blank'}>
                <FontAwesomeIcon icon={faInstagram} color={'#ffffff'} size={'lg'} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

export const Head: HeadFC = ({data, location}) => {
  return (
  <SEO>
    <link rel={'canonical'} href={`${data.site.siteMetadata.siteUrl}${location.pathname}`} />
    <title>Contact | Erik James Thomas - Senior Software Engineer</title>
  </SEO>
  )
}

export const pageQuery = graphql`
  query MyQuery {
  site {
    siteMetadata {
      siteUrl
    }
  }
}`;
