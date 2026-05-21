import React from "react"
import { graphql } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import ContactPageTemplate from "./ContactPageTemplate"
import { useLang } from "../context/LanguageContext"

const ContactPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark
  const { lang } = useLang()
  const isZh = lang === "zh"

  return (
    <>
      <MyHelmet
        title={isZh ? fm.title : (fm.title_en || fm.title)}
        description={
          isZh
            ? "联系广东宇航金属制品有限公司：广东省惠州市博罗县金龙大道833号，电话 159 9964 0100，提供储能、数据中心、电力电气箱式装备结构件定制服务。"
            : "Contact Guangdong Yuhang Metal Products Co., Ltd.: No.833 Jinlong Avenue, Boluo County, Huizhou, Guangdong. Tel: +86-159-9964-0100. Custom enclosure structural components for energy storage, data centers, and power sectors."
        }
        keywords="宇航金属联系方式,惠州钣金厂,储能结构件定制,箱式装备定制,广东宇航地址"
        path="/contact/"
        lang={lang}
      />
      <ContactPageTemplate
        heading={isZh ? fm.heading : (fm.heading_en || fm.heading)}
        subheading={isZh ? fm.subheading : (fm.subheading_en || fm.subheading)}
        contactform={fm.contactform}
        office={fm.office}
      />
    </>
  )
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        title_en
        heading
        heading_en
        subheading
        subheading_en
        contactform {
          heading
          heading_en
          description
          description_en
          image
        }
        office {
          tagline
          tagline_en
          location
          location_en
          address
          phone
          image
        }
      }
    }
  }
`
