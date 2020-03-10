import React from "react"
import { Link } from "gatsby"
import Layout from "./Layout"

const SingleTagTemplate = ({ pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <Layout>
      <h1>Posts about : {tagName}</h1>
      <ul>
        {posts &&
          posts.map(({ frontmatter: { path, title, lang } }) => (
            <li key={title}>
              <Link to={`${lang}${path}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </Layout>
  )
}

export default SingleTagTemplate
