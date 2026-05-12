import React from "react"
import Header from "../components/Header"
import { Container, SectionHeading } from "../components/Sections"
import { useLang } from "../context/LanguageContext"
import t from "../i18n/translations"

const CasesPageTemplate = ({ heading, subheading }) => {
  const { lang } = useLang()
  const tr = t[lang]

  const caseGroups = [
    {
      title: tr.industries.items[0].name,
      desc: tr.industries.items[0].desc,
      images: ["slide12_img1.jpg", "slide12_img2.png", "slide12_img3.jpg",
               "slide12_img4.png", "slide12_img5.png", "slide12_img6.png"],
    },
    {
      title: tr.industries.items[1].name,
      desc: tr.industries.items[1].desc,
      images: ["slide13_img1.jpg", "slide13_img2.png", "slide13_img3.png"],
    },
    {
      title: tr.industries.items[2].name,
      desc: tr.industries.items[2].desc,
      images: ["slide14_img1.png", "slide14_img2.jpg", "slide14_img3.png", "slide14_img4.png"],
    },
    {
      title: tr.industries.items[3].name,
      desc: tr.industries.items[3].desc,
      images: ["slide15_img3.png", "slide15_img4.png", "slide15_img5.png",
               "slide15_img1.png", "slide15_img2.png", "slide15_img6.png"],
    },
  ]

  return (
    <div>
      <Header heading={heading} subheading={subheading} />

      {/* Application Cases */}
      <Container>
        <div className="space-y-16">
          {caseGroups.map((group, i) => (
            <div key={i}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{group.title}</h3>
                  <p className="mt-1 text-gray-500 text-sm">{group.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {group.images.map((img, j) => (
                  <div key={j} className="h-36 rounded-lg overflow-hidden bg-gray-100">
                    <img src={`/img/${img}`} alt=""
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={e => { e.target.style.display = "none" }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Key Customers */}
      <div className="bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase">{tr.customers.sectionTag}</p>
            <SectionHeading className="mt-2">{tr.customers.title}</SectionHeading>
            <p className="mt-3 text-gray-500">{tr.customers.subtitle}</p>
          </div>

          {/* Customer logo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tr.customers.list.map((name, i) => (
              <div key={i} className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm px-3 hover:shadow-md hover:border-green-200 border border-transparent transition-all">
                <span className="text-xs text-center text-gray-600 font-medium leading-tight">{name}</span>
              </div>
            ))}
          </div>

          {/* Customer image */}
          <div className="mt-10 rounded-lg overflow-hidden">
            <img src="/img/slide17_img1.jpg" alt={lang === "zh" ? "主要客户" : "Key Customers"}
              className="w-full object-contain"
              onError={e => { e.target.style.display = "none" }} />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default CasesPageTemplate
