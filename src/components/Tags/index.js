import React from "react"
import { Link } from "gatsby"
import { PREFIX } from "../constants"
import "./tags.scss"

const Tags = ({ tags }) => (
  <ul className={`${PREFIX}-tags`}>
    {tags &&
      tags.map(tag => (
        <li key={tag} className={`${PREFIX}-tag`}>
          <Link className={`${PREFIX}-tag__link`} to={`/tags/${tag}`}>
            {tag}
          </Link>
        </li>
      ))}
  </ul>
)

export default Tags
