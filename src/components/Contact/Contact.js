import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form
        name="contact"
        netlify
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="https://getform.io/f/81252f65-030c-41ac-8947-700d9bf10a52"
        method="POST"
      >
        <input placeholder="Your name..." type="text" name="name" />
        <input placeholder="Your email..." type="email" name="email" />
        <input placeholder="Date Requested" type="text" name="date" />
        <textarea
          placeholder="Your message..."
          name="message"
          rows="5"
        ></textarea>
        <Button text="Send Message" />
      </form>
    </ContactStyles>
  )
}

export default Contact
