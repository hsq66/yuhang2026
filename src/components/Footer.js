import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useLang } from "../context/LanguageContext"
import translations from "../i18n/translations"

const Footer = () => {
  const { lang } = useLang()
  const t = translations[lang].footer

  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex">
          <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8 lg:w-2/5">
            <div className="px-4 sm:px-6 lg:px-8">
              <Link className="flex items-center gap-2" to="/">
                <StaticImage
                  src="../img/logo1.png"
                  alt="宇航金属 logo"
                  layout="fixed"
                  width={40}
                  height={40}
                  backgroundColor="transparent"
                  placeholder="blurred"
                />
                <div className="text-xl font-bold tracking-wide">
                  <span className="text-gray-800 font-semibold">宇航</span>
                  <span className="text-green-700">金属</span>
                </div>
              </Link>
              <p className="max-w-md mt-2 text-gray-600">
                {t.description}
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase">{t.about}</h3>
                <Link
                  to="/about"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  {t.company}
                </Link>
                <Link
                  to="/about"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  {t.community}
                </Link>
                <Link
                  to="/about"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  {t.careers}
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase">{t.blog}</h3>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  {t.tech}
                </Link>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  {t.music}
                </Link>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                >
                  {t.videos}
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase">{t.products}</h3>
                <a
                  href="https://www.gatsbyjs.com/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Gatsby
                </a>
                <a
                  href="https://tailwindcss.com/"
                  className="block mt-2 text-sm text-gray-600 hover:underline"
                  rel="noreferrer"
                  target="_blank"
                >
                  Tailwind CSS
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase">{t.contact}</h3>
                <span className="block mt-2 text-sm text-gray-600">
                  +86 755 1234 5678
                </span>
                <span className="block mt-2 text-sm text-gray-600">
                  info@yuhangmetal.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none" />

        <div>
          <p className="text-center text-gray-800">{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
