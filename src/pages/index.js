import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Memory Booth - Photobooth rentals in Kingston and Toronto areas" />
      <Layout>
        <BannerModule
          title="Welcome to Memory Booth"
          subTitle="Capture your memories with our photo booths for any type of event. "
        />
        <BasicTextModule
          title="Bring fun & excitement to your event and create life long memories"
          content="Our full-service photobooth rentals are perfet for any event. Our team will ensure a memorable event, we will deliver, set-up and manage the photobooth for the duration of the event."
          link="/products"
          linkText="View Products"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="Our Photo Booths"
          introduction="Our current photo booth rental offering - check back often as we are expanding."
        />
        <LatestPosts
          title="More information"
          introduction="Pricing, FAQ, terms."
        />
      </Layout>
    </>
  )
}

export default Index
