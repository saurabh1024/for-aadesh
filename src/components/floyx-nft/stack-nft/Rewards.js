import React from 'react'

const Rewards = () => {
    return (

        <div className="row gy-4">
            <div className="col-md-6">
                <div className="purchase_card bg-[#0D0B20] h-100 rounded overflow-hidden">
                    <div className="row g-0 h-100">
                        <div className="col-lg-6">
                            <img src='/assets/images/offer/gift.png' className='w-100 h-100 object-cover' alt="gift" />
                        </div>
                        <div className="col-lg-6">
                            <div className='purchase_info p-4'>
                                <div className='flex items-center mb-4'>
                                    <div className='w-10 h-10 bg-[#23203E] rounded-sm flex items-center justify-center'><img src="/assets/images/offer/Group.png" alt="Group" /></div>
                                    <div className='ps-3'>
                                        <p className='mb-0'>30 Days Staking</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='mb-0'>Your NFT Level:</p>
                                    <p className='theme_text mb-0'>Level 3</p>
                                </div>
                                <p className='font-[300] text-sm my-4 pb-4 text-[#FFFFFF99] border-b border-[#FFFFFF1A]'>your NFT level 3 will allow you to receive 150% more tokens from  the pool</p>
                                <p className='mb-4'>Reward: <span className='theme_text'>100,000 Tokens</span></p>
                                <div className='row'>
                                    <div className="col-6">
                                        <button href="" className='bg-[#4D9AFF] w-100 text-center p-[10px] rounded text-black'>Claim</button>
                                    </div>
                                    <div className="col-6">
                                        <button href="" className='bg-[#4D9AFF] w-100 text-center p-[10px] rounded text-black'>Unlock NFT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="purchase_card bg-[#0D0B20] h-100 rounded overflow-hidden">
                    <div className="row g-0 h-100">
                        <div className="col-lg-6">
                            <div className='relative h-100'>
                                <img src='/assets/images/offer/gift.png' className='w-100 h-100 object-cover' alt="gift" />
                                <div className="layer w-full h-full bg-[#000000B2] absolute top-0 left-0 flex items-center justify-center text-center">
                                    <div>
                                        <span className='text-[#FFFFFFBA] text-sm'>Remaining time</span>
                                        <p className='mb-0 mt-3'>12d : 30h : 15m : 10s</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='purchase_info p-4'>
                                <div className='flex items-center mb-4'>
                                    <div className='w-10 h-10 bg-[#23203E] rounded-sm flex items-center justify-center'><img src="/assets/images/offer/Group.png" alt="Group" /></div>
                                    <div className='ps-3'>
                                        <p className='mb-0'>60 Days Staking</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='mb-0'>Your NFT Level:</p>
                                    <p className='theme_text mb-0'>Level 3</p>
                                </div>
                                <p className='font-[300] text-sm my-4 pb-4 text-[#FFFFFF99] border-b border-[#FFFFFF1A]'>your NFT level 3 will allow you to receive 150% more tokens from  the pool</p>
                                <p className='mb-4'>Reward: <span className='theme_text'>100,000 Tokens</span></p>
                                <div className='row'>
                                    <div className="col-6">
                                        <button href="" disabled className='bg-[#E2E2E230] w-100 text-center p-[10px] rounded text-black'>Claim</button>
                                    </div>
                                    <div className="col-6">
                                        <button href="" disabled className='bg-[#E2E2E230] w-100 text-center p-[10px] rounded text-black'>Unlock NFT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rewards