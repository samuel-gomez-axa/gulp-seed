import React from "react"
import { get } from "lodash"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./Header"

export const queryMetaData = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        description
        siteUrl
        title
      }
    }
  }
`

const HeaderEnhanced = props => {
  const data = useStaticQuery(queryMetaData)
  const metas = get(data, "site.siteMetadata", {})
  return <Header {...props} metas={metas} />
}

export default HeaderEnhanced
