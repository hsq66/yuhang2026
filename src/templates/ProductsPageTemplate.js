import React, { useState } from "react"
import Header from "../components/Header"
import { Container, SectionHeading } from "../components/Sections"
import { useLang } from "../context/LanguageContext"
import t from "../i18n/translations"
import { imgPath } from "../utils/imgPath"

const tabs = {
  zh: ["全部", "储能箱", "数据中心", "电气电力", "其他五金"],
  en: ["All", "Energy Storage", "Data Center", "Electrical", "Hardware"],
}

const ProductsPageTemplate = ({ heading, subheading }) => {
  const { lang } = useLang()
  const tr = t[lang]
  const [activeTab, setActiveTab] = useState(0)

  const allProducts = [
    { name: lang === "zh" ? "储能箱（6MW大储）" : "Energy Storage Container (6MW)", img: "slide10_img3.jpg", cat: 1 },
    { name: lang === "zh" ? "储能柜" : "Energy Storage Cabinet", img: "slide10_img4.jpg", cat: 1 },
    { name: lang === "zh" ? "电池箱盖" : "Battery Box Cover", img: "slide10_img1.jpg", cat: 1 },
    { name: lang === "zh" ? "电力箱" : "Power Distribution Box", img: "slide10_img2.jpg", cat: 3 },
    { name: lang === "zh" ? "模块化数据中心机柜" : "Modular Data Center Cabinet", img: "slide15_img3.png", cat: 2 },
    { name: lang === "zh" ? "数据中心机房设备" : "Data Center Room Equipment", img: "slide15_img4.png", cat: 2 },
    { name: lang === "zh" ? "动力电池箱柜" : "Power Battery Cabinet", img: "slide14_img1.png", cat: 3 },
    { name: lang === "zh" ? "供电设备箱体" : "Power Supply Enclosure", img: "slide14_img2.jpg", cat: 3 },
    { name: lang === "zh" ? "板材" : "Sheet Metal Plates", img: "slide16_img2.png", cat: 4 },
    { name: lang === "zh" ? "小五金部品" : "Small Hardware Parts", img: "slide16_img3.png", cat: 4 },
    { name: lang === "zh" ? "金属半成品" : "Metal Semi-finished Parts", img: "slide16_img4.png", cat: 4 },
    { name: lang === "zh" ? "工商储箱体" : "C&I ESS Enclosure", img: "slide13_img2.png", cat: 1 },
  ]

  const filtered = activeTab === 0 ? allProducts : allProducts.filter(p => p.cat === activeTab)

  return (
    <div>
      <Header heading={heading} subheading={subheading} />

      {/* Product tabs */}
      <Container>
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs[lang].map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === i
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <div key={i} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src={imgPath(item.img)}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={e => { e.target.style.display = "none" }}
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-gray-800">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Industry Applications */}
      <div className="bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase">{tr.industries.sectionTag}</p>
            <SectionHeading className="mt-2">{tr.industries.title}</SectionHeading>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{tr.industries.subtitle}</p>
          </div>

          <div className="space-y-12">
            {tr.industries.items.map((item, i) => (
              <div key={i} className={`lg:flex lg:items-center lg:gap-12 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="lg:w-1/2">
                  <div className="h-64 rounded-lg overflow-hidden">
                    <img
                      src={imgPath(item.img)}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-1/2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>
                  {/* Case images */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      ["slide12_img1.jpg", "slide12_img2.png", "slide12_img3.jpg"],
                      ["slide13_img1.jpg", "slide13_img2.png", "slide13_img3.png"],
                      ["slide14_img1.png", "slide14_img2.jpg", "slide14_img3.png"],
                      ["slide15_img3.png", "slide15_img4.png", "slide15_img5.png"],
                    ][i].map((img, j) => (
                      <div key={j} className="h-20 rounded overflow-hidden bg-gray-100">
                        <img src={imgPath(img)} alt="" className="w-full h-full object-cover"
                          onError={e => { e.target.style.display = "none" }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ProductsPageTemplate
