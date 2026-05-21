import React from "react"
import { graphql } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import ContactPageTemplate from "./ContactPageTemplate"
import { useLang } from "../context/LanguageContext"

function ContactPage({ data }) {
  const fm = data.markdownRemark.frontmatter
  const { lang } = useLang()
  const isZh = lang === "zh"

  const contactform = {
    ...fm.contactform,
    heading: isZh ? fm.contactform.heading : (fm.contactform.heading_en || fm.contactform.heading),
    description: isZh ? fm.contactform.description : (fm.contactform.description_en || fm.contactform.description),
  }

  const office = {
    ...fm.office,
    tagline: isZh ? fm.office.tagline : (fm.office.tagline_en || fm.office.tagline),
    location: isZh ? fm.office.location : (fm.office.location_en || fm.office.location),
  }

  return (
    <>
      <MyHelmet
        title={isZh ? fm.title : (fm.title_en || fm.title)}
        description={
          isZh
            ? "联系广东宇航金属制品有限公司：广东省惠州市博罗县金龙大道833号，电话 159 9964 0100，提供储能、数据中心、电力电气箱式装备结构件定制服务。"
            : "Contact Guangdong Yuhang Metal Products Co., Ltd.: No.833 Jinlong Avenue, Boluo County, Huizhou, Guangdong. Tel: +86-159-9964-0100."
        }
        keywords="宇航金属联系方式,惠州钣金厂,储能结构件定制,箱式装备定制,广东宇航地址"
        path="/contact/"
        lang={lang}
      />
      <ContactPageTemplate
        heading={isZh ? fm.heading : (fm.heading_en || fm.heading)}
        subheading={isZh ? fm.subheading : (fm.subheading_en || fm.subheading)}
        contactform={contactform}
        office={office}
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
        office {
          tagline
          tagline_en
          location
          location_en
          address {
            html
          }
          address_en {
            html
          }
          phone {
            html
          }
          phone_en {
            html
          }
          image {
            childImageSharp {
              gatsbyImageData(width: 640, placeholder: BLURRED)
            }
          }
        }
        contactform {
          heading
          heading_en
          description
          description_en
          image {
            childImageSharp {
              gatsbyImageData(width: 640, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
