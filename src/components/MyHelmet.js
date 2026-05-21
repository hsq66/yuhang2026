import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import useSiteMetadata from "./SiteMetadata"

function MyHelmet({ title, description, keywords, image, path, lang = "zh", jsonLd }) {
  const site = useSiteMetadata()
  const isZh = lang === "zh"

  const metaTitle = title
    ? `${title} | ${isZh ? site.title : site.titleEn}`
    : (isZh ? site.title : site.titleEn)
  const metaDesc = description || (isZh ? site.description : site.descriptionEn)
  const metaKeywords = keywords || site.keywords
  const metaImage = image
    ? (image.startsWith("http") ? image : `${site.siteUrl}${withPrefix(`/img/${image}`)}`)
    : site.ogImage
  const canonical = path ? `${site.siteUrl}${withPrefix(path)}` : site.siteUrl

  // Default Organization JSON-LD
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "广东宇航金属制品有限公司",
    "alternateName": "Guangdong Yuhang Metal Products Co., Ltd.",
    "url": site.siteUrl,
    "logo": `${site.siteUrl}${withPrefix("/img/yuhang01.png")}`,
    "description": site.description,
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
      "contactType": "sales",
      "availableLanguage": ["Chinese", "English"]
    },
    "sameAs": [site.siteUrl]
  }

  const structuredData = jsonLd || defaultJsonLd

  return (
    <Helmet>
      <html lang={isZh ? "zh-CN" : "en"} />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={isZh ? site.title : site.titleEn} />
      <meta property="og:locale" content={isZh ? "zh_CN" : "en_US"} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

export default MyHelmet
