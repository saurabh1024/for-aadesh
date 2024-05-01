import React from 'react'
import { HiOutlineUser } from "react-icons/hi2";
import { SlLock } from "react-icons/sl";

const Index = () => {
    return (
        <div className='login_page'>
            <div className="container-fluid px-0">
                <div className="row g-0 min-h-screen">
                    <div className="col-md-6 order-md-1 order-2">
                        <div className="left_side h-100 p-7 p-md-0">
                            <div className="container-fluid h-100 py-5">
                                <div className="row justify-center items-center h-100">
                                    <div className="col-xl-7 col-lg-9 col-md-10">
                                        <div className="form_design mint_form">
                                            <div className="logo"><a href="/"><img src="/assets/images/footer_logo.png" alt="" /></a></div>
                                            <h1 className='sm:text-2xl text-xl my-5'>Log In to Floyx Marketplace</h1>
                                            <form className='fill_form'>
                                                <div className='mb-[30px]'>
                                                    <label htmlFor="title" class="form-label">Username or email</label>
                                                    <div className='relative'>
                                                        <input type="text" className='form-control ps-5' placeholder='Ex. Dustin Max' />
                                                        <HiOutlineUser className='absolute top-3 left-4 text-2xl text-[#FFFFFF4D]' />
                                                    </div>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <label htmlFor="password" class="form-label flex justify-between">Password <a href="#" className='text-[#5798FF] sm:text-base text-sm text-right'>Forgotten your password?</a></label>
                                                    <div className='relative'>
                                                        <input type="password" className='form-control ps-5' placeholder='************' />
                                                        <SlLock className='absolute top-3 left-4 text-2xl text-[#FFFFFF4D]' />
                                                    </div>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <p>Don’t have an account? <a href="/signup" className='text-[#5798FF]'>Sign up</a></p>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <a type='button' className='theme_btn w-100 text-center py-3'>Login</a>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                        <label class="form-check-label ms-3" for="defaultCheck1">
                                                            <p className='font-[300] mb-0'>Remember me</p>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>By signing up, you agree to <a href="#" className='text-[#5798FF]'>Terms of Service</a> and <a href="#" className='text-[#5798FF]'>Privacy Policy</a> , including <a href="#" className='text-[#5798FF]'>Cookie Use</a></p>
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