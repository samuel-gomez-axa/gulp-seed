import React from "react"
import { Select } from "@axa-fr/react-toolkit-all"
import { PREFIX } from "../constants"
import "./DocLinks.scss"

const DocLinks = ({ onChange, options, stateSelect: { value } }) => (
  <>
    <nav className={`${PREFIX}-doc-links-nav`}>
      <a
        className={`${PREFIX}-doc-links-nav__link`}
        href={`https://axafrance.github.io/site-slash/`}
        title="Design System"
        target="blank"
      >
        Design System
      </a>
      <a
        className={`${PREFIX}-doc-links-nav__link`}
        href={`https://axafrance.github.io/react-toolkit/latest/storybook/`}
        title="Storybook"
        target="blank"
      >
        Storybook
      </a>
    </nav>
  </>
)

export default DocLinks
