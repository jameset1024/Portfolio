import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './styles.sass';
import { useEffect, useRef, useState } from "react";
import { graphql } from "gatsby";
import Work from "@app/components/sections/work";
import About from "@app/components/sections/about";
import Experience from "@app/components/sections/experience";
import Button from "@app/components/elements/button";
import { SEO } from "@app/components/layout/head";
import Expertise from "@app/components/sections/expertise";
import Contact from "@app/components/sections/contact";


const IndexPage: React.FC<PageProps> = ({data}) => {
  const [active, setActive] = useState(true);
  const [forHire, setForHire] = useState(false);
  const labelRef = useRef<HTMLSpanElement>(null);
  const labels = ['Nerd', 'Basketball\u00A0Fan', 'Movie\u00A0Lover', 'Anime\u00A0Fan', 'Video\u00A0Gamer', 'Foodie', 'Software\u00A0Engineer'];


  let dropInterval: ReturnType<typeof setInterval>;
  let dropTimeout: ReturnType<typeof setTimeout>;

  useEffect(() => {
    headerLabelType();
    setForHire(process.env.GATSBY_FOR_HIRE === "true");

    return () => {
      setActive(false);
      clearInterval(dropInterval);
      clearTimeout(dropTimeout);
    }
  }, []);

  /**
   * Displays and removes text in a typewriter style
   */
  const headerLabelType = () => {
    async function run() {
      let key = 0;

      await new Promise<void>((resolve) => setTimeout(() => resolve(), 3000));

      do {
        await remove();
        const word = labels[key].split('');

        if ( labelRef.current ) {
          labelRef.current.innerText = '';
        }

        for ( let o = 0; o < word.length; o++ ) {
          await new Promise<void>((resolve) => {
            dropTimeout = setTimeout(() => {
              if ( labelRef.current ) {
                labelRef.current.innerText += word[o];
              }
              resolve();
            },125);
          });
        }

        key = key === (labels.length - 1) ? 0 : (key + 1);
        await new Promise<void>((resolve) => setTimeout(() => resolve(), 3000));
      } while (active);
    }

    run().catch( e => console.log(e.message));
  };

  /**
   * Handles removing the current visible text
   */
  const remove = async () => {
    const word = labelRef.current?.innerText;
    await new Promise<void>(async (resolve): Promise<void> => {
      const drop = word?.split('');

      dropInterval = setInterval(() => {
        drop?.pop();

        if ( labelRef.current && typeof drop !== "undefined" ) {
          labelRef.current.innerText = drop.join('');
        }

        if ( ! drop?.length ) {
          clearInterval(dropInterval);
          resolve();
        }
      }, 125);
    });
  }

  const contactScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const header = document.querySelector('.mainHeader');
    const contact = document.getElementById('contact');

    if ( header && contact ) {
      window.scrollTo({
        top: contact.offsetTop - header.clientHeight,
        left: 0,
        behavior: "smooth"
      });
    }
  }

  return (
    <>
      <header className={'homePage'}>
        <div className={'wrapper'}>
          <div className={'headerWrapper'}>
            { forHire && (
              <div className={'open-for-hire'}>
                <a href={'#'} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => contactScroll(e)}>
                  Open For Hire
                </a>
              </div>
            )}

            <div className={'home-intro'}>Hello There</div>
            <h1>My Name Is <span>Erik Thomas</span></h1>
            <h3>I am a <span ref={labelRef}>Software Engineer</span></h3>

            <p>I'm a full-stack engineer currently managing full cycle development and AWS infrastructure for clients at <a href={'https://nearbycreative.com'} target={'_blank'}>Nearby Creative</a>. If you have a project or just something interesting please reach out.</p>

            <Button to={'#'} data-target={'#contact'} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => contactScroll(e)}>Contact Me</Button>
          </div>
        </div>
      </header>

      {/* About me section */}
      <About />

      {/* Expertise Section */}
      <Expertise />

      {/* Experience section */}
      <Experience />

      {/* My work section */}
      <Work />

      {/* Contact section */}
      <Contact />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = ({location, data}) => {
  return (
    <SEO>
      {/* @ts-ignore */}
      <link rel={'canonical'} href={`${data.site.siteMetadata.siteUrl}${location.pathname}`} />
      <title>Erik James Thomas - Senior Software Engineer</title>
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
