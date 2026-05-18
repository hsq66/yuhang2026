import React, { useState } from "react"
import Header from "../components/Header"
import { Container, SectionHeading } from "../components/Sections"
import { useLang } from "../context/LanguageContext"
import t from "../i18n/translations"
import { imgPath } from "../utils/imgPath"

// 每个车间的图片组：第一张为默认大图，其余三张为缩略图
const WORKSHOP_IMAGES = [
  // 重型激光切割：红圈那张(slide7_img4)作为首张大图
  ["slide7_img4.jpg", "slide7_img2.jpg", "slide7_img3.jpg", "slide7_img1.jpg"],
  // 折弯·焊接·装配：红圈那张(slide8_img3)作为首张大图
  ["slide8_img3.jpg", "slide8_img1.jpg", "slide8_img2.jpg", "slide8_img4.jpg"],
  // 自动化喷涂
  ["slide9_img2.jpg", "slide9_img1.jpg", "slide9_img3.jpg", "slide9_img4.jpg"],
  // 超精密加工
  ["slide6_img2.jpg", "slide6_img3.jpg", "slide5_img3.jpg", "slide5_img4.jpg"],
]

// 单个车间的图片画廊组件（大图 + 可点击缩略图）
const WorkshopGallery = ({ images }) => {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div>
      {/* 大图 */}
      <div className="h-72 rounded-lg overflow-hidden shadow-md bg-gray-100 relative">
        <img
          src={imgPath(images[activeIdx])}
          alt=""
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={e => { e.target.style.display = "none" }}
        />
        {/* 图片序号指示 */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
          {activeIdx + 1} / {images.length}
        </div>
      </div>

      {/* 缩略图行 */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        {images.slice(1).map((img, j) => {
          const realIdx = j + 1
          const isActive = activeIdx === realIdx
          return (
            <button
              key={j}
              onClick={() => setActiveIdx(realIdx)}
              className={`h-20 rounded overflow-hidden bg-gray-100 relative focus:outline-none transition-all duration-200 ${
                isActive
                  ? "ring-2 ring-green-600 ring-offset-1"
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`查看第${realIdx + 1}张图片`}
            >
              <img
                src={imgPath(img)}
                alt=""
                className="w-full h-full object-cover"
                onError={e => { e.target.style.display = "none" }}
              />
              {/* 激活遮罩 */}
              {isActive && (
                <div className="absolute inset-0 border-2 border-green-600 rounded" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const WorkshopPageTemplate = ({ heading, subheading }) => {
  const { lang } = useLang()
  const tr = t[lang]

  return (
    <div>
      <Header heading={heading} subheading={subheading} />

      {/* 生产流程 */}
      <Container>
        <div className="text-center mb-10">
          <p className="text-green-700 text-sm font-semibold tracking-widest uppercase">{tr.process.sectionTag}</p>
          <SectionHeading className="mt-2">{tr.process.title}</SectionHeading>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{tr.process.subtitle}</p>
        </div>

        {/* 流程步骤 */}
        <div className="relative">
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

        {/* 流程图 */}
        <div className="mt-10 rounded-lg overflow-hidden">
          <img src={imgPath("工艺生产流程.png")} alt="生产流程" className="w-full object-contain"
            onError={e => { e.target.style.display = "none" }} />
        </div>
      </Container>

      {/* 车间展示 */}
      <div className="bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase">{tr.workshop.sectionTag}</p>
            <SectionHeading className="mt-2">{tr.workshop.title}</SectionHeading>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{tr.workshop.subtitle}</p>
          </div>

          <div className="space-y-16">
            {tr.workshop.items.map((item, i) => (
              <div key={i} className={`lg:flex lg:items-start lg:gap-12 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* 图片画廊 */}
                <div className="lg:w-1/2">
                  <WorkshopGallery images={WORKSHOP_IMAGES[i]} />
                </div>

                {/* 文字说明 */}
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

      {/* 厂区全貌 */}
      <Container>
        <div className="text-center mb-8">
          <SectionHeading>{lang === "zh" ? "厂区全貌" : "Factory Overview"}</SectionHeading>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {["工厂厂区.jpg", "slide7_img2.jpg", "slide8_img1.jpg",
            "slide9_img2.jpg", "slide5_img1.jpg", "slide6_img2.jpg"].map((img, i) => (
            <div key={i} className="h-48 rounded-lg overflow-hidden">
              <img src={imgPath(img)} alt=""
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={e => { e.target.style.display = "none" }} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default WorkshopPageTemplate
