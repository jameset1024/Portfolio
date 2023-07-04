import React, {ReactEventHandler, useState} from "react";
import image from '@app/images/erik-james-thomas-logo.png';
import { Link } from "gatsby";
import { ETHeader } from "@app/components/layout/header/styles";
import useScrollDirection from "@app/hooks/useScrollDirection";
import { useMediaQuery } from "usehooks-ts";
import './styles.scss';
import MobileButton from "@app/components/elements/mobileButton";
import {AnimatePresence, motion} from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const scrollDirection: string = useScrollDirection('up');
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");

  const activate = (e: ReactEventHandler<HTMLDivElement>) => {
    e.currentTarget.classList.toggle('open');
    setOpen(!open);
  }

  return (
    <>
      <ETHeader $scrollDirection={scrollDirection}>
        <div className={'wrapper innerHeader'}>
          <div className={'siteLogo'}>
            <Link to={'/'}>
              <img src={image} alt={'Erik James Thomas Logo'} />
            </Link>
          </div>

          { !isSmallDevice &&
              <div className={'navigation'}>
                  <Link to={'/about'}>About</Link>
                  <Link to={'/work'}>Work</Link>
                  <Link to={'/articles'}>Articles</Link>
                  <Link to={'/contact'}>Contact</Link>
              </div>
          }

          { isSmallDevice &&
              <div className={'mobileBtn'}>
                  <MobileButton active={activate} />
              </div>
          }
        </div>
      </ETHeader>

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
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/work'}>Work</Link></li>
                        <li><Link to={'/articles'}>Articles</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
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
