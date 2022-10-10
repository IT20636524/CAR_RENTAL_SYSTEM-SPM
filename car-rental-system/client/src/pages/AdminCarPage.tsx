import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminFooter from '../components/AdminFooter'
import AdminHeader from '../components/AdminHeader'
import AdminSideNav from '../components/AdminSideNav'
import AddCar from '../components/CarModal/AddCar';
import CarReport from '../components/CarModal/CarReport';
import DeleteCar from '../components/CarModal/DeleteCar';
import SearchCar from '../components/CarModal/SearchCar';
import UpdateCar from '../components/CarModal/UpdateCar';

export default function AdminCarPage() {

    const [car, setCar] = useState<any[]>([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/cars/").then(res => {
            setCar(res.data);
        })
            .catch(err => {
                console.log(err);
            })

    })

    return (
        <div>
            <AdminSideNav />
            <div className="content">
                <AdminHeader />
                <SearchCar /><CarReport />

                <div className="container-fluid pt-4 px-4">
                    <h1 style={{ "marginLeft": "550px", "marginTop": "1px", "marginBottom": "10px", "color": "white", "fontFamily": "fantasy" }}>Cars</h1>
                    <div className="bg-secondary text-center rounded p-4" >
                        <div className="d-flex align-items-center justify-content-between mb-4" >
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0" >
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>ID</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Category</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Model</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Passengers</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Transmission</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Air Condition</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Fuel Type</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Engine Capacity</th>
                                        <th scope="col" style={{ "fontSize": "20px", "color": "white" }}>Cost Per Day</th>
                                        <th className="text-center" scope="col" style={{ "fontSize": "20px", "color": "white" }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody style={{ color: "white", "fontFamily": "sans-serif" }}>
                                    {car.map(cm => (<tr key={cm.car_Id}>
                                        <td style={{ "fontSize": "20px" }}>{cm.car_Id}</td>
                                        <td style={{ "fontSize": "20px" }}>{cm.category}</td>
                                        <td style={{ "fontSize": "20px" }}>{cm.model}</td>
                                        <td style={{ "fontSize": "20px" }}>{cm.passengers}</td>
                                        <td style={{ "fontSize": "20px" }}>{cm.transmission}</td>
                                        <td style={{ "fontSize": "20px" }}>{cm.airCondition}</td>
                                        <td style={{ "fontSize": "20px" }}>{cm.fuelType}</td>
                                        <td style={{ "fontSize": "20px" }}>{cm.engineCap}</td>
                                        <td style={{ "fontSize": "20px" }}>{cm.costPerDay}</td>
                                        <td className="text-center">
                                            <UpdateCar car_Id={cm.car_Id} /> &nbsp;&nbsp;
                                            <DeleteCar car_Id={cm.car_Id} />
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <AddCar />
                <AdminFooter />
            </div>
        </div>
    )
}
