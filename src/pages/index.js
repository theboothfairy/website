import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="The Booth Fairy" description="Photobooth Hire" />

    <h1 className="text-4xl">Photobooth hire for brands, agencies and event planners.</h1>

    <h2>Want to find out more?</h2>

    <p>Email us at <a href="mailto:hello@theboothfairy.co.uk">hello@theboothfairy.co.uk</a> to receive our brochure.</p>
  </Layout>
)

export default IndexPage
