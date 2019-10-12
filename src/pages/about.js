import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pic11 from "../images/pic11.jpg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section id="main">
      <div className="inner">
        <header className="major special">
          <h1>About Page</h1>
          <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
        </header>
        <Link to="#" className="image fit"><img src={Pic11} alt="" /></Link>
        <p>
          Amet nibh adipiscing adipiscing. Commodo ante vis placerat interdum
          massa massa primis. Tempus condimentum tempus non ac varius cubilia
          adipiscing placerat lorem turpis at. Aliquet lorem porttitor interdum.
          Amet lacus. Aliquam lobortis faucibus blandit ac phasellus. In amet
          magna non interdum volutpat porttitor metus a ante ac neque. Nisi
          turpis. Commodo col. Interdum adipiscing mollis ut aliquam id ante
          adipiscing commodo integer arcu amet blandit adipiscing arcu ante.
        </p>
      </div>
    </section>
  </Layout>
)

export default AboutPage