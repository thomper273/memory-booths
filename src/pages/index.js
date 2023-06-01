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
      <Seo title="Memory Booth - Photobooth rentals in Belleville, Ontario" />
      <Layout>
        <BannerModule
          title="Welcome to Memory Booth"
          subTitle="Create a snapshot in time to cherish forever through custom photo and video experiences."
        />
        <BasicTextModule
          title="You bring the fun, we'll document it"
          content="Our full-service photobooth rentals are perfect for any occasion. We will ensure a stress-free experience by taking care of the delivery, setup and booth throughout the event."
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
