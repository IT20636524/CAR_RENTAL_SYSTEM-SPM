import React, { useEffect, useState, } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingDetails from '../components/Payment/BookingDetails';
import { useParams } from 'react-router-dom';
import {
  CreditCard,
} from '../components/Card/CreditCard';

const initialState: CreditCard = {
  _id: '',
  cardNumber: '',
  cardHolder: '',
  cardMonth: '',
  cardYear: '',
  cardCvv: '',
};

export default function AddPayment() {

  const [booking_id, setBookingId] = useState("");
  const [payment_id, setPaymentId] = useState("");
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [cost_per_day, setCostPerDay] = useState("");
  const [contact_number, setContactNumber] = useState("");
  const [posts, setPosts] = useState<any>([]);
  const [image, setImage] = useState("");
  const [no_of_days, setNoOfDays] = useState("");
  const [type_of_service, setTypeOfService] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [payment_status,setPaymentStatus] = useState("");

  const navigate = useNavigate();

  const params = useParams();

  
  useEffect(() => {
    axios.get(`http://localhost:5000/api/bookings/getone/${params.booking_id}`)

      .then(res => {
      
        console.log(res.data)
        setPosts(res.data)
        setBookingId(res.data['booking_id']);
        setName(res.data['name']);       
        setContactNumber(res.data['contact_number']);
        var cost = (posts.type_of_service === 'With Driver') ? (parseInt(posts.cost_per_day) + 4000) * (parseInt(posts.no_of_days)) + "LKR" : (parseInt(posts.cost_per_day)) * (parseInt(posts.no_of_days)) + "LKR"
        setCostPerDay(cost);
        console.log(cost)

      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const [cardsDatas, setCardsDatas] = useState<CreditCard[]>([]);

  const config = localStorage.getItem('access_token') ? {
    headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
  } : {};

  useEffect(() => {
    const fetchCard = async () => {

      const res = await axios.get('http://localhost:5000/api/cards', config)
      const cards: CreditCard[] = res.data;
      setCardsDatas(cards)
      console.log(cards)

    }
    fetchCard()
  }, [])



  const PayData = {
    booking_id,
    name,
    card,
    cost_per_day,
    contact_number,
  }

  const BookingData={
    payment_status:'paid'
  }

  

  function submitForm(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if (card.length === 0) {
      swal(" Fields Cannot empty !", "Please enter all data !", "error");
    } else {
      console.log(PayData);
      axios.post("http://localhost:5000/api/payments", PayData)
        .then(function (response: any) {
          console.log(response);
          setBookingId("");
          setName("");
          setCard("");
          setCostPerDay("");
          setContactNumber("");
          axios.put("http://localhost:5000/api/bookings/update/"+booking_id,BookingData)
            .then(function(res) {
                console.log(res);
            })
            .catch(function(error) {
                console.log(error);
                alert("Not updated");
            });
          swal({ text: "Payment Successful", icon: "success",  buttons: {
            cancel: { text: 'Cancel' },
            confirm: { text: 'Confirm' },
          }}).then((res: any)=>{
            navigate(`/paymentview/${response.data.payment_id}/${response.data.booking_id}`,{replace:true});
          })

          console.log(response.data)
        })

    }

  }





  return (
    <div>
      <Header />
      <div className='background-radial-gradient'>
        <div className="container">
          <div className="row">
            <div className="col">

              <div className="card" style={{ height: "660px", background: "linear-gradient(140deg, rgba(72, 115, 150, 1) 50%, rgba(57, 108, 150, 0.65) 65%, rgba(42, 102, 150, 0.6) 50%, rgba(27, 95, 150, 0.95) 80%, rgba(12, 88, 150, 1) 90%, rgba(0, 83, 150, 0.8) 70%)", marginTop: "50px" }}>
                <div className="card-body px-4 px-md-5">
                  <section className="mb-4">








                    <h2 className="h1-responsive font-weight-bold text-center my-4" style={{ color: "hsl(218, 81%, 95%)" }}>Place Your Installment Here...!!!</h2>


                    <div className="row">

                      <div className="col-md-9 mb-md-0 mb-5" >
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST" onSubmit={submitForm}>

                          <div className="form-floating mb-3">
                            <input className="form-control" id="bookingid" type="text" placeholder="Booking ID" value={posts.booking_id} onChange={(e) => setBookingId(e.target.value)} />
                            <label htmlFor="bookingid" style={{ fontSize: "16px" }} >Booking ID</label>

                          </div>
                          <br />
                          <div className="form-floating mb-3">
                            <input className="form-control" id="name" type="text" placeholder="Name" value={posts.name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="name" style={{ fontSize: "16px" }}>Name</label>

                          </div>
                          <br />
                          <div className="form-floating mb-3">
                            <input className="form-control" id="contact" type="text" placeholder="Contact Number" value={posts.contact_number} onChange={(e) => setContactNumber(e.target.value)} />
                            <label htmlFor="contact" style={{ fontSize: "16px" }}>Contact Number</label>

                          </div>
                          <br />

                          <select className="form-select mb-4 text-grey" aria-label="Disabled select example" onChange={(e) => setCard(e.target.value)}>
                            <option selected style={{ fontSize: "16px" }}>Select a Card</option>


                            {cardsDatas.map(card => {
                              // eslint-disable-next-line react/jsx-key
                              return <option value={card.cardNumber}>{card.cardNumber}</option>
                            })}
                          </select>

                          <br />

                          <div className="form-floating mb-3">
                            <input className="form-control" id="amount" type="text" placeholder="Amount" value={(posts.type_of_service === 'With Driver') ? (parseInt(posts.cost_per_day) + 4000) * (parseInt(posts.no_of_days)) + "LKR" : (parseInt(posts.cost_per_day)) * (parseInt(posts.no_of_days)) + "LKR"} onChange={(e) => setCostPerDay(e.target.value)} />
                            <label htmlFor="amount" style={{ fontSize: "16px" }}>Amount</label>

                          </div>

                        </form>
                        <br />

                        <div className="text-center">

                          <Link to="/payment-view">
                            <button type="button" className="btn btn-primary" style={{ width: "400px" }} onClick={submitForm}>
                              Pay Now
                            </button>
                          </Link>


                        </div>


                        <div className="status"></div>
                      </div>



                    </div>

                  </section>

                </div></div>
              <br />
            </div>

            <div className="col-5 mt-5" style={{ marginLeft: "80px" }}>
              <BookingDetails />
            </div>
            <br />
          </div>
        </div>


      </div>
      <Footer />


    </div>

  )
}