'use client'
import React, { useState } from 'react'

const CartModal = ({cart}) => {
    const [showInput, setShowInput] = useState(false);

    const handleCheckboxChange = () => {
        setShowInput(!showInput);
    };

    return (
        <div>
            {/* <!-- Buy item Modal --> */}
            <div className="modal fade backdrop-blur-lg buy_item" id={cart} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog mt-5">
                    <div className="modal-content sm:p-4">
                        <div className="modal-header">
                            <div className='text-end'>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <h1 className="modal-title text-center mt-3 fs-5" id="exampleModalLabel">Your cart</h1>
                        </div>
                        <div className="modal-body">
                            <div className='flex items-center justify-between'>
                                <p className='font-[300]'><span>2</span> items</p>
                                <p className='text-[#FE5959]'>Clear All</p>
                            </div>
                            <div className='flex items-center justify-between sm:text-base text-sm font-[300] border-b border-b-[#FFFFFF1A] pb-4'>
                                <div className='flex items-center'>
                                    <img src="/assets/images/home/banner1.png" className='sm:w-[70px] w-[64px] rounded-md' alt="banner1" />
                                    <div className='sm:ms-3 ms-2'>
                                        <p className='mb-1'>SYNTHTOPIA</p>
                                        <span>Shades of Space</span>
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <p className='mb-1'>Price</p>
                                    <span className='text-[#4D9AFF]'>0.048 ETH</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between sm:text-base text-sm font-[300] border-b border-b-[#FFFFFF1A] pb-4 pt-4'>
                                <div className='flex items-center'>
                                    <img src="/assets/images/home/banner1.png" className='sm:w-[70px] w-[64px] rounded-md' alt="banner1" />
                                    <div className='sm:ms-3 ms-2'>
                                        <p className='mb-1'>SYNTHTOPIA</p>
                                        <span>Shades of Space</span>
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <p className='mb-1'>Price</p>
                                    <span className='text-[#4D9AFF]'>0.048 ETH</span>
                                </div>
                            </div>
                            <div className='flex justify-between font-[300] pt-4'>
                                <span>Total price</span>
                                <div className='text-end'>
                                    <p className='mb-1'>1.57 ETH</p>
                                    <span className='text-[#86858F]'>$564</span>
                                </div>
                            </div>
                            <div className='pt-4'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" onChange={handleCheckboxChange} id="defaultCheck1" />
                                    <label className="form-check-label ms-3" for="defaultCheck1">
                                        <p className='font-[300] mb-0'>Send to a different wallet</p>
                                    </label>
                                </div>
                                <div className='mt-[20px]'>
                                    {showInput && (
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder='Enter the wallet address'
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn theme_btn w-100 border-0 py-3">Complete purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartModal