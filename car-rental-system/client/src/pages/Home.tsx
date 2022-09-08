import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div>
      <Header />
      <div
        className="hpimage"
        style={{
          backgroundImage: "", backgroundRepeat: "no-repeat", WebkitBackgroundSize: "cover", backgroundSize: "cover", height: "110vh"
        }}
      >

        <div id="carouselExampleInterval" className="carousel slide" data-mdb-ride="carousel" style={{ alignContent: "center" }}>
          <div className="carousel-inner">
            <div className="carousel-item active" data-mdb-interval="2500">
              <img src="https://usercontent.one/wp/www.grassroottours.com/wp-content/uploads/2019/07/IMG_6428.jpg" className="d-block w-100" style={{ height: "500px" }} alt="Exotic Fruits" />
            </div>
            <div className="carousel-item" data-mdb-interval="2500">
              <img src="https://www.timescar-rental.com/images/top/top_ph002.png" className="d-block w-100" style={{ height: "500px" }} alt="Wild Landscape" />
            </div>
            <div className="carousel-item" data-mdb-interval="2500">
              <img src="https://www.revv.co.in/blogs/wp-content/uploads/2020/09/Car-Rentals-in-India.jpg" className="d-block w-100" style={{ height: "500px" }} alt="Camera" />
            </div>

            <div className="carousel-item" data-mdb-interval="2500">
              <img src="https://www.thrifty.com/Car_Rental_Information/content/~/media/294FC1F7CBA94FAF9DA02A0E3D43BB05.ashx" className="d-block w-100" style={{ height: "500px" }} alt="Exotic Fruits" />
            </div>
          </div>
          <button className="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="row">
          <div className="col-md-4">

            <br />
            <br />

            <Link

              to={`add-payment`}
              className="col-md-3 credit-card"
            >

              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg" className="d-block w-100" style={{ height: "200px" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="https://fastly-production.24c.in/cars24/seo/exterior/BMW/3%20Series%20GT/IMG_5044_1222_1582186327.jpg?auto=format" className="d-block w-100" style={{ height: "200px" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="https://static.autox.com/uploads/2016/11/bmw-3-series-gran-turismo-exterior-photo-front-left-view-1.jpg" className="d-block w-100" style={{ height: "200px" }} />
                  </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </Link>

          </div>
          <div className="col-md-4">

            <br />
            <br />

            <Link

              to={`add-payment`}
              className="col-md-3 credit-card"
            >

              <div id="carouselExampleControlss" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg" className="d-block w-100" style={{ height: "200px" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="https://fastly-production.24c.in/cars24/seo/exterior/BMW/3%20Series%20GT/IMG_5044_1222_1582186327.jpg?auto=format" className="d-block w-100" style={{ height: "200px" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="https://static.autox.com/uploads/2016/11/bmw-3-series-gran-turismo-exterior-photo-front-left-view-1.jpg" className="d-block w-100" style={{ height: "200px" }} />
                  </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlss" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlss" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </Link>




          </div>
          <div className="col-md-4">


            <br />
            <br />

            <Link

              to={`add-payment`}
              className="col-md-3 credit-card"
            >

              <div id="carouselExampleControlsss" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2021/12/07111451/Chauffeur-Service-in-Dubai-Cover-07-12.jpg" className="d-block w-100" style={{ height: "200px" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.indianexpress.com/2019/04/uber.jpg" className="d-block w-100" style={{ height: "200px" }} />
                  </div>
                  <div className="carousel-item">
                    <img src="https://alphazug.com/wp-content/uploads/2018/08/services-e1534364827282.jpg" className="d-block w-100" style={{ height: "200px" }} />
                  </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsss" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsss" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </Link>




          </div>
        </div>




      </div>
      <Footer />


    </div>

  )
}