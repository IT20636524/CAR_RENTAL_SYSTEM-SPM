import React from 'react'


import { Link } from 'react-router-dom';
import AddCard from '../components/CardManage/AddCard';
import CardView from '../components/CardManage/ViewCards';
import Footer from '../components/Footer';
import Header from '../components/Header';


export default function CardViewPage() {

    return (
        <div>
            <Header />
            <div
                className="hpimage"
                style={{
                    backgroundColor: "light", height: "100vh"
                }}
            >


                <div className="d-flex float-start mt-5 ms-5">
                    <AddCard />
                </div>

                <Link to="/add-payment"><button type="button" className="btn btn-warning float-end mt-5 ms-5" style={{ width: "200px", height: "50px", margin: "50px" }}>
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