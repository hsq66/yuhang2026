import React from "react"
import { graphql } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import CasesPageTemplate from "./CasesPageTemplate"
import { useLang } from "../context/LanguageContext"

const CasesPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark
  const { lang } = useLang()
  const isZh = lang === "zh"

  return (
    <>
      <MyHelmet
        title={isZh ? fm.title : (fm.title_en || fm.title)}
        description={
          isZh
            ? "宇航金属服务CIMC中集、任达集团、广东君誉新能源、广州铁道车辆等知名企业，提供储能、数据中心、电力电气领域箱式装备结构件配套解决方案。"
            : "Yuhang Metal serves CIMC, Renda Group, Guangdong Junyu New Energy, Guangzhou Railway Vehicle and more, delivering enclosure structural component solutions for energy storage, data centers, and power sectors."
        }
        keywords="宇航金属客户,CIMC中集,任达集团,君誉新能源,储能案例,数据中心案例,箱式装备案例"
        path="/cases/"
        lang={lang}
      />
      <CasesPageTemplate
        heading={isZh ? fm.heading : (fm.heading_en || fm.heading)}
        subheading={isZh ? fm.subheading : (fm.subheading_en || fm.subheading)}
      />
    </>
  )
}

export default CasesPage

export const casesPageQuery = graphql`
  query CasesPage($id: String!) {
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
