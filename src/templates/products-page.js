import React from "react"
import { graphql } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import ProductsPageTemplate from "./ProductsPageTemplate"
import { useLang } from "../context/LanguageContext"

const ProductsPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark
  const { lang } = useLang()
  const isZh = lang === "zh"

  return (
    <>
      <MyHelmet
        title={isZh ? fm.title : (fm.title_en || fm.title)}
        description={isZh ? fm.subheading : (fm.subheading_en || fm.subheading)}
      />
      <ProductsPageTemplate
        heading={isZh ? fm.heading : (fm.heading_en || fm.heading)}
        subheading={isZh ? fm.subheading : (fm.subheading_en || fm.subheading)}
      />
    </>
  )
}

export default ProductsPage

export const productsPageQuery = graphql`
  query ProductsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
