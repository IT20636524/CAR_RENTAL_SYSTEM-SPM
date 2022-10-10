import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

import { Link } from 'react-router-dom';
import '../App.css';

export default function Home() {

  return (
    <div>
      <Header />
      <div
        className="hpimage"
        style={{
          backgroundImage: "", backgroundRepeat: "no-repeat", WebkitBackgroundSize: "cover", backgroundSize: "cover"
        }}
      >

        <div id="carouselExampleInterval" className="carousel slide" data-mdb-ride="carousel" style={{ alignContent: "center" }}>
          <div className="carousel-inner">

            <div className="carousel-item active" data-mdb-interval="2500">
              <img src="https://global.toyota/pages/models/images/20191018/kv/yaris_w1920_01.jpg" className="d-block w-100" style={{ height: "500px", opacity: "0.7" }} alt="Exotic Fruits" />
              <div className="carousel-caption d-none d-md-block">
                <h1>Welcome to GoRent !!</h1><br />
                <p className="fst-italic"><h4>You can join with us. You can get the best service from us.</h4></p>
              </div>
            </div>


            <div className="carousel-item" data-mdb-interval="2500">
              <img src="https://global.toyota/pages/news/images/2019/12/20/0001/20191220_01_kv_w1920.jpg" className="d-block w-100" style={{ height: "500px", opacity: "0.7" }} alt="Wild Landscape" />
              <div className="carousel-caption d-none d-md-block">
                <h1>Welcome to GoRent !!</h1><br />
                <p className="fst-italic"><h4>You can join with us. You can get the best service from us.</h4></p>
              </div>
            </div>

            <div className="carousel-item" data-mdb-interval="2500">
              <img src="https://global.toyota/pages/models/images/mirai/mirai_w1920_02.jpg" className="d-block w-100" style={{ height: "500px", opacity: "0.7" }} alt="Camera" />
              <div className="carousel-caption d-none d-md-block">
                <h1>Welcome to GoRent !!</h1><br />
                <p className="fst-italic"><h4>You can join with us. You can get the best service from us.</h4></p>
              </div>
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
        <section id="hero" className="hero d-flex align-items-center">

          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">CAR RENTAL DEALS IN SRI LANKA</h1>
                <h2 data-aos="fade-up" data-aos-delay="400">Use the quick-and-easy booking form above in order to instantly compare all vehicles and offers and make your car rental resevation today!</h2>
                <div data-aos="fade-up" data-aos-delay="600">
                  <div className="text-center text-lg-start">
                    <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Get Started</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                <img src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>

        </section>

        <div className="row">
          <div className="col-md-4">

            <br />
            <br />

            <Link to={`/vehiclefleet`} className="col-md-3 credit-card">

              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://global.toyota/pages/news/images/2019/12/20/0001/001.jpg" className="d-block w-100" style={{ height: "250px", opacity: "0.7" }} />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Vehicle Fleet</h3>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://global.toyota/pages/news/images/2019/09/17/1300/20190917_02_kv_w1920_jp.jpg" className="d-block w-100" style={{ height: "250px", opacity: "0.7" }} />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Vehicle Fleet</h3>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://s1.cdn.autoevolution.com/images/models/TOYOTA_Aygo-X-2021_main.jpg" className="d-block w-100" style={{ height: "250px", opacity: "0.7" }} />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Vehicle Fleet</h3>
                    </div>
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

            <Link to={`/inquiries`} className="col-md-3 credit-card">

              <div id="carouselExampleControlss" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://static.pakwheels.com/2021/01/shutterstock_97331864-1.jpg" className="d-block w-100" style={{ height: "250px", opacity: "0.7" }} />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Inquiries</h3>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://gogoacarrentals.com/wp-content/uploads/2019/02/chauffeur.jpg" className="d-block w-100" style={{ height: "250px", opacity: "0.7" }} />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Inquiries</h3>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://img.freepik.com/premium-photo/summer-car-trip-young-family-vacation_109800-692.jpg?w=2000" className="d-block w-100" style={{ height: "250px", opacity: "0.7" }} />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Inquiries</h3>
                    </div>
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

            <Link to={`/staff`} className="col-md-3 credit-card">

              <div id="carouselExampleControlsss" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2021/12/07111451/Chauffeur-Service-in-Dubai-Cover-07-12.jpg" className="d-block w-100" style={{ height: "250px", opacity: "0.7" }} />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Drivers</h3>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.indianexpress.com/2019/04/uber.jpg" className="d-block w-100" style={{ height: "250px", opacity: "0.7" }} />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Drivers</h3>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://alphazug.com/wp-content/uploads/2018/08/services-e1534364827282.jpg" className="d-block w-100" style={{ height: "250px", opacity: "0.7" }} />
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Drivers</h3>
                    </div>
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
        <br />
        <br />
        <section id="features" className="features">

          <div className="container" data-aos="fade-up">

            <header className="section-header">
              <h2>Features</h2>
              <p>WHY RENT WITH GORENT?</p>
            </header>

            <div className="row">

              <div className="col-lg-6">
                <img src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/features.png" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                <div className="row align-self-center gy-4">

                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>NEW CARS - ON AVERAGE 3 MONTHS OLD</h3>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>PREMIUM FLEET OF JAPAN CARS</h3>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>UNLIMITED MILES ON STANDARD VEHICLES</h3>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>FREE CANCELLATION WHEN YOU PAY ON ARRIVAL</h3>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>FRIENDLY 24/7 CUSTOMER SERVICE</h3>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>CAR RENTAL MADE QUICK AND EASY</h3>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </section>
      </div>
      <br /><br />
      <Footer />

    </div>

  )
}