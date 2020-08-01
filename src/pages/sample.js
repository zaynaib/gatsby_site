import React from "react"

import { Link } from "gatsby"
import layoutStyles from "../styles/tut-styles.css"

import Main from "../components/main"


export default function Layout() {
  return (
    <Main>

    <div class="left">
      <img src="https://angela-li.github.io/img/avatar.jpg"/>
      <h1>
        Hi! I'm Angela. I'm a data scientist, spatial thinker, and community builder.
      </h1>
    </div>

    <div class="right">
        <p>
          I’m currently working as the R Spatial Advocate for the Center for Spatial Data Science at UChicago. Most recently, I did data science for transit at TransLoc and wrote a spatial econometrics thesis on the Detroit housing market.
        </p>
        
        
        <p>
          In my day to day, I work closely with Luc Anselin, leading workshops for researchers at our center and building out spatial analysis resources for applied social science research. I also speak at conferences about spatial data science and methods. I am currently also leading a seven-person Geospatial Track team for useR! 2020.
          
        </p>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium velit et harum rem, quasi sunt quam ad sapiente dolorum, dolor facere id quidem sequi commodi. Nisi obcaecati mollitia ducimus.
        </p>

        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur debitis, vitae cupiditate error aperiam dignissimos ratione tenetur nemo officiis quisquam sed dolore? Optio exercitationem eveniet voluptatem officia mollitia illo libero?
        </p>
      
      </div>
    
    
    </Main>
    
   
  )
}