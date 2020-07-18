import React from "react"
import Layout from "../components/layout"
import PortfolioLayout from "../components/portfolio-layout"
import Row from "../components/tablerow"
export default function Portfolio() {
  return (
    <Layout>

    
        <PortfolioLayout name = "Frogger Arcade Game"  description="Copy Cat of the 1980's popular Game Frogger" webpage=" https://zaynaib.github.io/frogger-arcade-game/" github= "https://github.com/zaynaib/frogger-arcade-game/" isWebPage={true}/>
        <PortfolioLayout name = "Memory Card Game"  description=" A card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn.  See how many matches you can get before you run out of chances  😝 ." webpage="https://zaynaib.github.io/fend-project-memory-game/" github="https://github.com/zaynaib/fend-project-memory-game" isWebPage={true}/>
        <PortfolioLayout name = "Museum Map of Chicago"  description="An interactive map" webpage="https://wicked-labyrinth-31457.herokuapp.com/" github="https://github.com/zaynaib/map" isWebPage={true}/>
        <PortfolioLayout name = "Chicago Python (ChiPy) Mentorship"  description="A collection of Flask Apps that I created during my mentorship with the ChiPy community" github="https://github.com/zaynaib/chipy_mentorship"/>
        <PortfolioLayout name = "Young Democrats"  description="Data munging exercise to filter House Representives younger than 45 who have social media accounts using Python's Pandas Library" github="https://www.kaggle.com/amazingspecialist/datamade-test"/>

    </Layout>
  )
}