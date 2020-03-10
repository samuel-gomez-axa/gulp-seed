import React from "react"
import { Link } from "gatsby"
import withClassModifier from "../../utils/withClassModifier"
import { PREFIX } from "../constants"
import "./post.scss"
const DEFAULT_CLASSNAME = `${PREFIX}-posts-item`

const Post = ({ title, excerpt, path, lang, className }) => (
  <Link to={`${lang}${path}`}>
    <article className={className}>
      <img
        className={`${DEFAULT_CLASSNAME}__avatar`}
        src="https://picsum.photos/300/200"
        alt={title}
      />
      <h2 className={`${DEFAULT_CLASSNAME}__title`}>{title}</h2>
      <p className={`${DEFAULT_CLASSNAME}__description`}>{excerpt}</p>
    </article>
  </Link>
)

const EnhancedPost = withClassModifier(DEFAULT_CLASSNAME)(Post)
EnhancedPost.displayName = "Post"

export default EnhancedPost
