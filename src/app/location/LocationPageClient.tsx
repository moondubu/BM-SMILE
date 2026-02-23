"use client"

import { LOCATION_OFFICES } from "@/data/locationSections"
import { useMemo, useState } from "react"

export default function LocationPageClient() {
  const [activeOfficeKey, setActiveOfficeKey] = useState<(typeof LOCATION_OFFICES)[number]["key"]>(
    LOCATION_OFFICES[0].key,
  )

  const activeOffice = useMemo(
    () => LOCATION_OFFICES.find((office) => office.key === activeOfficeKey) ?? LOCATION_OFFICES[0],
    [activeOfficeKey],
  )
  const googleMapApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const mapSrc = useMemo(() => {
    if (activeOffice.mapLink) {
      return `https://www.google.com/maps?output=embed&q=${encodeURIComponent(activeOffice.mapLink)}`
    }

    if (googleMapApiKey) {
      return `https://www.google.com/maps/embed/v1/place?key=${googleMapApiKey}&q=${encodeURIComponent(activeOffice.mapQuery)}&zoom=17`
    }

    return `https://maps.google.com/maps?q=${encodeURIComponent(activeOffice.mapQuery)}&z=17&output=embed`
  }, [activeOffice.mapLink, activeOffice.mapQuery, googleMapApiKey])

  return (
    <section className="LocationPage">
      <div className="LocationPage-inner">
        <h1 className="LocationPage-title">Location</h1>

        <div className="LocationPage-content">
          <article className="LocationPage-mapCard">
            <iframe
              key={activeOffice.key}
              src={mapSrc}
              title={`${activeOffice.tabLabel} map`}
              className="LocationPage-mapFrame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </article>

          <article className="LocationPage-infoCard">
            <h2 className="LocationPage-officeTitle">{activeOffice.title}</h2>

            <div className="LocationPage-description">
              {activeOffice.descriptionLines.map((line) => (
                <p key={line} className="LocationPage-descriptionLine">
                  {line}
                </p>
              ))}
            </div>

            <p className="LocationPage-address">{activeOffice.address}</p>

            <div className="LocationPage-tabs" role="tablist" aria-label="Office location tabs">
              {LOCATION_OFFICES.map((office) => {
                const isActive = office.key === activeOffice.key

                return (
                  <button
                    key={office.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`LocationPage-tab ${isActive ? "LocationPage-tab--active" : ""}`}
                    onClick={() => setActiveOfficeKey(office.key)}
                  >
                    {office.tabLabel}
                  </button>
                )
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
