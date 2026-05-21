import React from "react"
import { graphql } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import WorkshopPageTemplate from "./WorkshopPageTemplate"
import { useLang } from "../context/LanguageContext"

const WorkshopPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark
  const { lang } = useLang()
  const isZh = lang === "zh"

  return (
    <>
      <MyHelmet
        title={isZh ? fm.title : (fm.title_en || fm.title)}
        description={
          isZh
            ? "宇航金属拥有30,000㎡现代化厂房，五大专业车间，配备重型激光切割、自动化折弯焊接、大型喷涂流水线，为储能及数据中心结构件提供高精度制造保障。"
            : "Yuhang Metal operates a 30,000㎡ modern factory with 5 specialized workshops, heavy-duty laser cutting, automated bending & welding, and large-scale coating lines for precision structural component manufacturing."
        }
        keywords="钣金加工,激光切割,折弯焊接,喷涂,储能结构件制造,箱式装备制造,sheet metal fabrication,laser cutting"
        path="/workshop/"
        lang={lang}
      />
      <WorkshopPageTemplate
        heading={isZh ? fm.heading : (fm.heading_en || fm.heading)}
        subheading={isZh ? fm.subheading : (fm.subheading_en || fm.subheading)}
      />
    </>
  )
}

export default WorkshopPage

export const workshopPageQuery = graphql`
  query WorkshopPage($id: String!) {
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
