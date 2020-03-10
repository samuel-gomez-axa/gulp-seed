import React from "react"
import Contract from "./Contract"

const Contracts = ({ contracts }) => (
  <section>
    {contracts &&
      contracts.map(({ node: { id, ...rest } }) => (
        <Contract key={id} id={id} {...rest} />
      ))}
  </section>
)

export default Contracts
