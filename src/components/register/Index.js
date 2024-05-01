import React from 'react'
import { HiOutlineUser } from "react-icons/hi2";
import { SlLock } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";

const Index = () => {
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
                                            <div className="logo"><a href="/"><img src="/assets/images/footer_logo.png" alt="" /></a></div>
                                            <h1 className='sm:text-2xl text-xl my-5'>Log In to Floyx Marketplace</h1>
                                            <form className='fill_form'>
                                                <div className='mb-[30px]'>
                                                    <label htmlFor="title" class="form-label">Name <span className='text-[#FF5757]'>*</span></label>
                                                    <div className='relative'>
                                                        <input type="text" className='form-control ps-5' placeholder='Ex. Dustin Max' />
                                                        <HiOutlineUser className='absolute top-3 left-4 text-2xl text-[#FFFFFF4D]' />
                                                    </div>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <label htmlFor="title" class="form-label">Username <span className='text-[#FF5757]'>*</span></label>
                                                    <div className='relative'>
                                                        <input type="text" className='form-control ps-5' placeholder='Ex. Dusti_96' />
                                                        <HiOutlineUser className='absolute top-3 left-4 text-2xl text-[#FFFFFF4D]' />
                                                    </div>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <label htmlFor="email" class="form-label">Email address <span className='text-[#FF5757]'>*</span></label>
                                                    <div className='relative'>
                                                        <input type="email" className='form-control ps-5' placeholder='Ex. name@gmail.com' />
                                                        <MdOutlineEmail className='absolute top-3 left-4 text-2xl text-[#FFFFFF4D]' />
                                                    </div>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <label htmlFor="password" class="form-label">Password (at least 6 characters)<span className='text-[#FF5757]'>*</span></label>
                                                    <div className='relative'>
                                                        <input type="password" className='form-control ps-5' placeholder='************' />
                                                        <SlLock className='absolute top-3 left-4 text-2xl text-[#FFFFFF4D]' />
                                                    </div>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <label htmlFor="password" class="form-label">Confirm password<span className='text-[#FF5757]'>*</span></label>
                                                    <div className='relative'>
                                                        <input type="password" className='form-control ps-5' placeholder='************' />
                                                        <SlLock className='absolute top-3 left-4 text-2xl text-[#FFFFFF4D]' />
                                                    </div>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                        <label class="form-check-label ms-3" for="defaultCheck1">
                                                            <p className='font-[300] mb-0'>By clicking “Sign up” you agree to Floyx’s <a href="#" className='text-[#5798FF]'>Terms of Service, Privacy Policy</a> and <a href="#" className='text-[#5798FF]'>Cookie Policy.</a></p>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className='mb-[30px]'>
                                                    <a type='button' className='theme_btn w-100 text-center py-3'>Sign Up</a>
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