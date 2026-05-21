import React from "react"
import { graphql } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import IndexPageTemplate from "./IndexPageTemplate"
import { useLang } from "../context/LanguageContext"

const IndexPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark
  const { lang } = useLang()
  const isZh = lang === "zh"

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "广东宇航金属制品有限公司",
        "alternateName": "Guangdong Yuhang Metal Products Co., Ltd.",
        "url": "https://hsq66.github.io/yuhang2026",
        "logo": "https://hsq66.github.io/yuhang2026/img/yuhang01.png",
        "foundingDate": "2018",
        "description": "专注于储能、预制模块化数据中心及电力电气领域的箱式装备结构件研发与制造",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "金龙大道833号",
          "addressLocality": "博罗县",
          "addressRegion": "惠州市",
          "addressCountry": "CN",
          "postalCode": "516100"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+86-159-9964-0100",
          "contactType": "sales"
        },
        "numberOfEmployees": { "@type": "QuantitativeValue", "value": 400 },
        "areaServed": "CN",
        "knowsAbout": [
          "储能箱式装备结构件", "预制模块化数据中心", "电力电气箱体",
          "钣金加工", "激光切割", "折弯焊接"
        ]
      },
      {
        "@type": "WebSite",
        "name": "广东宇航金属制品有限公司",
        "url": "https://hsq66.github.io/yuhang2026",
        "inLanguage": ["zh-CN", "en"]
      }
    ]
  }

  return (
    <>
      <MyHelmet
        title={isZh ? fm.title : (fm.title_en || fm.title)}
        description={
          isZh
            ? "广东宇航金属制品有限公司，专注于储能、预制模块化数据中心及电力电气领域的箱式装备结构件研发与制造，是箱式装备结构件配套解决方案龙头企业。"
            : "Guangdong Yuhang Metal Products Co., Ltd. specializes in enclosure structural components for energy storage, prefab modular data centers, and power & electrical sectors."
        }
        keywords="储能结构件,箱式装备,模块化数据中心,电力电气,钣金加工,宇航金属,广东宇航,储能箱,energy storage enclosure,modular data center,sheet metal fabrication"
        path="/"
        lang={lang}
        jsonLd={jsonLd}
      />
      <IndexPageTemplate
        heading={isZh ? fm.heading : (fm.heading_en || fm.heading)}
        subheading={isZh ? fm.subheading : (fm.subheading_en || fm.subheading)}
      />
    </>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
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
