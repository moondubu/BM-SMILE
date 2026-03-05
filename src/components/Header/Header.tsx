"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { type MouseEvent, useEffect, useRef, useState } from "react"
import { prefixPath } from "@/utils/path"
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
  { label: "CAREER", href: "/career" },
  { label: "SUBSIDIARY", href: "/subsidiary" },
  { label: "CONTACT", href: "/contact" },
] as const

const LANG_ITEMS = ["KR", "ENG", "CN", "JP"] as const

export default function Header() {
  const pathname = usePathname()
  return <HeaderView key={pathname} pathname={pathname} />
}

type HeaderViewProps = {
  pathname: string
}

function HeaderView({ pathname }: HeaderViewProps) {
  const navRef = useRef<HTMLElement>(null)
  const langRef = useRef<HTMLDivElement>(null)
  const [openLang, setOpenLang] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [openNavDropdown, setOpenNavDropdown] = useState<string | null>(null)
  const [openMobileGroups, setOpenMobileGroups] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      NAV_ITEMS.filter((item) => "children" in item).map((item) => [item.label, true]),
    ),
  )
  const [currentLang, setCurrentLang] = useState<string>("KR")

  const handleCareerClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const isCareerPage = pathname === "/career" || pathname === "/career/"
    if (!isCareerPage) return
    event.preventDefault()
    window.dispatchEvent(new CustomEvent("career:reset-iframe"))
  }

  const handleMobileMenuClose = () => {
    setOpenMobileMenu(false)
    setOpenLang(false)
  }
  const handleNavDropdownToggle = (label: string) => {
    setOpenNavDropdown((prev) => (prev === label ? null : label))
  }
  const handleMobileGroupToggle = (label: string) => {
    setOpenMobileGroups((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  useEffect(() => {
    document.body.classList.toggle("Header-menu-open", openMobileMenu)
    return () => {
      document.body.classList.remove("Header-menu-open")
    }
  }, [openMobileMenu])

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | globalThis.MouseEvent) => {
      const target = event.target as Node | null
      if (!target) return

      if (navRef.current && !navRef.current.contains(target)) {
        setOpenNavDropdown(null)
      }

      if (langRef.current && !langRef.current.contains(target)) {
        setOpenLang(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
    }
  }, [])

  return (
    <header className={`Header${openMobileMenu ? " Header--menu-open" : ""}`}>
      <div className="Header-inner">
        <Link href="/" className="Header-logo">
          <img src={prefixPath("/images/common/img_logo.png")} alt="BMSmile" className="Header-logoImg" fetchPriority="high" />
        </Link>

        <nav className="Header-nav" ref={navRef}>
          <ul className="Header-navList">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className={
                  "children" in item
                    ? `Header-navItem Header-navItem--has-dropdown${openNavDropdown === item.label ? " Header-navItem--open" : ""}`
                    : "Header-navItem"
                }
              >
                {"children" in item ? (
                  <>
                    <span
                      className="Header-navLink"
                      role="button"
                      tabIndex={0}
                      aria-expanded={openNavDropdown === item.label}
                      onClick={() => handleNavDropdownToggle(item.label)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault()
                          handleNavDropdownToggle(item.label)
                        }
                      }}
                    >
                      {item.label}
                      <svg className="Header-navCaret" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <ul className="Header-dropdown">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="Header-dropdownLink"
                            onClick={() => {
                              setOpenNavDropdown(null)
                            }}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  "external" in item && item.external ? (
                    <a href={item.href} className="Header-navLink" target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  ) : item.href === "/career" ? (
                    <Link href={item.href} className="Header-navLink" onClick={handleCareerClick}>
                      {item.label}
                    </Link>
                  ) : (
                    <Link href={item.href} className="Header-navLink">
                      {item.label}
                    </Link>
                  )
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="Header-lang" ref={langRef}>
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
                    onClick={() => {
                      setCurrentLang(lang)
                      setOpenLang(false)
                    }}
                  >
                    {lang}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="button"
          className="Header-menuButton"
          aria-expanded={openMobileMenu}
          aria-label={openMobileMenu ? "Close menu" : "Open menu"}
          onClick={() => setOpenMobileMenu((v) => !v)}
        >
          {openMobileMenu ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      <div className={`Header-mobileMenu${openMobileMenu ? " Header-mobileMenu--open" : ""}`}>
        <nav className="Header-mobileNav" aria-label="Mobile navigation">
          <ul className="Header-mobileList">
            {NAV_ITEMS.map((item) => (
              <li key={`mobile-${item.label}`} className="Header-mobileItem">
                {"children" in item ? (
                  <>
                    <button
                      type="button"
                      className="Header-mobileGroupHeader"
                      aria-expanded={openMobileGroups[item.label]}
                      onClick={() => handleMobileGroupToggle(item.label)}
                    >
                      <p className="Header-mobileTitle">{item.label}</p>
                      <svg
                        className={`Header-mobileGroupCaret${openMobileGroups[item.label] ? " Header-mobileGroupCaret--open" : ""}`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <ul className={`Header-mobileSubList${openMobileGroups[item.label] ? " Header-mobileSubList--open" : ""}`}>
                      {item.children.map((child) => (
                        <li key={`mobile-${item.label}-${child.label}`}>
                          <Link href={child.href} className="Header-mobileSubLink" onClick={handleMobileMenuClose}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : item.href === "/career" ? (
                  <Link
                    href={item.href}
                    className="Header-mobileTitleLink"
                    onClick={(event) => {
                      handleMobileMenuClose()
                      handleCareerClick(event)
                    }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link href={item.href} className="Header-mobileTitleLink" onClick={handleMobileMenuClose}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
