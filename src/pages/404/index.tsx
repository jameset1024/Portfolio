import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { CSSProperties } from "react";
import image from "@app/images/404.png";
import Button from "@app/components/elements/button";

const headerStyle: CSSProperties = {
  textAlign: "center"
}

const pageWrapper: CSSProperties = {
  position: "relative",
  height: '100vh',
  fontSize: '2em',
  textAlign: "center"
}

const imageWrapperStyling: CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: 0,
  overflow: 'hidden'
}

const imageStyling: CSSProperties = {
  maxWidth: '100%',
  position: 'relative',
  bottom: '-100px'
}

const button: CSSProperties = {
  position: "relative",
  zIndex: 999,
  fontSize: '20px',
  textAlign: "center"
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div style={pageWrapper}>
      <h1 style={headerStyle}>Yikes, I guess that didn't work</h1>

      <div style={button}>
        <Button to={'/'}>Home</Button>
      </div>

      <div style={imageWrapperStyling}>
        <img src={image} style={imageStyling} alt={'404 error image'} />
      </div>
    </div>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
