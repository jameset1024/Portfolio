import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import './styles.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <section className={'wrapper home'}>
      <header>
        <h1>Hello, My Name IS Erik Thomas</h1>
      </header>
    </section>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <meta name="description" content="A software engineer residing in Charlotte, NC sharing my experiences and knowledge with the world." />
      <title>Erik James Thomas - Senior Software Engineer</title>
    </>
  );
}
