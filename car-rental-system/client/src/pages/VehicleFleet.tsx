import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function VehicleFleet() {

  const [lCars, setlCars] = useState<any[]>([]);
  const [pCars, setpCars] = useState<any[]>([]);
  const [gCars, setgCars] = useState<any[]>([]);
  const [image, setImage] = useState("");

  const PF = "http://localhost:5000/images/"

  useEffect(() => {
    const fetchcar = async () => {
      const res = await axios.get('http://localhost:5000/api/cars/category/Luxury/')
      setlCars(res.data)
      setImage(res.data['image'])

    }
    fetchcar()
  }, [])

  useEffect(() => {
    const fetchcar = async () => {
      const res = await axios.get('http://localhost:5000/api/cars/category/Premium/')
      setpCars(res.data)
      setImage(res.data['image'])

    }
    fetchcar()
  }, [])

  useEffect(() => {
    const fetchcar = async () => {
      const res = await axios.get('http://localhost:5000/api/cars/category/General/')
      setgCars(res.data)
      setImage(res.data['image'])

    }
    fetchcar()
  }, [])

  return (
    <div>
      <Header />
      <br /> <br />
      <h3 style={{ "marginLeft": "15px" }}>Luxury Cars</h3>
      {lCars.map(lcr => (
        <div className="row row-cols-1 row-cols-md-6 g-2" style={{ "marginLeft": "10px", "marginRight": "10px" }}>
          <div key={lcr.car_Id} className="col">
            <div className="card" >
              <img src={lcr.image} className="card-img-top" alt="Fissure in Sandstone" />
              <div className="card-body">
                <h5 className="card-title">{lcr.model}</h5>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <br />

      <h3 style={{ "marginLeft": "15px" }}>Premium Cars</h3>
      {pCars.map(pcr => (
        <div className="row row-cols-1 row-cols-md-6 g-2" style={{ "marginLeft": "10px", "marginRight": "10px" }}>
          <div key={pcr.car_Id} className="col">
            <div className="card" >
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="card-img-top" alt="Fissure in Sandstone" />
              <div className="card-body">
                <h5 className="card-title">{pcr.model}</h5>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <br />

      <h3 style={{ "marginLeft": "15px" }}>General Cars</h3>
      {gCars.map(gcr => (
        <div className="row row-cols-1 row-cols-md-6 g-2" style={{ "marginLeft": "10px", "marginRight": "10px" }}>
          <div key={gcr.car_Id} className="col">
            <div className="card" >
              <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="card-img-top" alt="Fissure in Sandstone" />
              <div className="card-body">
                <h5 className="card-title">{gcr.model}</h5>
                <a href="#!" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <br /> <br />
      <Footer />
    </div>
  )
}
