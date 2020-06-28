import React from "react"
import Layout from "../components/layout"
import AboutLayout from "../components/aboutlayout"

export default function About({ data }) {

  return (
    <Layout>
      <AboutLayout>
        <p>
          My name is Zaynaib Giwa, but everyone calls me Ola.
          I am a Data Analyst who enjoys dabbling with web development.
          I was born and raised in Chicago where I am currently a Teaching Assistant for a Data Science Bootcamp.

        </p>

        <p>
        I believe that everyone has a place in tech. It doesn’t matter your zip code or if you even have a degree. Everyone has a place in tech.  In my spare time I try to contribute to the tech community.
        
        </p>

        <p>
          <b>How do I do this?</b>
          <ul>
            <li>Co-organizer of R-Ladies Chicago - An organization that promotes gender diversity in the R community</li>
            <li>Teaching Assistant for Hacking 4 Justice - An organization that provides free R training to anyone.</li>
            <li>Blogging about things that I learn in tech.</li> 
          </ul>        
        </p>
      </AboutLayout>
    </Layout>
  )
}

