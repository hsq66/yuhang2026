const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                  frontmatter {
                    templateKey
                  }
                }
                next {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    templateKey
                    location
                  }
                }
                previous {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    templateKey
                    location
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          result.errors.forEach(e => console.error(e.toString()))
          return Promise.reject(result.errors)
        }

        const { edges } = result.data.allMarkdownRemark

        edges.forEach(({ node, next, previous }) => {
          const id = node.id
          createPage({
            path: node.fields.slug,
            // tags: edge.node.frontmatter.tags,
            component: path.resolve(
              `src/templates/${String(node.frontmatter.templateKey)}.js`
            ),
            // additional data can be passed via context
            context: {
              id,
              next,
              previous,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      image: File @fileByRelativePath
      title_en: String
      heading_en: String
      subheading_en: String
      office: Office
      about: About
      contactform: ContactForm
      team: [TeamMember]
      featuredimage: FeaturedImage
    }

    type Office {
      address: String @md
      phone: String @md
      image: File @fileByRelativePath
      tagline_en: String
      location_en: String
    }

    type ContactForm {
      heading: String
      heading_en: String
      description: String
      description_en: String
      image: File @fileByRelativePath
    }

    type About {
      heading: String
      heading_en: String
      description: String
      description_en: String
      image: AboutImage
      button: AboutButton
    }

    type AboutImage {
      alt: String
      image: File @fileByRelativePath
    }

    type AboutButton {
      label: String
      label_en: String
      url: String
    }

    type TeamMember {
      name: String
      name_en: String
      title: String
      title_en: String
      image: File @fileByRelativePath
    }

    type FeaturedImage {
      alt: String
      image: File @fileByRelativePath
    }
  `
  createTypes(typeDefs)
}

