import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {Link} from "gatsby";

const BlogPage: React.FC<PageProps> = ({pageContext}) => {
  console.log(pageContext);
  return (
    <div className={'wrapper'}>
      asdfasdf
    </div>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Blog Articles | Erik James Thomas - Senior Software Engineer</title>
