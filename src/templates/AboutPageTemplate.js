import React from "react"
import Header from "../components/Header"
import Content from "../components/Content"
import { Container, SectionHeading } from "../components/Sections"
import { useLang } from "../context/LanguageContext"
import t from "../i18n/translations"
import { imgPath } from "../utils/imgPath"

function AboutPageTemplate({ heading, subheading, html }) {
  const { lang } = useLang()
  const tr = t[lang]

  return (
    <>
      <Header heading={heading} subheading={subheading} />

      {/* Company intro */}
      <Container>
        <div className="lg:flex lg:items-start lg:gap-16">
          <div className="lg:w-3/5">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase">{tr.about.sectionTag}</p>
            <SectionHeading className="mt-2">{tr.about.title}</SectionHeading>
            <p className="mt-4 text-gray-600 leading-relaxed">{tr.about.desc}</p>
            <p className="mt-3 text-gray-600 leading-relaxed">{tr.about.desc2}</p>

            <div className="mt-6">
              <p className="font-semibold text-gray-700 mb-3">{tr.about.subsidiaries}</p>
              <ul className="space-y-2">
                {tr.about.subs.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-green-700 text-white flex items-center justify-center text-xs flex-shrink-0">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-green-700 border border-green-200 rounded-full px-4 py-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {tr.about.cert}
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-2/5 space-y-4">
            <div className="h-56 rounded-lg overflow-hidden">
              <img src={imgPath("工厂厂区.jpg")} alt="厂区" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {tr.stats.map((s, i) => (
                <div key={i} className="bg-green-700 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-green-200 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Markdown content */}
      {html && (
        <div className="bg-gray-50">
          <Container>
            <Content html={html} />
          </Container>
        </div>
      )}

      {/* Corporate Culture */}
      <div className="bg-green-800 text-white">
        <Container>
          <div className="text-center mb-10">
            <p className="text-lime-400 text-sm font-semibold tracking-widest uppercase">{tr.culture.sectionTag}</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{tr.culture.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {tr.culture.values.map((v, i) => (
              <div key={i} className="bg-green-700 rounded-lg p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-lime-400 text-green-900 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {["客", "绩", "奋"][i]}
                </div>
                <h3 className="text-lg font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-green-200 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-lime-400 text-sm border border-lime-400 rounded-full px-4 py-2">
              ✓ {tr.culture.cert}
            </div>
          </div>
        </Container>
      </div>

      {/* Contact CTA */}
      <Container>
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold text-gray-800">{tr.contact.title}</h2>
          <p className="mt-3 text-gray-500">{lang === "zh" ? "欢迎与我们联系，共同探讨合作机会" : "Contact us to explore cooperation opportunities"}</p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a href={`tel:${tr.contact.phone.split("/")[0].trim()}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors">
              📞 {tr.contact.phone}
            </a>
            <a href={`mailto:${tr.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 border border-green-700 text-green-700 rounded-md hover:bg-green-50 transition-colors">
              ✉ {tr.contact.email}
            </a>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AboutPageTemplate
