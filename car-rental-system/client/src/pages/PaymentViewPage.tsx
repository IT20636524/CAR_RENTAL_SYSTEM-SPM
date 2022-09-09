import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PaymentInvoice from '../components/PaymentInvoice'


export default function PaymentView() {

    return (
        <div>
            <Header />
            <div
                className="hpimage"
                style={{
                    backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/66/25/239/machine-grey-background-volvo-wallpaper-preview.jpg')", backgroundRepeat: "no-repeat", WebkitBackgroundSize: "cover", backgroundSize: "cover"
                }}
            >

<br /><br />
<PaymentInvoice/>
<br /><br />





            </div>
            <Footer />


        </div>

    )
}