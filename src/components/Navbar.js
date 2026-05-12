import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useLang } from "../context/LanguageContext"
import translations from "../i18n/translations"

const NAVLINK_CLASSES =
  "my-1 py-3 px-3 text-center font-medium text-gray-600 border-b-4 border-white hover:border-green-700 md:mx-1 md:my-0 text-sm"

const isActive = ({ isCurrent }) =>
  isCurrent ? { className: NAVLINK_CLASSES + " text-green-700 border-green-700" } : {}

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: NAVLINK_CLASSES + " text-green-700 border-green-700" } : {}

const ExactNavLink = ({ children, ...rest }) => (
  <div className="flex justify-center">
    <Link className={NAVLINK_CLASSES} getProps={isActive} {...rest}>{children}</Link>
  </div>
)

const PartialNavLink = ({ children, ...rest }) => (
  <div className="flex justify-center">
    <Link className={NAVLINK_CLASSES} getProps={isPartiallyActive} {...rest}>{children}</Link>
  </div>
)

const Navbar = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLang()
  const t = translations[lang].nav
  const close = () => setMenuOpen(false)

  return (
    <nav className={`fixed top-0 w-full z-30 bg-white shadow-xl ${className}`}>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto md:flex md:justify-between md:items-center">
        {/* Logo */}
        <div className="flex items-center justify-between py-2">
          <Link className="flex items-center gap-2" to="/">
            <StaticImage
              src="../img/logo1.png"
              alt="宇航金属"
              className="w-8 h-8 sm:w-10 sm:h-10"
              layout="constrained"
              width={40}
              height={40}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            <div className="text-xl font-bold tracking-wide lg:text-2xl">
              <span className="text-gray-800 font-semibold">宇航</span>
              <span className="text-green-700">金属</span>
            </div>
          </Link>

          {/* Mobile toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Nav links */}
        <div className={"items-center " + (menuOpen ? "block" : "hidden") + " md:flex"}>
          <div className="flex flex-col w-full md:flex-row md:mx-2 md:my-2 items-center">
            <ExactNavLink to="/" onClick={close}>{t.home}</ExactNavLink>
            <PartialNavLink to="/products" onClick={close}>{t.products}</PartialNavLink>
            <PartialNavLink to="/workshop" onClick={close}>{t.workshop}</PartialNavLink>
            <PartialNavLink to="/cases" onClick={close}>{t.cases}</PartialNavLink>
            <ExactNavLink to="/about" onClick={close}>{t.about}</ExactNavLink>
            <ExactNavLink to="/contact" onClick={close}>{t.contact}</ExactNavLink>

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="py-2 md:py-1 md:pl-3 flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-green-700 focus:outline-none"
              aria-label="切换语言"
            >
              <span className={`px-2 py-0.5 rounded ${lang === "zh" ? "bg-green-700 text-white" : "text-gray-400"}`}>中</span>
              <span className="text-gray-300">/</span>
              <span className={`px-2 py-0.5 rounded ${lang === "en" ? "bg-green-700 text-white" : "text-gray-400"}`}>EN</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
