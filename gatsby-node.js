const path = require("path")
const { isEmpty } = require("lodash")

const createTagPage = (createPage, allMarkdownByLang) => {
  const AllTagsIndexTemplate = path.resolve("src/templates/AllTagsIndex.js")
  const SingleTagIndexTemplate = path.resolve("src/templates/SingleTagIndex.js")
  const postByTags = {}

  allMarkdownByLang.forEach(({ edges }) => {
    edges.forEach(({ node }, index) => {
      const { frontmatter } = node
      if (frontmatter.tags) {
        frontmatter.tags.forEach(tag => {
          if (!postByTags[tag]) {
            postByTags[tag] = []
          }
          postByTags[tag].push(node)
        })
      }
    })
  })

  const tags = Object.keys(postByTags)

  createPage({
    path: "tags",
    component: AllTagsIndexTemplate,
    context: { tags: tags.sort() },
  })

  tags.forEach(tagName => {
    const postsByTagName = postByTags[tagName]

    createPage({
      path: `tags/${tagName}`,
      component: SingleTagIndexTemplate,
      context: { posts: postsByTagName, tagName },
    })
  })
}

const createRepoPage = (createPage, allMarkdownByLang, allGithubRepo, site) => {
  const blogPostTemplate = path.resolve("src/templates/blogPost.js")
  const siteUrl = site.siteMetadata.siteUrl

  allMarkdownByLang.forEach(({ edges }) => {
    const repoEdges = edges.filter(({ node }) =>
      node.frontmatter.tags.includes("repo")
    )
    repoEdges.forEach(({ node }, index) => {
      const { lang, path, modifier } = node.frontmatter

      const filtreName = repo => {
        const pathName = `/${repo.name}`
        return pathName === path
      }

      const repoInfo = allGithubRepo.nodes.filter(filtreName)

      createPage({
        path: `${lang}${path}`,
        component: blogPostTemplate,
        classModifier: modifier,
        context: {
          classModifier: modifier,
          pathSlug: path,
          lang,
          siteUrl,
          prev: index === 0 ? null : repoEdges[index - 1].node,
          next:
            index === repoEdges.length - 1 ? null : repoEdges[index + 1].node,
          repoInfo: !isEmpty(repoInfo) ? repoInfo.shift() : repoInfo,
        },
      })
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          allMarkdownRemark(sort: { order: ASC, fields: frontmatter___date }) {
            group(field: frontmatter___lang) {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    tags
                    path
                    lang
                    modifier
                  }
                }
              }
            }
          }
          site {
            siteMetadata {
              siteUrl
            }
          }
          allGithubRepo {
            nodes {
              id
              name
              description
              stargazers_count
              topics
              html_url
              tags
            }
          }
        }
      `).then(({ data }) => {
        const { allMarkdownRemark, allGithubRepo, site } = data
        const allMarkdownByLang = allMarkdownRemark.group
        createTagPage(createPage, allMarkdownByLang)
        createRepoPage(createPage, allMarkdownByLang, allGithubRepo, site)
        resolve()
      })
    )
  })
}
