import React, { useState } from 'react';
import {
    Formik,

    Form,

} from 'formik';
import { TextField } from '../components/TextField';
import * as Yup from 'yup';
import axios from 'axios';
import swal from 'sweetalert';

export const Signup = () => {
    const validate = Yup.object({
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    })

    const [checkboxStatus, setCheckboxStatus] = useState(Array(3).fill(false));

    function buttonHandler(index: any) {
        let status = [...checkboxStatus];
        status[index] = !status[index]
        setCheckboxStatus(status)
    }
    return (
        <Formik<any>
            initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={(values: any) => {
                console.log(values)
                axios.post('http://localhost:5000/api/UserAuth/register', values).then(function (response) {
                    console.log(response);
                    swal({ text: "Successfully Added", icon: "success" })
                })
                

            }}
        >
            {(formik: any) => (
                <div className='container'>
                    <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                    <Form>
                        <TextField label="First Name" name="name" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="password" name="password" type="password" />
                        <TextField label="Confirm Password" name="confirmPassword" type="password" />
                        <br/>
                        <div className="form-check d-flex justify-content-center mb-5">
                                                    {Array(1).fill(0).map((_, index) => <input className="form me-2" type="checkbox" checked={checkboxStatus[index]} onChange={() => buttonHandler(index)} />)}
                                                    <label className="form-check-label reg-label" htmlFor="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                    {/* <button type="submit" className="btn btn-primary btn-lg" disabled={checkboxStatus.filter(status => status === true).length != 1}>Register</button> */}
                                                    {/* {Array(1).fill(0).map((_, index) => <input type="checkbox" checked={checkboxStatus[index]} onChange={() => buttonHandler(index)} />)} */}
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg reg-btn1" disabled={checkboxStatus.filter(status => status === true).length != 1}>Register</button>
                                                <button className="btn btn-danger btn-lg reg-btn2" type="reset">Reset</button>
                                                </div>    
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <label className='reg-label'>Already have an account..?</label>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <a className='login-link' href="/login">Login</a>
                                                </div>                   
                    </Form>
                </div>
            )}
        </Formik>
    )
}