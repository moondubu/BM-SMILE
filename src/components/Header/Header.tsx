"use client"

import Link from "next/link"
import { useState } from "react"
import "./Header.css"

const NAV_ITEMS = [
  {
    label: "COMPANY",
    children: [
      { label: "ENVIRONMENT", href: "/environment" },
      { label: "PEOPLE", href: "/people" },
      { label: "STRATEGY", href: "/strategy" },
      { label: "GROWTH", href: "/growth" },
      { label: "CONTRIBUTION", href: "/contribution" },
      { label: "LOCATION", href: "/location" },
    ],
  },
  {
    label: "PET IP",
    children: [
      { label: "PETHROOM", href: "/pethroom" },
      { label: "PETHROOM FRIENDS", href: "/pethroom-friends" },
    ],
  },
  { label: "SUBSIDIARY", href: "/subsidiary" },
  { label: "CAREER", href: "/career" },
  { label: "CONTACT", href: "/contact" },
] as const

const LANG_ITEMS = ["KR", "ENG", "CN", "JP"] as const

export default function Header() {
  const [openLang, setOpenLang] = useState(false)
  const [currentLang, setCurrentLang] = useState<string>("KR")

  return (
    <header className="Header">
      <div className="Header-inner">
        <Link href="/" className="Header-logo">
          <img src="/images/common/img_logo.png" alt="BMSmile" className="Header-logoImg" fetchPriority="high" />
        </Link>

        <nav className="Header-nav">
          <ul className="Header-navList">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className={"children" in item ? "Header-navItem Header-navItem--has-dropdown" : "Header-navItem"}>
                {"children" in item ? (
                  <>
                    <span className="Header-navLink">
                      {item.label}
                      <svg className="Header-navCaret" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <ul className="Header-dropdown">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link href={child.href} className="Header-dropdownLink">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href} className="Header-navLink">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="Header-lang">
          <button
            type="button"
            className="Header-langButton"
            aria-expanded={openLang}
            aria-haspopup="listbox"
            onClick={() => setOpenLang((v) => !v)}
          >
            <span>{currentLang}</span>
            <svg className="Header-langCaret" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {openLang && (
            <ul className="Header-langDropdown" role="listbox">
              {LANG_ITEMS.map((lang) => (
                <li key={lang} role="option" aria-selected={currentLang === lang}>
                  <button
                    type="button"
                    className={`Header-langOption${currentLang === lang ? " Header-langOption--active" : ""}`}
                    onClick={() => { setCurrentLang(lang); setOpenLang(false) }}
                  >
                    {lang}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}
