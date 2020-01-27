import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="The Booth Fairy" description="Photobooth Hire" />

    <h1>Photobooth hire <br /> for brands, agencies and event planners.</h1>

    <br />

    <h2>Want to find out more?</h2>

    <p>Email us at <a href="mailto:hello@theboothfairy.co.uk">hello@theboothfairy.co.uk</a> to receive our brochure.</p>
  </Layout>
)

export default IndexPage
