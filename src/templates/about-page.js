import React from "react"
import { graphql } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import AboutPageTemplate from "./AboutPageTemplate"
import { useLang } from "../context/LanguageContext"

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter: fm } = post
  const { lang } = useLang()
  const isZh = lang === "zh"

  return (
    <>
      <MyHelmet
        title={isZh ? fm.title : (fm.title_en || fm.title)}
        description={isZh ? fm.subheading : (fm.subheading_en || fm.subheading)}
      />
      <AboutPageTemplate
        heading={isZh ? fm.heading : (fm.heading_en || fm.heading)}
        subheading={isZh ? fm.subheading : (fm.subheading_en || fm.subheading)}
        html={post.html}
      />
    </>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        title_en
        heading
        heading_en
        subheading
        subheading_en
      }
    }
  }
`
