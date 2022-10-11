import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Context } from "../context/Context";
import "../pages/styles.css"
// import jwt_decode from "jwt-decode";

export default function Login() {

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:5000/api/UserAuth/login", { 
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
           });
          localStorage.setItem('user', JSON.stringify(res.data.data.user))
          localStorage.setItem('access_token', res.data.data.access_token)
          window.location.href = "/";
        } catch (err) {
          console.log(err);
        }
      };

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    // const {user, dispatch, isFetching } = useContext(Context)

    // const handleSubmit = async (e:any) => {
    //     e.preventDefault();
    //     dispatch({type:"LOGIN_START"});
    //     // console.log(emailRef);
    //     console.log(passwordRef);
    //     try{
    //         const res = await axios.post("http://localhost:5000/api/UserAuth/login",{
    //             email: emailRef.current?.value,
    //             password: passwordRef.current?.value,
    //         })
    //         console.log(res);
    //         dispatch({type:"LOGIN_SUCCESS",payload:res.data});
            
    //     }catch(err){
    //         dispatch({type:"LOGIN_FAILURE"});
    //     }
    // };

    // console.log(user);

    return (
        <>
            {/* <!-- Section: Design Block --> */}
            <section className="background-radial-gradient overflow-hidden">
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                    <div className="row gx-lg-5 align-items-center mb-5">
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                                CAR RENTAL DEALS <br />
                                <span style={{ color: "hsl(218, 81%, 75%)" }}>IN SRI LANKA</span>
                            </h1>
                            <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                            Use the quick-and-easy booking form above in order to instantly compare all vehicles and offers and make your car rental resevation today!
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                            <div className="card bg-glass">
                                <div className="card-body px-4 py-5 px-md-5">
                                    <form onSubmit={handleSubmit}>
                                        {/* <form> */}
                                        <br/>
                                        <br/>

                                        {/* <!-- Email input --> */}
                                        <div className="form-outline mb-4" >
                                            <input type="email" id="form3Example3" className="form-control" ref={emailRef}/>
                                            <label className="form-label reg-label" htmlFor="form3Example3">Email address</label>
                                        </div>

                                        {/* <!-- Password input --> */}
                                        <div className="form-outline mb-4" >
                                            <input type="password" id="form3Example4" className="form-control" ref={passwordRef}/>
                                            <label className="form-label reg-label" htmlFor="form3Example4">Password</label>
                                        </div>

                                        <br/>
                                        <br/>
                                        <br/>

                                        {/* <!-- Submit button --> */}
                                        <button type="submit" className="btn btn-primary btn-block mb-4">
                                            Sign In
                                        </button>
                                        <br/>
                                        <br/>

                                        {/* <!-- Register buttons --> */}
                                        <div className="text-center">
                                            <p>or sign up with:</p>
                                            <a className="login-link" href="/sign-up">
                                                Sign up
                                            </a>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Section: Design Block --> */}
        </>
    )
}