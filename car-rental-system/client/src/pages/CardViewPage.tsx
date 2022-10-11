import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AddCard from '../components/CardManage/AddCard';
import CardView from '../components/CardManage/ViewCards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';

export default function CardViewPage() {

    const params = useParams();
    const [posts, setPosts] =useState<any>([]);
    useEffect(()=> {
        axios.get(`http://localhost:5000/api/bookings/getone/${params.booking_id}`)
        .then(res => {
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    return (
        <div>
            <Header />
            <div
                className="hpimage"
                style={{
                    backgroundColor: "radial-gradient", height: "100vh"
                }}
            >


                <div className="d-flex float-start mt-5 ms-5">
                    <AddCard />
                </div>

            <Link to={`/add-payment/${posts.booking_id}`}><button type="button" className="btn btn-info  btn-grad float-end mt-5 ms-5" style={{ width: "250px", height: "50px", margin: "50px" }}>
                    Back to Payment 
                </button></Link>
 
                <div>
                    <CardView />
                </div>


            </div>
            <Footer />


        </div>

    )
}