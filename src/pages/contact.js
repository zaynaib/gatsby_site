import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

/*
contact form resources 
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_contact_form
https://www.w3schools.com/howto/howto_css_contact_form.asp
https://www.youtube.com/watch?v=6ElQ689HRcY
https://www.gatsbyjs.org/docs/building-a-contact-form/
https://www.gatsbyjs.org/docs/building-a-contact-form/

*/
export default function Contact() {
  return (
    <Layout>

    <form method="post" action="#">
    <label>
      Name
      <input type="text" name="name" id="name" />
    </label>
    <label>
      Email
      <input type="email" name="email" id="email" />
    </label>
    <label>
      Subject
      <input type="text" name="subject" id="subject" />
    </label>
    <label>
      Message
      <textarea name="message" id="message" rows="5" />
    </label>
    <button type="submit">Send</button>
    <input type="reset" value="Clear" />
  </form>
  
  
    
    </Layout>
  )
}