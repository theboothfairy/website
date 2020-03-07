import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CameraIcon from "../assets/camera-1.svg"
import EmailHeartIcon from "../assets/email-heart.svg"
import TravelBeachIcon from "../assets/travel-beach.svg"
import ChatBubbleSmileyIcon from "../assets/chat-bubble-square-smiley.svg"
import IdCardIcon from "../assets/id-card-1.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="The Booth Fairy" description="Photobooth Hire" />

    <h1>Photobooth hire for brands, agencies and event planners</h1>

    <div class="flex flex-col">
      <div class="section">
        <div class="max-w-sm">
          <IdCardIcon class="inline" />
          <h3>Lead generation and surveys</h3>
          <p>
            Collect data and ask survey questions right from the booth. We ensure data collected and processed is GDPR compliant.
          </p>
        </div>
      </div>

      <div class="section">
        <div class="max-w-sm">
          <EmailHeartIcon class="inline" />
          <h3>Branded emails</h3>
          <p>
            Send stunning branded HTML emails. Embed thumbnails of images and attach branded versions of the stills and GIFs.
          </p>
        </div>
      </div>

      <div class="section">
        <div class="max-w-sm">
          <CameraIcon class="inline" />
          <h3>Brandable and configurable user interfaces</h3>
          <p>
            Totally custom interfaces and user experiences. Brand every aspect of the user facing elements of our photo booth software.
          </p>
        </div>
      </div>

      <div class="section">
        <div class="max-w-sm">
          <ChatBubbleSmileyIcon class="inline" />
          <h3>Email and text message</h3>
          <p>
            Share images and GIFs right from the booth via email or SMS.
          </p>
        </div>
      </div>

      <div class="section">
        <div class="max-w-sm">
          <TravelBeachIcon class="inline" />
          <h3>Green screen</h3>
          <p>
            Our green screen photo booth experience allows you to insert digital images and videos as backgrounds which can then be output as photos, videos or GIFs.
          </p>
        </div>
      </div>
    </div>

    <p className="font-primary font-normal text-gray-800 text-4xl mb-10">Want to find out more?</p>

    <p>Email us at <a href="mailto:hello@theboothfairy.co.uk">hello@theboothfairy.co.uk</a> to receive our brochure</p>
  </Layout>
)

export default IndexPage
