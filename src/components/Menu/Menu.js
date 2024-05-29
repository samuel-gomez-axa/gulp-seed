import React, { useCallback, useState } from "react"
import { Link } from "gatsby"
import OpenButton from "../../../static/menu.svg"
import CloseButton from "../../../static/close.svg"
import { PREFIX } from "../constants"
import "./menu.scss"

const Menu = props => {
  const [isOpen, setStateMenu] = useState(false)

  const close = useCallback(() => {
    setStateMenu(false)
  }, [])

  const open = useCallback(() => {
    setStateMenu(true)
  }, [])

  return <MenuView {...props} isOpen={isOpen} close={close} open={open} />
}

const ToggleButton = ({ close, open, isOpen }) =>
  isOpen ? <CloseButton onClick={close} /> : <OpenButton onClick={open} />

const MenuView = props => (
  <nav
    className={`${PREFIX}-nav${props.isOpen ? ` ${PREFIX}-nav--opened` : ""}`}
  >
    <span className={`${PREFIX}-nav__toggle`}>
      <ToggleButton {...props} />
    </span>
    <ul className={`${PREFIX}-nav__list`}>
      <li className={`${PREFIX}-nav__item`}>
        <Link
          className={`${PREFIX}-nav__link`}
          to="/"
          activeClassName={`${PREFIX}-nav__link--active`}
        >
          Accueil
        </Link>
      </li>
      <li className={`${PREFIX}-nav__item`}>
        <a
          className={`${PREFIX}-nav__link`}
          href="https://medium.com/just-tech-it-now"
          title="Blog Just Tech IT"
          target="blank"
        >
          Blog
        </a>
      </li>
      <li className={`${PREFIX}-nav__item`}>
        <a
          className={`${PREFIX}-nav__link`}
          href="https://github.com/AxaFrance"
          title="Github GuilDevOpen"
          target="blank"
        >
          Github
        </a>
      </li>
      <li className={`${PREFIX}-nav__item`}>
        <a
          className={`${PREFIX}-nav__link`}
          href="https://github.com/axa-group"
          title="Github AxaGroup"
          target="blank"
        >
          Axa Group
        </a>
      </li>
    </ul>
  </nav>
)

export default Menu
