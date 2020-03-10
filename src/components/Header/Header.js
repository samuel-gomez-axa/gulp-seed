import React from "react"
import { PREFIX } from "../constants"
import { Link } from "gatsby"
import "./header.scss"
import Menu from "../Menu/Menu"
import Container from "../../templates/Container"
import LogoIcon from "../../../static/logo-guildevopen.svg"

const Header = () => (
  <header className={`${PREFIX}-header`}>
    <Container classModifier="header">
      <Link className={`${PREFIX}-header__link`} to="/">
        <LogoIcon className={`${PREFIX}-header__logo`} />
        <h1 className={`${PREFIX}-header__title`}>
          <span className={`${PREFIX}-header__title-main`}>GuilDevOpen</span>
          <span className={`${PREFIX}-header__title-secondary`}>
            Open Source
          </span>
        </h1>
      </Link>
      <Menu />
    </Container>
  </header>
)

export default Header
