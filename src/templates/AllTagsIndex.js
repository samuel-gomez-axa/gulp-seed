import React from "react"
import Tags from "../components/Tags"
import Layout from "./Layout"

const AllTagsTemplate = ({ pageContext: { tags } }) => (
  <Layout>
    <Tags tags={tags} />
  </Layout>
)

export default AllTagsTemplate
