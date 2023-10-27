import React from 'react';
import { Link } from "gatsby";
import './styles.sass';

type ButtonType = {
  to: string,
  width?: string,
  target?: string,
  children: React.ReactNode,
  onClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined
}

type ButtonSubmitType = {
  width?: string,
  children: React.ReactNode,
  onClick?: ((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) | undefined
}

export default function Button(props: ButtonType) {
  const style = { "--btn-width": props?.width || '150px' } as React.CSSProperties;
  return (
    <Link {...props} style={style} className={'button'}>
      <div className="button__line"></div>
      <div className="button__line"></div>
      <span className="button__text">{props.children}</span>
    </Link>
  )
}


export function ButtonExternal(props: ButtonType) {
  const style = { "--btn-width": props?.width || '150px' } as React.CSSProperties;
  return (
    <a {...props} href={props.to} style={style} className={'button'}>
      <div className="button__line"></div>
      <div className="button__line"></div>
      <span className="button__text">{props.children}</span>
    </a>
  )
}

export function ButtonSubmit({children, width}: ButtonSubmitType) {
  const style = { "--btn-width": width || '150px' } as React.CSSProperties;
  return (
    <button type={'submit'} style={style} className={'button'}>
      <div className="button__line"></div>
      <div className="button__line"></div>
      <span className="button__text">{children}</span>
    </button>
  )
}
