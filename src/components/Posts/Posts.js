import React from "react"
import Post from "./Post"
import { PREFIX } from "../constants"

const Posts = ({ posts }) => (
  <section className={`grid-3-small-2 has-gutter ${PREFIX}-posts`}>
    {posts &&
      posts.map(({ id, frontmatter: { modifier, ...restFrontmatter } }) => (
        <Post key={id} {...restFrontmatter} classModifier={modifier} />
      ))}
  </section>
)

export default Posts
