import React, {BaseSyntheticEvent, useEffect, useState} from 'react';
import {ExperienceInterface} from "@app/data/experience";
import {AnimatePresence, motion} from "framer-motion";
import "./styles.scss";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type ExperienceData = {
  data: ExperienceInterface[]
}
const ExperienceDrawer = ({data}: ExperienceData) => {
  const [open, setOpen] = useState<Array<boolean>>(data.map( _ => false));

  /**
   * Handles adjusting the image sizes if they are over
   * a certain height.
   *
   * @param e
   */
  const imageMeasure = ( e: BaseSyntheticEvent<HTMLImageElement> ) => {
    if ( e.target.clientHeight > 100 ) {
      e.target.style.height = '100px';
    }
  }

  const toggleClick = ( i: number ) => {
    const copy = [...open];
    copy[i] = !copy[i];

    setOpen(copy);
  }

  return (
    <div className={'experience-drawer'}>
      {data.map((e, i) => {
        return (
          <div className={'drawer-item'} key={`${i}-drawer-item`}>
            <div className={'drawer-control'} onClick={() => toggleClick(i)}>
              <div className={'title'}><strong>{e.title}</strong> - {e.position}</div>
              <div className={'date'}>{e.date}</div>
            </div>
            <AnimatePresence initial={false}>
              {open[i] && (
                <motion.div
                  style={{overflow: 'hidden'}}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: 'linear' }}
                >
                  <motion.div
                    variants={{
                      collapsed: {scale: 0.8},
                      open: { scale: 1}
                    }}
                    transition={{duration: 0.8}}
                    className={'drawer-content'}
                  >
                    <div className={'drawer-content-inner'}>
                      <div>
                        <div className={'content-meta'}>
                          <div className={'location'}>
                            <FontAwesomeIcon icon={faLocationDot} color={'#ffffff'} size={'sm'} />
                            {e.location}
                          </div>
                          <div className={'link'}>
                            <FontAwesomeIcon icon={faLink} color={'#ffffff'} size={'sm'} />
                            {e.link && <a href={e.link} target={'_blank'}>{e.link.replace(/(https|http):\/\//g, '')}</a> }
                          </div>
                        </div>
                        <div className={'description'}>
                          {e.description}
                        </div>
                      </div>
                      <div>
                        <img src={e.logo} alt={e.title} onLoad={ (e) => imageMeasure(e)}/>
                      </div>
                      <div className={'languages'}>
                        {e.skills &&
                            <>
                              {e.skills.map(i => {
                                return <div>{i}</div>
                              })}
                            </>
                        }
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
);
}

export default ExperienceDrawer;
