import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Container, SectionHeading } from "../components/Sections"
import { PrimaryButton, SecondaryButton } from "../components/Buttons"
import { useLang } from "../context/LanguageContext"
import t from "../i18n/translations"

const HERO_IMAGES = [
  { src: "/img/slide1_img3.jpg", alt: "宇航金属" },
  { src: "/img/slide3_img1.jpg", alt: "宇航金属工厂" },
  { src: "/img/slide4_img2.jpg", alt: "宇航金属厂区" },
]

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % HERO_IMAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full overflow-hidden">
      {HERO_IMAGES.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-white w-5" : "bg-white/50"
            }`}
            aria-label={`切换到第${i + 1}张`}
          />
        ))}
      </div>
    </div>
  )
}

const IndexPageTemplate = ({ heading, subheading }) => {
  const { lang } = useLang()
  const tr = t[lang]

  const stats = tr.stats
  const customers = tr.customers.list

  return (
    <div>
      {/* ── Hero ── */}
      <div className="relative bg-green-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pt-24 pb-12 bg-green-800 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 lg:w-1/2 lg:pt-44 lg:pb-28 xl:pt-52 xl:pb-36">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-green-800 transform translate-x-1/2"
              fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="relative z-20 mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-md mx-auto lg:max-w-lg lg:mx-0 lg:text-left">
                <p className="text-lime-400 text-sm font-semibold tracking-widest uppercase mb-3">
                  {tr.hero.tag}
                </p>
                <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                  {heading}
                </h1>
                <p className="mt-3 text-green-100 sm:mt-4 lg:mt-6 lg:text-lg">
                  {subheading}
                </p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                  <PrimaryButton to="/products">{tr.hero.cta}</PrimaryButton>
                  <SecondaryButton to="/contact">{tr.hero.cta2}</SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <HeroCarousel />
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="mt-1 text-green-200 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── About ── */}
      <Container>
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase">{tr.about.sectionTag}</p>
            <SectionHeading className="mt-2">{tr.about.title}</SectionHeading>
            <p className="mt-4 text-gray-600 leading-relaxed">{tr.about.desc}</p>
            <p className="mt-3 text-gray-600 leading-relaxed">{tr.about.desc2}</p>
            <div className="mt-6">
              <p className="font-semibold text-gray-700 mb-2">{tr.about.subsidiaries}</p>
              <ul className="space-y-1">
                {tr.about.subs.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-600 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-xs text-gray-500 border border-green-200 inline-block px-3 py-1 rounded-full">
              ✓ {tr.about.cert}
            </p>
            <div className="mt-6">
              <SecondaryButton to="/about">{tr.hero.cta}</SecondaryButton>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <img
              src="/img/slide3_img1.jpg"
              alt="宇航金属厂区"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </Container>

      {/* ── Core Industries ── */}
      <div className="bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase">{tr.industries.sectionTag}</p>
            <SectionHeading className="mt-2">{tr.industries.title}</SectionHeading>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{tr.industries.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tr.industries.items.map((item, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={`/img/${item.img}`}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <SecondaryButton to="/products">{tr.index ? tr.index.viewAll : "查看全部"}</SecondaryButton>
          </div>
        </Container>
      </div>

      {/* ── Products Preview ── */}
      <Container>
        <div className="text-center mb-10">
          <p className="text-green-700 text-sm font-semibold tracking-widest uppercase">{tr.products.sectionTag}</p>
          <SectionHeading className="mt-2">{tr.products.title}</SectionHeading>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{tr.products.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {tr.products.items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg">
              <div className="h-48 sm:h-56">
                <img
                  src={`/img/${item.img}`}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold text-sm">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <SecondaryButton to="/products">{lang === "zh" ? "查看全部产品" : "View All Products"}</SecondaryButton>
        </div>
      </Container>

      {/* ── Workshop Preview ── */}
      <div className="bg-green-800 text-white">
        <Container>
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2">
              <p className="text-lime-400 text-sm font-semibold tracking-widest uppercase">{tr.workshop.sectionTag}</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{tr.workshop.title}</h2>
              <p className="mt-4 text-green-200">{tr.workshop.subtitle}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {tr.workshop.items.slice(0, 4).map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-1 w-2 h-2 rounded-full bg-lime-400 flex-shrink-0" />
                    <span className="text-sm text-green-100">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/workshop" className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 font-semibold text-sm">
                  {lang === "zh" ? "了解生产实力 →" : "Learn More →"}
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 grid grid-cols-2 gap-3">
              {["slide7_img2.jpg", "slide8_img1.jpg", "slide9_img2.jpg", "slide6_img2.jpg"].map((img, i) => (
                <div key={i} className="h-36 rounded-lg overflow-hidden">
                  <img src={`/img/${img}`} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── Key Customers ── */}
      <Container>
        <div className="text-center mb-10">
          <p className="text-green-700 text-sm font-semibold tracking-widest uppercase">{tr.customers.sectionTag}</p>
          <SectionHeading className="mt-2">{tr.customers.title}</SectionHeading>
          <p className="mt-3 text-gray-500">{tr.customers.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {customers.map((name, i) => (
            <div key={i} className="flex items-center justify-center h-16 bg-gray-50 rounded-lg px-3 hover:bg-green-50 transition-colors">
              <span className="text-xs text-center text-gray-600 font-medium leading-tight">{name}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <SecondaryButton to="/cases">{lang === "zh" ? "查看应用案例" : "View Cases"}</SecondaryButton>
        </div>
      </Container>
    </div>
  )
}

export default IndexPageTemplate
