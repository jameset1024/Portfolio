import React from 'react';
import { Link } from "gatsby";
import './styles.scss';

type ButtonType = {
  src: string,
  width?: string,
  target?: string,
  children: React.ReactNode,
}
export default function Button({src, children, width = '150px', target = '_self'}: ButtonType) {
  const style = { "--btn-width": width } as React.CSSProperties;
  return (
    <Link to={src} className="button" style={style} target={target}>
      <div className="button__line"></div>
      <div className="button__line"></div>
      <span className="button__text">{children}</span>
    </Link>
  )
}
