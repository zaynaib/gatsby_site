import React from "react"
//http://www.jasminewilson.com/about - inspo

export default function AboutLayout(props) {
  return (<div>
    
            <div className="photo">
                <img src="https://controllergear.com/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/c/o/controller-gear-pokemon-phone-tech-badge-pikachu-face_1.jpg" />
            </div>

            <div className="about-story">
               {props.children}
            </div>
        </div>
    )
}