import React, { useState } from "react"
import Header from "../components/Header"
import { TextImageSplit, SectionHeading } from "../components/Sections"
import { useLang } from "../context/LanguageContext"
import translations from "../i18n/translations"

// ⚠️ 替换为你的 Formspree Form ID
// 注册地址：https://formspree.io
// 注册后创建 Form，将 ID 填入下方（如 "xpwzabcd"）
const FORMSPREE_ID = "mgoqezlj"

function ContactPageTemplate({ heading, subheading, contactform, office }) {
  const { lang } = useLang()
  const t = translations[lang].contact

  const [status, setStatus] = useState("idle") // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (FORMSPREE_ID === "YOUR_FORM_ID") {
      alert(lang === "zh"
        ? "请先在 Formspree 注册并填入 Form ID"
        : "Please register at Formspree and fill in your Form ID")
      return
    }
    setStatus("submitting")
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div>
      <Header heading={heading} subheading={subheading} />

      <TextImageSplit image={contactform.image}>
        <SectionHeading>{contactform.heading}</SectionHeading>
        <p className="mt-6 text-gray-500 text-lg">{contactform.description}</p>

        {/* 提交成功提示 */}
        {status === "success" ? (
          <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="text-lg font-bold text-green-800">
              {lang === "zh" ? "留言已发送！" : "Message Sent!"}
            </h3>
            <p className="mt-2 text-green-600 text-sm">
              {lang === "zh"
                ? "感谢您的留言，我们会尽快与您联系。"
                : "Thank you for your message. We'll get back to you soon."}
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 text-sm text-green-700 underline hover:text-green-800"
            >
              {lang === "zh" ? "再次留言" : "Send another message"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    {t.firstName}
                  </label>
                  <input
                    type="text" name="first-name" id="first-name"
                    autoComplete="given-name" required
                    className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    {t.lastName}
                  </label>
                  <input
                    type="text" name="last-name" id="last-name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email" name="email" id="email-address"
                    autoComplete="email" required
                    className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      {t.phoneLabel}
                    </label>
                    <span className="text-gray-500 text-sm">{t.phoneOptional}</span>
                  </div>
                  <input
                    type="tel" name="phone" id="phone"
                    autoComplete="tel"
                    className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      {t.message}
                    </label>
                    <span className="text-gray-500 text-sm">{t.messageMax}</span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message" name="message" rows={4} required
                      maxLength={500}
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 错误提示 */}
            {status === "error" && (
              <p className="mt-3 text-sm text-red-600">
                {lang === "zh" ? "发送失败，请稍后重试或直接发邮件联系我们。" : "Failed to send. Please try again or email us directly."}
              </p>
            )}

            <div className="mt-4 py-3 text-right">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? (lang === "zh" ? "发送中..." : "Sending...")
                  : t.submit}
              </button>
            </div>
          </form>
        )}
      </TextImageSplit>

      <TextImageSplit image={office.image} imageLeft={true}>
        <p className="text-green-700 font-semibold tracking-wide">{office.tagline}</p>
        <SectionHeading>{office.location}</SectionHeading>
        <div className="mt-6 sm:flex sm:flex-row text-gray-500">
          <div className="sm:w-1/2" dangerouslySetInnerHTML={{ __html: (lang !== "zh" && office.address_en?.html) ? office.address_en.html : office.address.html }} />
          <div className="mt-6 sm:mt-0 sm:w-1/2" dangerouslySetInnerHTML={{ __html: (lang !== "zh" && office.phone_en?.html) ? office.phone_en.html : office.phone.html }} />
        </div>
      </TextImageSplit>
    </div>
  )
}

export default ContactPageTemplate
