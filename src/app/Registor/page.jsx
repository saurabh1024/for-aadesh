"use client"
import React, { useState } from 'react'
// import { HiOutlineUser } from "react-icons/hi2";
// import { SlLock } from "react-icons/sl";
// import { MdOutlineEmail } from "react-icons/md";
// import footer_logo from '@assets/images/footer_logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Index = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
        error: ''
    })
    const [termsChecked, setTermsChecked] = useState(false);
    const handleTermsChange = () => {
        setTermsChecked(!termsChecked);
    };

    const inputData = (e) => {
        const { name, value } = e.target
        setRegisterData({
            ...registerData,
            [name]: value,
            error: ''
        })
    }

    const registerUser = (e) => {
        e.preventDefault()

        if (!registerData.name || !registerData.username || !registerData.email || !registerData.password || !registerData.confirmpassword) {
            setRegisterData({ ...registerData, error: 'All fields are required *' })
            return;
        } else {
            setRegisterData({ ...registerData, error: '' })
        }

        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
        if (!passwordPattern.test(registerData.password)) {
            setRegisterData({ ...registerData, error: 'Password must contain at least 6 characters, including uppercase, lowercase, and numbers *' });
            return;
        } else {
            setRegisterData({ ...registerData, error: '' });
        }

        if (registerData.password !== registerData.confirmpassword) {
            setRegisterData({ ...registerData, error: 'Password not match *' })
            return;
        } else {
            setRegisterData({ ...registerData, error: '' })
        }

        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailPattern.test(registerData.email)) {
            setRegisterData({ ...registerData, error: 'Invalid email address *' });
            return;
        } else {
            setRegisterData({ ...registerData, error: '' });
        }

        if (!termsChecked) {
            setRegisterData({ ...registerData, error: 'Please accept the terms and conditions *' });
            return;
        } else {
            setRegisterData({ ...registerData, error: '' });
        }
    }


    return (
        <div className='login_page'>
            <div className="container-fluid px-0">
                <div className="row g-0 min-h-screen">
                    <div className="col-md-6 order-md-1 order-2">
                        <div className="left_side h-100 p-3 p-md-0">
                            <div className="container-fluid h-100 py-5">
                                <div className="row justify-center items-center h-100">
                                    <div className="col-xl-7 col-lg-9 col-md-10">
                                        <div className="form_design mint_form">
                                            <div className="logo"><Link href="/"><Image src="" alt="footer_logo" /></Link></div>
                                            <h1 className='sm:text-2xl text-xl my-5'>Log In to Floyx Marketplace</h1>
                                            <form className='fill_form'>
                                                <div className='mb-[30px]'>
                                                    <label htmlFor="title" className="form-label">Name <span className='text-[#FF5757]'>*</span></label>
                                                    <div className='relative'>
                                                        <input type="text" className='form-control ps-5' autoComplete='off' name='name' value={registerData.name} onChange={inputData} placeholder='Ex. Dustin Max' />
                                                        {/* <HiOutlineUser className='absolute top-3 left-4 text-2xl text-[#FFFFFF4D]' /> */}
                                                    </div>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <label htmlFor="title" className="form-label">Username <span className='text-[#FF5757]'>*</span></label>
                                                    <div className='relative'>
                                                        <input type="text" className='form-control ps-5' autoComplete='off' name='username' value={registerData.username} onChange={inputData} placeholder='Ex. Dusti_96' />
                                                        {/* <HiOutlineUser className='absolute top-3 left-4 text-2xl text-[#FFFFFF4D]' /> */}
                                                    </div>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <label htmlFor="email" className="form-label">Email address <span className='text-[#FF5757]'>*</span></label>
                                                    <div className='relative'>
                                                        <input type="email" className='form-control ps-5' autoComplete='off' name='email' value={registerData.email} onChange={inputData} placeholder='Ex. name@gmail.com' />
                                                        {/* <MdOutlineEmail className='absolute top-3 left-4 text-2xl text-[#FFFFFF4D]' /> */}
                                                    </div>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <label htmlFor="password" className="form-label">Password (at least 6 characters)<span className='text-[#FF5757]'>*</span></label>
                                                    <div className='relative'>
                                                        <input type="password" className='form-control ps-5' autoComplete='off' name='password' value={registerData.password} onChange={inputData} placeholder='************' />
                                                        {/* <SlLock className='absolute top-3 left-4 text-2xl text-[#FFFFFF4D]' /> */}
                                                    </div>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <label htmlFor="password" className="form-label">Confirm password<span className='text-[#FF5757]'>*</span></label>
                                                    <div className='relative'>
                                                        <input type="password" className='form-control ps-5' autoComplete='off' name='confirmpassword' value={registerData.confirmpassword} onChange={inputData} placeholder='************' />
                                                        {/* <SlLock className='absolute top-3 left-4 text-2xl text-[#FFFFFF4D]' /> */}
                                                    </div>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name='check' id="defaultCheck1" checked={termsChecked} onChange={handleTermsChange} />
                                                        <label className="form-check-label ms-3" for="defaultCheck1">
                                                            <p className='font-[300] mb-0'>By clicking “Sign up” you agree to Floyx’s <a href="#" className='text-[#5798FF]'>Terms of Service, Privacy Policy</a> and <a href="#" className='text-[#5798FF]'>Cookie Policy.</a></p>
                                                        </label>
                                                    </div>
                                                </div>
                                                {registerData.error && <div className="text-red-500 mb-3 text-sm">{registerData.error}</div>}
                                                <div className='mb-[30px]'>
                                                    <a type='button' className='theme_btn w-100 text-center py-3' onClick={registerUser}>Sign Up</a>
                                                </div>
                                                <div>
                                                    <p>Already have an account?<a href="/login" className='text-[#5798FF]'> Sign in</a></p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-2 order-1">
                        <div className="right_side">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index