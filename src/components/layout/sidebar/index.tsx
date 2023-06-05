import React, {useEffect, useRef, useState} from "react";
import { upperFirst } from "lodash";
import './styles.scss'

const Sidebar = () => {
  const [firstPageName, setFirstPageName] = useState<string>('');
  const [secondPageName, setSecondPageName] = useState<string>('');
  const [nextSwitch, setNextSwitch] = useState<string>('second');

  // Holds the references for the page spans
  const frontRef = useRef(null);
  const backRef = useRef(null);

  // Sets the listeners for the span transitions
  useEffect((): void => {
    if ( frontRef.current && backRef.current ) {
      frontRef.current.addEventListener("transitionend", transitionend);
      backRef.current.addEventListener("transitionend", transitionend);
    }
  }, [])

  // Whenever a new link is clicked triggers the span update and animation
  useEffect((): void => {
    const name = location.pathname.match(/\/([a-z]+)\//);

    if ( !firstPageName ) {
      setFirstPageName(name ? upperFirst(name[1]) : 'Home');
    } else {
      nextSwitch === 'first' ?
        setFirstPageName(name ? upperFirst(name[1]) : 'Home') :
        setSecondPageName(name ? upperFirst(name[1]) : 'Home');

      setNextSwitch(nextSwitch === 'first' ? 'second' : 'first');
      handleRotation();
    }
  }, [location.pathname])

  /**
   * Handles adding the rotation class for the spans
   */
  const handleRotation = (): void => {
      frontRef.current.classList.add('rotate');
      backRef.current.classList.add('rotate');
  }

  /**
   * The function for the transition listener
   *
   * @param event
   */
  const transitionend = (event) => {
    if ( event.target.classList.contains('front') ) {
      event.target.classList.remove('front', 'rotate');
      event.target.classList.add('back');
    } else {
      event.target.classList.remove('back', 'rotate');
      event.target.classList.add('front');
    }
  }

  return (
    <aside>
      <div className={'pageNameWrap'}>
        <span className={'front'} ref={frontRef}>{firstPageName}</span>
        <span className={'back'} ref={backRef}>{secondPageName}</span>
      </div>
    </aside>
  )
}

export default Sidebar;
