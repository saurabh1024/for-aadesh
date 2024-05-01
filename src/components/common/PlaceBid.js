import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const PlaceBid = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            {/* <!-- Buy item Modal --> */}
            <div className="modal fade backdrop-blur-lg buy_item" id="placebid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog mt-5">
                    <div className="modal-content sm:p-4">
                        <div className="modal-header">
                            <div className='text-end'>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <h1 className="modal-title text-center mt-3 fs-5" id="exampleModalLabel">Place a bid</h1>
                        </div>
                        <div className="modal-body">
                            <div className='flex items-center justify-between sm:text-base text-sm font-[300] pb-4'>
                                <div className='flex items-center'>
                                    <img src="/assets/images/home/banner1.png" className='sm:w-[70px] w-[64px] rounded-md' alt="banner1" />
                                    <div className='sm:ms-3 ms-2'>
                                        <p className='mb-1'>SYNTHTOPIA</p>
                                        <span>Shades of Space</span>
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <p className='mb-1'>Best offer</p>
                                    <span className='text-[#4D9AFF]'>0.048 ETH</span>
                                </div>
                            </div>
                            <div className='pb-4'>
                                <p>Your bid</p>
                                <div className='relative'>
                                    <input type="text" placeholder='0.058' className='form-control' />
                                    <div className='flex items-center absolute top-4 right-4'>
                                        <img src="/assets/images/create/image 7.png" alt="image 7" className='me-2' />
                                        <span className='text-[#FFFFFF80] font-[300]'>ETH</span>
                                    </div>
                                </div>
                            </div>
                            <div className='pb-4'>
                                <p>Duration</p>
                                <div>
                                    <DatePicker
                                        showIcon
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        className='form-control ps-5'
                                    />
                                </div>
                            </div>
                            <div className='flex justify-between font-[300] text-[#FFFFFF80]'>
                                <span>Your balance</span>
                                <div className='text-end'>
                                    <p className='mb-1'>1.56 ETH</p>
                                </div>
                            </div>
                            <div className='flex justify-between font-[300] text-[#FFFFFF80] py-2 border-b border-b-[#FFFFFF1A]'>
                                <span>Service fee</span>
                                <div className='text-end'>
                                    <p className='mb-1'>0.001 ETH</p>
                                </div>
                            </div>
                            <div className='flex justify-between font-[300] pt-4'>
                                <span>Total bid amount</span>
                                <div className='text-end'>
                                    <p className='mb-1'>1.57 ETH</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn theme_btn w-100 border-0 py-3">Place a bid</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceBid