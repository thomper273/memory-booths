import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          title="All Occasions"
          content="From weddings to corporate events we will ensure much fun and excitement will be had and memories captured."
        >
          <StaticImage
            src="../../../static/logos/ivan.png"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
        <Perk
          title="Our Service"
          content="When you book with us, we treat your event as it were our own. Free delivery & setup with a booth attendant on site."
        >
          <StaticImage
            src="../../../static/logos/customer-service.png"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
        <Perk
          title="Our Booths"
          content="From traditional booths to 360 cams we got you covered! Unlimited printing and social sharing, multiple props and templates to choose from."
        >
          <StaticImage
            src="../../../static/logos/custom-booth.png"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
