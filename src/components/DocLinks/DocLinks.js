import React from "react"
import { Select } from "@axa-fr/react-toolkit-all"
import { PREFIX } from "../constants"
import "./DocLinks.scss"

const DocLinks = ({ onChange, options, stateSelect: { value } }) => (
  <>
    <Select
      name="releases"
      id="releases"
      onChange={onChange}
      options={options}
      value={value}
    />
    <nav className={`${PREFIX}-doc-links-nav`}>
      <a
        className={`${PREFIX}-doc-links-nav__link`}
        href={`https://axaguildev.github.io/react-toolkit/${value}/design/index.html`}
        title="Design System"
        target="blank"
      >
        Design System
      </a>
      <a
        className={`${PREFIX}-doc-links-nav__link`}
        href={`https://axaguildev.github.io/react-toolkit/${value}/storybook/index.html?path=/story/get-started--introduction`}
        title="Storybook"
        target="blank"
      >
        Storybook
      </a>
      <a
        className={`${PREFIX}-doc-links-nav__link`}
        href={`https://axaguildev.github.io/react-toolkit/${value}/demo/`}
        title="Démo"
        target="blank"
      >
        Démo
      </a>
    </nav>
  </>
)

export default DocLinks
