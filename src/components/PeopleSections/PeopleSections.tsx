import Link from "next/link"
import {
  PEOPLE_CAREERS,
  PEOPLE_CULTURE,
  PEOPLE_RECRUIT,
  PEOPLE_SUPPORT,
} from "@/data/peopleSections"
import "./PeopleSections.css"

export function PeopleCultureSection() {
  return (
    <section className="PeopleCulture">
      <div className="PeopleSection-inner">
        <header className="PeopleSection-header">
          <p className="PeopleSection-label">{PEOPLE_CULTURE.label}</p>
          <h2 className="PeopleSection-title">{PEOPLE_CULTURE.title}</h2>
          <p className="PeopleSection-description">{PEOPLE_CULTURE.description}</p>
        </header>
        <div className="PeopleCulture-grid">
          {PEOPLE_CULTURE.columns.map((column) => (
            <article key={column.title} className="PeopleCulture-card">
              <h3 className="PeopleCulture-cardTitle">{column.title}</h3>
              <p className="PeopleCulture-cardBody">{column.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PeopleSupportSection() {
  return (
    <section className="PeopleSupport">
      <div className="PeopleSection-inner">
        <header className="PeopleSection-header">
          <p className="PeopleSection-label">{PEOPLE_SUPPORT.label}</p>
          <h2 className="PeopleSection-title">{PEOPLE_SUPPORT.title}</h2>
        </header>
        <div className="PeopleSupport-grid">
          {PEOPLE_SUPPORT.cards.map((card) => (
            <article key={card.title} className="PeopleSupport-card">
              <h3 className="PeopleSupport-cardTitle">{card.title}</h3>
              <ul className="PeopleSupport-list">
                {card.items.map((item) => (
                  <li key={item} className="PeopleSupport-item">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PeopleRecruitSection() {
  return (
    <section className="PeopleRecruit">
      <div className="PeopleSection-inner">
        <header className="PeopleSection-header">
          <p className="PeopleSection-label">{PEOPLE_RECRUIT.label}</p>
          <h2 className="PeopleSection-title">{PEOPLE_RECRUIT.title}</h2>
        </header>

        <ol className="PeopleRecruit-steps">
          {PEOPLE_RECRUIT.steps.map((step, index) => (
            <li key={step} className="PeopleRecruit-step">
              <span>{step}</span>
              {index < PEOPLE_RECRUIT.steps.length - 1 ? <span className="PeopleRecruit-arrow">→</span> : null}
            </li>
          ))}
        </ol>
        <p className="PeopleRecruit-note">{PEOPLE_RECRUIT.note}</p>

        <article className="PeopleRecruit-location">
          <h3 className="PeopleRecruit-locationTitle">{PEOPLE_RECRUIT.locationTitle}</h3>
          <p className="PeopleRecruit-locationAddress">{PEOPLE_RECRUIT.locationAddress}</p>
          <Link href={PEOPLE_RECRUIT.locationCtaHref} className="PeopleRecruit-locationCta">
            {PEOPLE_RECRUIT.locationCtaLabel}
          </Link>
        </article>
      </div>
    </section>
  )
}

export function PeopleCareersSection() {
  return (
    <>
      <section className="PeopleCareers">
        <div className="PeopleSection-inner PeopleCareers-inner">
          <div>
            <h2 className="PeopleCareers-title">{PEOPLE_CAREERS.title}</h2>
            <p className="PeopleCareers-body">
              {PEOPLE_CAREERS.lines[0]}
              <br />
              {PEOPLE_CAREERS.lines[1]}
            </p>
          </div>
          <Link href={PEOPLE_CAREERS.ctaHref} className="PeopleCareers-cta">
            {PEOPLE_CAREERS.ctaLabel}
          </Link>
        </div>
      </section>

      <section className="PeoplePager">
        <div className="PeopleSection-inner PeoplePager-inner">
          <Link href={PEOPLE_CAREERS.prevHref} className="PeoplePager-link">
            <span className="PeoplePager-label">{PEOPLE_CAREERS.prevLabel}</span>
            <span className="PeoplePager-title">{PEOPLE_CAREERS.prevTitle}</span>
          </Link>
          <Link href={PEOPLE_CAREERS.nextHref} className="PeoplePager-link PeoplePager-link--next">
            <span className="PeoplePager-label">{PEOPLE_CAREERS.nextLabel}</span>
            <span className="PeoplePager-title">{PEOPLE_CAREERS.nextTitle}</span>
          </Link>
        </div>
      </section>
    </>
  )
}
