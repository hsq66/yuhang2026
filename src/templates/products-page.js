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
        description={
          isZh
            ? "宇航金属核心产品：储能箱（6MW大储）、储能柜、电力箱、预制模块化数据中心结构件。专注储能、数据中心、电力电气领域箱式装备结构件配套。"
            : "Yuhang Metal core products: energy storage enclosures (6MW), power cabinets, prefab modular data center structural components for energy storage, data centers, and power sectors."
        }
        keywords="储能箱,储能柜,电力箱,模块化数据中心结构件,箱式装备,钣金结构件,energy storage enclosure,power cabinet,modular data center"
        path="/products/"
        lang={lang}
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
