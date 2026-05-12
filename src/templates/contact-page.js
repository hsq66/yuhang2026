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
        description={isZh ? fm.subheading : (fm.subheading_en || fm.subheading)}
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
          phone {
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
