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
        description={
          isZh
            ? "广东宇航金属制品有限公司创立于2018年，近3万平米现代化工厂，专注储能、预制模块化数据中心及电力电气领域箱式装备结构件，通过ISO9001:2015认证。"
            : "Founded in 2018, Guangdong Yuhang Metal Products Co., Ltd. operates a 30,000㎡ modern factory specializing in enclosure structural components for energy storage, prefab modular data centers, and power & electrical sectors. ISO9001:2015 certified."
        }
        keywords="宇航金属简介,广东宇航金属,箱式装备龙头企业,ISO9001认证,储能结构件厂家,惠州钣金加工"
        path="/about/"
        lang={lang}
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
