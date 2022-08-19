import React  from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'





export default function Homepage() {

    return (
        <div>
              <Header/>
          <div
            className="hpimage"
            style={{
            backgroundImage: "",backgroundRepeat: "no-repeat",WebkitBackgroundSize:"cover",backgroundSize:"cover",height: "110vh"}}
            >

<div id="carouselExampleInterval" className="carousel slide" data-mdb-ride="carousel" style={{alignContent:"center"}}>
  <div className="carousel-inner">
  <div className="carousel-item active" data-mdb-interval="2500">
      <img src="https://usercontent.one/wp/www.grassroottours.com/wp-content/uploads/2019/07/IMG_6428.jpg" className="d-block w-100" style={{height: "500px"}}  alt="Exotic Fruits"/>
    </div>
    <div className="carousel-item" data-mdb-interval="2500">
      <img src="https://www.timescar-rental.com/images/top/top_ph002.png" className="d-block w-100" style={{height: "500px"}} alt="Wild Landscape"/>
    </div>
    <div className="carousel-item" data-mdb-interval="2500">
      <img src="https://www.revv.co.in/blogs/wp-content/uploads/2020/09/Car-Rentals-in-India.jpg" className="d-block w-100" style={{height: "500px"}}  alt="Camera"/>
    </div>
   
    <div className="carousel-item" data-mdb-interval="2500">
      <img src="https://www.thrifty.com/Car_Rental_Information/content/~/media/294FC1F7CBA94FAF9DA02A0E3D43BB05.ashx" className="d-block w-100" style={{height: "500px"}}  alt="Exotic Fruits"/>
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
            
             </div>
              <Footer/>
             

        </div>
          
    )
}