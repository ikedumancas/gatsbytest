import { Link } from "gatsby"
import React from "react"

const Footer = () => (
<section id="footer">
  <div class="inner">
    <header>
      <h2>Get in Touch</h2>
    </header>
    <form method="post" action="#">
      <div class="field half first">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div class="field half">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="6"></textarea>
      </div>
      <ul class="actions">
        <li><input type="submit" value="Send Message" class="alt" /></li>
      </ul>
    </form>
    <div class="copyright">
      &copy; Untitled Design: <Link to="https://templated.co/">TEMPLATED</Link>
      Images <Link to="https://unsplash.com/">Unsplash</Link>
    </div>
  </div>
</section>
)

export default Footer
