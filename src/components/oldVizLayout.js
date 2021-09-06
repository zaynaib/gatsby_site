import React from "react"
import talkStyles from "../styles/talks.module.css"

export default function Vizlayout(){
    return(
        <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" class="img-fluid" />
              <a href="#!">
                <div class="mask"></div>
              </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Post title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
              <a href="#!" class="btn btn-primary">Read</a>
            </div>
          </div>
        </div>




        <div class="col-lg-6 mb-4">
        <div class="card">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" class="img-fluid" />
            <a href="#!">
              <div class="mask"></div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title">Post title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </p>
            <a href="#!" class="btn btn-primary">Read</a>
          </div>
        </div>
      </div>
         </div>
    )
}