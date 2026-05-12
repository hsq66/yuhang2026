import React from "react"
import Header from "../components/Header"
import { Container, SectionHeading } from "../components/Sections"
import { useLang } from "../context/LanguageContext"
import t from "../i18n/translations"
import { imgPath } from "../utils/imgPath"

const WorkshopPageTemplate = ({ heading, subheading }) => {
  const { lang } = useLang()
  const tr = t[lang]

  return (
    <div>
      <Header heading={heading} subheading={subheading} />

      {/* Process Flow */}
      <Container>
        <div className="text-center mb-10">
          <p className="text-green-700 text-sm font-semibold tracking-widest uppercase">{tr.process.sectionTag}</p>
          <SectionHeading className="mt-2">{tr.process.title}</SectionHeading>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{tr.process.subtitle}</p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-green-200 z-0" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {tr.process.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center text-lg font-bold shadow-md">
                  {i + 1}
                </div>
                <p className="mt-3 font-bold text-gray-800 text-sm">{step.phase}</p>
                <ul className="mt-2 space-y-1">
                  {step.items.map((item, j) => (
                    <li key={j} className="text-xs text-gray-500">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process image */}
        <div className="mt-10 rounded-lg overflow-hidden">
          <img src={imgPath("工艺生产流程.png")} alt="生产流程" className="w-full object-contain"
            onError={e => { e.target.style.display = "none" }} />
        </div>
      </Container>

      {/* Workshop sections */}
      <div className="bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase">{tr.workshop.sectionTag}</p>
            <SectionHeading className="mt-2">{tr.workshop.title}</SectionHeading>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{tr.workshop.subtitle}</p>
          </div>

          <div className="space-y-16">
            {tr.workshop.items.map((item, i) => (
              <div key={i} className={`lg:flex lg:items-center lg:gap-12 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="lg:w-1/2">
                  <div className="h-72 rounded-lg overflow-hidden shadow-md">
                    <img src={imgPath(item.img)} alt={item.title}
                      className="w-full h-full object-cover" />
                  </div>
                  {/* Extra images for this workshop */}
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[
                      ["slide7_img3.jpg", "slide7_img4.jpg", "slide7_img1.jpg"],
                      ["slide8_img2.jpg", "slide8_img3.jpg", "slide8_img4.jpg"],
                      ["slide9_img1.jpg", "slide9_img3.jpg", "slide9_img4.jpg"],
                      ["slide6_img3.jpg", "slide5_img3.jpg", "slide5_img4.jpg"],
                    ][i].map((img, j) => (
                      <div key={j} className="h-20 rounded overflow-hidden bg-gray-100">
                        <img src={imgPath(img)} alt="" className="w-full h-full object-cover"
                          onError={e => { e.target.style.display = "none" }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Factory overview */}
      <Container>
        <div className="text-center mb-8">
          <SectionHeading>{lang === "zh" ? "厂区全貌" : "Factory Overview"}</SectionHeading>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {["工厂厂区.jpg", "slide7_img2.jpg", "slide8_img1.jpg",
            "slide9_img2.jpg", "slide5_img1.jpg", "slide6_img2.jpg"].map((img, i) => (
            <div key={i} className="h-48 rounded-lg overflow-hidden">
              <img src={imgPath(img)} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={e => { e.target.style.display = "none" }} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default WorkshopPageTemplate
