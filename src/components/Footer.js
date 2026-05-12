import React from "react"
import { Link } from "gatsby"
import { useLang } from "../context/LanguageContext"
import t from "../i18n/translations"
import { imgPath } from "../utils/imgPath"

const Footer = () => {
  const { lang } = useLang()
  const tr = t[lang].footer
  const contact = t[lang].contact

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-12">
          {/* Brand */}
          <div className="lg:w-1/3">
            <Link className="flex items-center gap-2" to="/">
              <img src={imgPath("logo1.png")} alt="宇航金属" className="w-9 h-9 object-contain" />
              <div className="text-lg font-bold">
                <span className="text-white">宇航</span>
                <span className="text-green-400">金属</span>
              </div>
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-xs">{tr.description}</p>
          </div>

          {/* Quick links */}
          <div className="mt-8 lg:mt-0 lg:w-1/4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{tr.quickLinks}</h3>
            <ul className="mt-4 space-y-2">
              {[
                { to: "/", label: t[lang].nav.home },
                { to: "/products", label: t[lang].nav.products },
                { to: "/workshop", label: t[lang].nav.workshop },
                { to: "/cases", label: t[lang].nav.cases },
                { to: "/about", label: t[lang].nav.about },
                { to: "/contact", label: t[lang].nav.contact },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-8 lg:mt-0 lg:flex-1">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{tr.contactInfo}</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">📍</span>
                {contact.address}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">📞</span>
                {contact.phone}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✉</span>
                <a href={`mailto:${contact.email}`} className="hover:text-green-400 transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">🌐</span>
                <a href={contact.website} target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors">
                  {contact.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-8 border-gray-700" />
        <p className="mt-6 text-center text-xs text-gray-500">{tr.copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
