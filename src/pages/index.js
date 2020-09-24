import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Talk from "../components/talks"


export default function Home() {
  return (
    <Layout>
      <Talk month="July" year= "2020" link="https://www.coursera.org/projects/creating-personal-site-gatsby" name="Coursera Guided Project" description= "Creating a Personal Site with Gatsby"/>      
      <Talk month="May" year= "2020" link="https://chicago2020.satrdays.org/" name="satRday Chicago 2020" description= "Using Data Science For Social Good"/>      
      <Talk month="December" year= "2018" link="https://www.meetup.com/WriteSpeakCode-Chicago/events/256192666/" name="Write/Speak/Code" description= "Mentor for Own Your Expertise Events"/>
      <Talk month="November" year= "2018" link="https://www.meetup.com/rladies-chicago/events/255727048/" name="R-Ladies Chicago" description= "'Git' down with Git + R (Workshop & Tutorial)"/>
      <Talk month="October" year= "2018" link="https://www.meetup.com/People-of-Color-Code-and-Coffee/events/255596194/" name="People of Color Code" description= "People of Color Code - Intro to Git and Github "/>
      <Talk month="June" year= "2018" link="https://www.chicagocodecamp.com/" name="Chicago Code Camp" description= "D3.js for beginners "/>
      <Talk month="October" year= "2017" link="http://chicago.act-w.org/" name="ACT-W Chicktech Chicago" description= "Is FreeCodeCamp a Good Way to Learn How to Code? - Intro to Data Analysis with R"/>

    </Layout>
  )
}
