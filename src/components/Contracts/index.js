import React from "react"
import { get } from "lodash"
import { graphql, useStaticQuery } from "gatsby"
import Contracts from "./Contracts"

export const queryContracts = graphql`
  query ContractsQuery {
    allContract {
      edges {
        node {
          id
          lastname
          firstname
          birthdate
          agent
        }
      }
    }
  }
`

const ContractsEnhanced = props => {
  const data = useStaticQuery(queryContracts)
  const contracts = get(data, "allContract.edges", [])
  return <Contracts {...props} contracts={contracts} />
}

export default ContractsEnhanced
