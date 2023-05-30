import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import styled from "styled-components"
import Faq from "../components/FaqPlain/Faq"

const ProductTemplateStyles = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    .column {
      flex: 0 0 100%;

      @media (min-width: 768px) {
        flex-basis: 50%;

        &:nth-child(1) {
          padding-right: 20px;
        }

        &:nth-child(2) {
          padding-left: 20px;
        }

        > * {
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      > * {
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
`
const faqs = () => {
  return (
    <>
      <Seo title="Memory Booth FAQs" />
      <Layout>
        <SimpleBanner title="Frequently Asked Questions">
          <StaticImage
            className="banner__image"
            src="../../static/macbook-dark.jpg"
            alt="Apple Macbook Dark"
          />
        </SimpleBanner>
        <ProductTemplateStyles className="section">
          <div className="container container__tight">
            <div className="column">
              <Faq
                key={1}
                title="How much does it cost?"
                description="Our prices start at $650 for 2 hours and may vary depending on model of photo booth."
              />
              <Faq
                key={2}
                title="How do I book a photo booth?"
                description="Simply fill out our form on our contact us page with your details and we will respond as soon as possible."
              />
              <Faq
                key={3}
                title="Do you require a deposit?"
                description="Yes, we require a 50% deposit along with a signed contract to book an event. The deposit is only refundable if cancellation received within 48 hours notice of the event."
              />
              <Faq
                key={4}
                title="How far do you deliver?"
                description="From Toronto to Kingston."
              />
              <Faq
                key={5}
                title="How far do you deliver?"
                description="From Toronto to Kingston."
              />
              <Faq
                key={6}
                title="Will someone be operating the booth for us?"
                description="If you chose a print or traditional booth, an attendant will be on site to assist guests. The spinning packages do not include an attendant but can be added to your package."
              />
              <Faq
                key={7}
                title="What media formats is available?"
                description="Most of our booths offer both digital and physical prints, and some models include video. Please check the model page for more details."
              />
              <Faq
                key={8}
                title="Do we get unlimited prints?"
                description="Yes, all packages include unlimited sessions."
              />
              <Faq
                key={9}
                title="Can the booth be setup outside?"
                description="Most of our models are suitable for outdoors, providing the weather is sunny and away from any rain. Check the model for more details as some may be indoor only."
              />
            </div>
            <div className="column">
              <Faq
                key={20}
                title="What types of booths you got?"
                description="We currently have three types - a 360 degree spinning platform, a mirror digital ipad model and a traditional photobooth."
              />
              <Faq
                key={21}
                title="How much time is required for setup?"
                description="One hour is required to setup prior to the event."
              />
              <Faq
                key={22}
                title="Do you provide props?"
                description="We provide a wide range of fun props, however you are also free to use your own if preferred."
              />
              <Faq
                key={23}
                title="How many people can fit int the booth?"
                description="Depending on the model, our open concept booths can accomodate large groups with no issue, while our spinning platform can accomodate 4-5 people."
              />
              <Faq
                key={24}
                title="Can I customize the photo strips?"
                description="Absolutely, we can create a custom template with anything you would like."
              />
              <Faq
                key={25}
                title="Can I customize my package?"
                description="For sure, just contact us with the details and we will be happy to accomodate your needs."
              />
              <Faq
                key={26}
                title="Is there a fee for delivery or takedown?"
                description="No, if the delivery is between Toronto and Kingston we do not charge a delivery fee. For setup and takedown this is included in the price."
              />
              <Faq
                key={27}
                title="Can we post our photos on socials?"
                description="Yes, most of our models have build-in social media sharing capabilities."
              />
              <Faq
                key={28}
                title="Does the venue need to provide anything?"
                description="We only ask for a 6-foot table if available. If one cannot be provided please let us know and we will make other arrangements."
              />
              <Faq
                key={29}
                title="Are the photo booths easy to operate?"
                description="Absolutely! All our booths work with the push of a button."
              />
            </div>
          </div>
        </ProductTemplateStyles>{" "}
      </Layout>
    </>
  )
}

export default faqs
