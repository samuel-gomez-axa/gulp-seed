import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./Layout"
import Tags from "../components/Tags"
import Meta from "../components/Meta"
import DocLinks from "../components/DocLinks"
import withClassModifier from "../utils/withClassModifier"
import { PREFIX } from "../components/constants"
import StarIcon from "../../static/star.svg"
import GithubIcon from "../../static/github.svg"
import "./blogPost.scss"

const Article = ({
  className,
  title,
  tags,
  next,
  prev,
  html,
  lang,
  stars,
  name,
  url,
  releases,
  path,
}) => (
  <article className={className}>
    <header className={`${PREFIX}-post__header`}>
      <h1 className={`${PREFIX}-post__title`}>{title}</h1>
      {path === "/react-toolkit" && <DocLinks releases={releases} />}
      {url && (
        <a
          className={`${PREFIX}-post__github-link`}
          href={url}
          title={`Aller au Github de ${title}`}
          target="blank"
        >
          <GithubIcon className={`${PREFIX}-post__github-icon`} />
        </a>
      )}
      <img
        className={`${PREFIX}-post__avatar`}
        src={`../../repos/logo-${name}.svg`}
        alt={name}
      />
      {stars && (
        <span className={`${PREFIX}-post__stars`}>
          <StarIcon className={`${PREFIX}-post__star-icon`} />
          {stars}
        </span>
      )}
      <Tags tags={tags} />
    </header>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <nav className={`${PREFIX}-footer-nav`}>
      {prev && (
        <Link
          className={`${PREFIX}-footer-nav__link`}
          to={`${lang}${prev.frontmatter.path}`}
        >
          {prev.frontmatter.title}
        </Link>
      )}
      {next && (
        <Link
          className={`${PREFIX}-footer-nav__link`}
          to={`${lang}${next.frontmatter.path}`}
        >
          {next.frontmatter.title}
        </Link>
      )}
    </nav>
  </article>
)

const EnhancedArticle = withClassModifier(`${PREFIX}-post`)(Article)
EnhancedArticle.displayName = "Article"

const TemplatePost = ({ data, pageContext }) => {
  const { title, tags, meta, path, modifier } = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html
  const { next, prev, lang, siteUrl, repoInfo } = pageContext
  return (
    <Layout>
      <Meta {...meta} path={`${siteUrl}/${lang}${path}`} />
      <EnhancedArticle
        classModifier={modifier}
        title={title}
        tags={tags}
        html={html}
        next={next}
        prev={prev}
        lang={lang}
        path={path}
        stars={repoInfo.stargazers_count}
        name={repoInfo.name}
        url={repoInfo.html_url}
        releases={repoInfo.tags}
      />
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        tags
        lang
        meta {
          description
          keywords
          title
        }
        path
        modifier
      }
    }
  }
`

export default TemplatePost
