import React, {MutableRefObject, useContext, useEffect, useRef, useState} from "react";
import { Logo } from "@app/components/elements/logo";
import { Link } from "gatsby";
import { useMediaQuery } from "usehooks-ts";
import './styles.sass';
import MobileButton from "@app/components/elements/mobileButton";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {ThemeContext} from "@app/layouts";

type HeaderType = {
  setTheme: React.Dispatch<React.SetStateAction<string>>,
}


const Header = ({setTheme}: HeaderType) => {
  const [open, setOpen] = useState(false);
  const mobileRef = useRef<HTMLButtonElement|null>(null);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");

  const headerRef = useRef<HTMLDivElement | null>(null);
  const theme = useContext(ThemeContext);

  const activate = ({currentTarget}: React.MouseEvent<HTMLButtonElement>) => {
    currentTarget.classList.toggle('open');
    setOpen(!open);
  }

  const closeDrawer = () => {
    setOpen(false);
    if ( mobileRef ) {
      mobileRef.current?.classList.remove('open');
    }
  }

  const movePage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if ( isSmallDevice ) {
      closeDrawer();
    }

    if ( window.location.pathname !== '/') return
    e.preventDefault();

    const el = document.getElementById(e.currentTarget.dataset.target as string);
    if ( el && headerRef.current ) {
      const pos = el.offsetTop;
      window.scrollTo({
        top: pos - headerRef.current?.clientHeight,
        left: 0,
        behavior: "smooth"
      });
    }
  }

  return (
    <>
      <header className={'mainHeader'} ref={headerRef}>
        <div className={'wrapper innerHeader'}>
          <div className={'siteLogo'}>
            <Link to={'/'}>
              <Logo width={150} height={25} />
            </Link>
          </div>

          { !isSmallDevice &&
              <>
                  <div className={'navigation'}>
                      <a href={'/#about'} data-target={'about'} onClick={(e) => movePage(e)}>About</a>
                      <a href={'/#experience'} data-target={'experience'} onClick={(e) => movePage(e)}>Experience</a>
                      <a href={'/#work'} data-target={'work'} onClick={(e) => movePage(e)}>Work</a>
                      <Link to={'/#contact'} data-target={'contact'} onClick={(e) => movePage(e)}>Contact</Link>
                      <Link to={'/articles'}>Articles</Link>
                  </div>
                  <div className={'modeToggle'}>
                      <input
                          type={'checkbox'}
                          id={'mode'}
                          className={'hidden'}
                          checked={theme === 'dark'}
                          onChange={(e) => setTheme(e.currentTarget.checked ? 'dark' : 'light')}
                      />
                      <label htmlFor={'mode'}>
                        <FontAwesomeIcon icon={faSun} className={'sun'} size={"xs"} fixedWidth={true} />
                        <FontAwesomeIcon icon={faMoon} className={'moon'} size={"xs"} fixedWidth={true} />
                      </label>
                  </div>
              </>
          }

          { isSmallDevice &&
              <div className={'mobileBtn'}>
                  <MobileButton active={activate} btnRef={mobileRef} />
              </div>
          }
        </div>
      </header>

      {isSmallDevice &&
          <AnimatePresence initial={false}>
            {open &&
                <motion.div
                    initial="closed"
                    variants={{
                      open: { height: '100vh' },
                      closed: { height: 0 }
                    }}
                    animate="open"
                    exit="closed"
                    className={'mobileMenu'}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <motion.div
                        variants={{
                          closed: {opacity: 0},
                          open: {opacity: 1}
                        }}
                        transition={{ duration: 0.5 }}
                        className={'navigation'}
                    >
                        <ul>
                            <li><a href={'/#about'} data-target={'about'} onClick={(e) => movePage(e)}>About</a></li>
                            <li><a href={'/#experience'} data-target={'experience'} onClick={(e) => movePage(e)}>Experience</a></li>
                            <li><a href={'/#work'} data-target={'work'} onClick={(e) => movePage(e)}>Work</a></li>
                            <li><Link to={'/#contact'} data-target={'contact'} onClick={(e) => movePage(e)}>Contact</Link></li>
                            <li><Link to={'/articles'} onClick={closeDrawer}>Articles</Link></li>
                        </ul>
                    </motion.div>
                </motion.div>
            }
          </AnimatePresence>
      }
    </>
  )
}

export default Header;
