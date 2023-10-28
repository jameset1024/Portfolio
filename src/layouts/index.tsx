import React, {createContext, MutableRefObject, useEffect, useRef, useState} from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import './styles.sass';
import Header from "@app/components/layout/header";
import Footer from "@app/components/layout/footer";
import { ToastContainer } from "react-toastify";
import Loading from "@app/components/elements/loading";
import {SiteWrapper} from "@app/layouts/styles";

type LayoutProp = {
  children: React.ReactNode
  location: string
}

export const ThemeContext = createContext('light');
export default ({ children}: LayoutProp) => {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if ( media ) setTheme('dark');
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        let result = e.matches ? 'dark' : 'light';
        setTheme(result);
      });
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <SiteWrapper $theme={theme}>
        <Loading setLoading={setLoading}/>
        <div style={{display: loading ? 'none' : 'block'}}>
          <Header setTheme={setTheme} />
          <main>
            {children}
          </main>
          <Footer />
        </div>
        <ToastContainer />
      </SiteWrapper>
    </ThemeContext.Provider>
  )};
