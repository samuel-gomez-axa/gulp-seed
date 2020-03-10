import React from "react"
import { Helmet } from "react-helmet"

const Meta = ({ title, description, keywords, path }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={`${path}`} />
  </Helmet>
)

export default Meta
