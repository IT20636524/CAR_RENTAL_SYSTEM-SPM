import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext, useRef } from "react";
import swal from "sweetalert";

export default function Register() {

//     useEffect(()=>{
// if(package.ref != ConpassRef){
// coler
// }else{
//    MDBListGroup() 
// }
//     },[ConpassRef.current.value])
    const passwordRef = useRef<HTMLInputElement>(null);
    const conPasswordRef = useRef<HTMLInputElement>(null);
    

    // useEffect(()=>{
    //     var inputVal = document.getElementById("form3Example4c");
    //     if(passwordRef.current?.value != conPasswordRef.current?.value){
    //         inputVal.style.color = "red";
    //     }else{
    //         inputVal.style.color = "black";
    //     }
    // },[conPasswordRef.current?.value,passwordRef.current?.value])

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const userData ={
        name,
        email,
        password
    }

    const handleSubmit =(e:any)=>{
        e.preventDefault();
        if(name.length === 0 || email.length === 0 || password.length === 0){
            swal(" Fields Cannot empty !","Please enter all data !", "error");
        }else{
            console.log(userData);
            axios.post('http://localhost:5000/api/UserAuth/register',userData)
            .then(function(response) {
                console.log(response);
                setName('');
                setEmail('');
                setPassword('');
                swal({ text: "Successfully Added", icon: "success"})
            })
            .catch(function(error) {
                console.log(error);
                alert("Not added");
            });
        }
    }

    // const handleChange = (e:any) =>{
    //     if(e.target.checked === true) {
            
    //     }
    // }
    
    
    return (
        <div>
            <section className="vh-100" style={{backgroundColor: "#eee"}}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{borderRadius: "25px"}}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
                                                        <label className="form-label" htmlFor="form3Example1c" >Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} ref={passwordRef} />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4cd" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input
                                                        className="form-check-input me-2"
                                                        type="checkbox"
                                                        value=""
                                                        id="form2Example3c"
                                                        // onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" id="register" className="btn btn-primary btn-lg"  >Register</button>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <label>Already have an account..?</label>  
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <a href="/login">Login</a>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}