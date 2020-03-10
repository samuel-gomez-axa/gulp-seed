import React, { useContext } from "react"
import { get } from "lodash"
import { graphql, useStaticQuery } from "gatsby"
import { Context } from "../../templates/Context"
import Repos from "./Repos"

export const queryRepos = graphql`
  query ReposQuery {
    allGithubRepo(
      sort: { order: DESC, fields: stargazers_count }
      filter: { topics: { in: "guildevopen" } }
    ) {
      nodes {
        id
        name
        description
        stargazers_count
        html_url
      }
    }
  }
`

const ReposEnhanced = () => {
  const { stateLang } = useContext(Context)
  const data = useStaticQuery(queryRepos)
  const repos = get(data, "allGithubRepo.nodes", [])
  return <Repos repos={repos} lang={stateLang} />
}

export default ReposEnhanced
