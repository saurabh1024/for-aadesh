import React from 'react'
import { HiViewGrid } from "react-icons/hi";
import SubmitNft from '../../common/SubmitNft';

const NftStaking = () => {
    return (
        <div className='nft_staking'>
            <div className="row gy-5">
                <div className="col-lg-4 col-md-6">
                    <div className="staking_card">
                        <div className='staking_img'><img src="/assets/images/offer/small_logo.png" alt="small_logo" /></div>
                        <p className='text-center'>30 Days Staking</p>
                        <p className='text-center text-[#FFFFFF99] text-sm'>Earn rewards and support the network with our 30 day staking pool.</p>
                        <div className='flex items-center justify-between bg-[#14112D] rounded p-3 mb-3'>
                            <div className='flex items-center'><HiViewGrid className='text-lg me-2' />Tokens</div>
                            <span className='theme_text font-semibold'>10M</span>
                        </div>
                        <div className='flex items-center justify-between bg-[#14112D] rounded p-3'>
                            <div className='flex items-center'><HiViewGrid className='text-lg me-2' />Participants</div>
                            <span className='theme_text font-semibold'>150K</span>
                        </div>
                        <p className='text-center mt-4'>Join at time: <span className='text-[#4D9AFF]'>6d : 12h : 34m</span></p>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#SubmitNft" className='theme_btn w-100 text-center py-3'>Join now</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="staking_card">
                        <div className='staking_img'><img src="/assets/images/offer/small_logo.png" alt="small_logo" /></div>
                        <p className='text-center'>30 Days Staking</p>
                        <p className='text-center text-[#FFFFFF99] text-sm'>Earn rewards and support the network with our 30 day staking pool.</p>
                        <div className='flex items-center justify-between bg-[#14112D] rounded p-3 mb-3'>
                            <div className='flex items-center'><HiViewGrid className='text-lg me-2' />Tokens</div>
                            <span className='theme_text font-semibold'>10M</span>
                        </div>
                        <div className='flex items-center justify-between bg-[#14112D] rounded p-3'>
                            <div className='flex items-center'><HiViewGrid className='text-lg me-2' />Participants</div>
                            <span className='theme_text font-semibold'>150K</span>
                        </div>
                        <p className='text-center mt-4'>Join at time: <span className='text-[#4D9AFF]'>6d : 12h : 34m</span></p>
                        <a href="#"  data-bs-toggle="modal" data-bs-target="#SubmitNft" className='theme_btn w-100 text-center py-3'>Join now</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="staking_card border-0 relative">
                        <div className='staking_img relative z-[1]'><img src="/assets/images/offer/small_logo.png" alt="small_logo" /></div>
                        <p className='text-center'>30 Days Staking</p>
                        <p className='text-center text-[#FFFFFF99] text-sm'>Earn rewards and support the network with our 30 day staking pool.</p>
                        <div className='flex items-center justify-between bg-[#14112D] rounded p-3 mb-3'>
                            <div className='flex items-center'><HiViewGrid className='text-lg me-2' />Tokens</div>
                            <span className='theme_text font-semibold'>10M</span>
                        </div>
                        <div className='flex items-center justify-between bg-[#14112D] rounded p-3'>
                            <div className='flex items-center'><HiViewGrid className='text-lg me-2' />Participants</div>
                            <span className='theme_text font-semibold'>150K</span>
                        </div>
                        <p className='text-center mt-4'>Join at time: <span className='text-[#4D9AFF]'>6d : 12h : 34m</span></p>
                        <a href="#"  data-bs-toggle="modal" data-bs-target="#SubmitNft" className='theme_btn w-100 text-center py-3'>Join now</a>
                        <div className="layer w-full h-full bg-[#0000004D] absolute top-0 left-0 backdrop-blur-sm flex items-center justify-center text-2xl">Coming soon</div>
                    </div>
                </div>
            </div>
            <SubmitNft/>
        </div>
    )
}

export default NftStaking