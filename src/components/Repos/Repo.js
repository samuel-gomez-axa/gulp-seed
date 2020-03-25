import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { PREFIX } from "../constants"
import StarIcon from "../../../static/star.svg"
import "./repo.scss"
import { isNull } from "lodash"

const Repo = ({ name, description, stargazers_count, html_url, lang, title }) => (
  <article className={`${PREFIX}-repo`}>
    <Link className={`${PREFIX}-repo__link ${PREFIX}-repo__link--avatar`} to={`${lang}/${name}`}>
      <img className={`${PREFIX}-repo__avatar`} src={`repos/logo-${name}.svg`} alt={name} />
    </Link>
    <div className={`${PREFIX}-repo__content`}>
      <h2 className={`${PREFIX}-repo__title`}>{title}</h2>
      <p className={`${PREFIX}-repo__description`}>{description}</p>
      <span className={`${PREFIX}-repo__stars`}>
        <StarIcon className={`${PREFIX}-repo__star-icon`} />
        {stargazers_count}
      </span>
      <div className={`${PREFIX}-repo__links`}>
        <a
          className={`${PREFIX}-repo__link ${PREFIX}-repo__link--github`}
          href={html_url}
          target="blank"
        >
          Voir sur Github
        </a>
        <Link
          className={`${PREFIX}-repo__link ${PREFIX}-repo__link--details`}
          to={`${lang}/${name}`}
        >
          Voir détail
        </Link>
      </div>
    </div>
  </article>
)

const setCropDescription = ({ description, maxLength = 100 }) => {
  if (isNull(description)) {
    return "No description"
  }

  const isCropable = !isNull(description) && description.length > maxLength
  const isNotCropable = !isNull(description) && description.length <= maxLength

  return {
    [isCropable]: `${description.substring(0, maxLength)} ...`,
    [isNotCropable]: description,
  }[true]
}
const setCleanName = ({ name }) => {
  if (isNull(name)) {
    return "No name"
  }
  return name.replace(/-/gi, " ")
}

const RepoEnhanced = props => {
  const { description, name } = props

  const cleanedName = setCleanName({ name })
  const croppedDescription = setCropDescription({ description })
  return <Repo {...props} description={croppedDescription} title={cleanedName} />
}

RepoEnhanced.propTypes = {
  name: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  description: PropTypes.string,
  stargazers_count: PropTypes.number,
}

RepoEnhanced.defaultProps = {
  description: "No description",
  stargazers_count: 0,
}

export default RepoEnhanced
