import React, { useContext } from "react"
import { get } from "lodash"
import { graphql, useStaticQuery } from "gatsby"
import { Context } from "../../templates/Context"
import Posts from "./Posts"

export const queryPosts = graphql`
  query PostsQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: id }
      filter: { frontmatter: { tags: { ne: "repo" } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          path
          date
          excerpt
          lang
          modifier
        }
      }
    }
  }
`

const PostsEnhanced = () => {
  const { stateLang } = useContext(Context)
  const data = useStaticQuery(queryPosts)
  const posts = get(data, "allMarkdownRemark.nodes", []).filter(
    ({ frontmatter }) => frontmatter.lang === stateLang
  )
  return <Posts posts={posts} />
}

export default PostsEnhanced
