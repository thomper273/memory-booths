import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Contact from "../components/Contact/Contact"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <Layout>
        <SimpleBanner title="Get in touch">
          <StaticImage
            className="banner__image"
            src="../../static/assets/contact-us.png"
            alt="contact us photo booth"
          />
        </SimpleBanner>
        <Contact />
      </Layout>
    </>
  )
}

export default contact
