import * as React from "react";
import "./styles.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import {FormEvent, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import { toast } from "react-toastify";
import Sending from "@app/components/interactives/sending";
import {ButtonSubmit} from "@app/components/elements/button";


const Contact = () => {
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

    const response = await fetch(process.env.GATSBY_CONTACT_FORM as string, {
      method: 'POST',
      body: JSON.stringify({
        sendTo: "me@erikjamesthomas.com",
        subject: formData.get('subject'),
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
    <section className={'contact'} id={'contact'}>
      <div className={'wrapper'}>
        <div className={'contactContainer'}>
          <h2>Get In Touch</h2>
          <div className={'contact-wrapper'}>
            <div className={'message-text'}>
              <p>I'm always open to new opportunities or projects so don't hesitate to send me details of what you're looking for. If you just want to chat or ask me a question please feel free to reach out.</p>
            </div>
            <div>
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

                  <div className={'form-item'}>
                    <input type={'text'} name={'name'} placeholder={'Name'} required aria-required />
                    <input type={'email'} name={'email'} placeholder={'Email'} required aria-required />
                  </div>
                  <div className={'form-item'}>
                    <input type={'text'} name={'subject'} placeholder={'Subject'} />
                    <input type={'text'} name={'phone'} placeholder={'Phone Number'} />
                  </div>
                  <div className={'form-message'}>
                    <textarea name={'message'} required placeholder={'Message'} aria-required />
                  </div>
                  <div className={'form-button'}>
                    <ButtonSubmit width={'100%'}>Send</ButtonSubmit>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
