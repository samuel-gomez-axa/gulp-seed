import React from "react"
import Repo from "./Repo"

const Repos = ({ repos, lang }) => (
  <section className="grid-3-small-2 has-gutter af-repos">
    {repos &&
      repos.map(({ id, ...rest }) => <Repo key={id} {...rest} lang={lang} />)}
  </section>
)

export default Repos
