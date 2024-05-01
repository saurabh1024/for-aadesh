import React from 'react'
import { FiPlus } from "react-icons/fi";
import { GrCircleInformation } from "react-icons/gr";

const UpgradeDetailsItem = () => {
    return (
        <div className='upgrade_detail py-[50px]'>
            <div className="container">
                <h3 className='mb-5 border-b pb-3 border-[#FFFFFF1A]'>Upgrade your NFT</h3>

                <p>Add the required NFT</p>
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <div className="row gy-4">
                            <div className="col-md-6">
                                <img src="/assets/images/offer/upgrade.png" className='theme_border w-100 h-100 object-cover' alt="upgrade" />
                            </div>
                            <div className="col-md-6">
                                <div className="row gy-4 upgrade_img">
                                    <div className="col-6">
                                        <img src="/assets/images/offer/upgrade1.png" className='w-100 h-100 object-cover rounded-[5px]' alt="upgrad1" />
                                    </div>
                                    <div className="col-6">
                                        <div className="upgrade_box"><FiPlus /></div>
                                    </div>
                                    <div className="col-6">
                                        <div className="upgrade_box"><FiPlus /></div>
                                    </div>
                                    <div className="col-6">
                                        <div className="upgrade_box"><FiPlus /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <a href="#" className='theme_btn w-100 text-center py-2'>Boost now</a>
                                </div>
                                <div className="col-lg-6">
                                    <span className='font-[300]'>Add <b>3 more</b> same level NFTs to increase to the level 4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="levels_card p-sm-4 p-2 bg-[#15112F] rounded-[10px]">
                            <h1 className='text-lg border-b pb-4 border-b-[#FFFFFF1A]'>Levels & Requirements</h1>
                            <p className='font-[300] pt-4'>Your Current Level</p>
                            <div className="flex justify-between items-center">
                                <span className='md:text-2xl sm:text-xl text-lg font-bold'>⚡ <span className='theme_text tracking-[2px]'>Level 3</span></span>
                                <p className='mb-0 md:text-base sm:text-sm text-xs font-[300]'>Add <b>3 more</b> same level NFTs</p>
                            </div>
                            <div id="progress-bar-container">
                                <div class="progress-bar-child progress"></div>
                            </div>
                            <div className="flex items-center justify-between mt-4 text-[#FBF7FF8F]">
                                <span>Level 3</span>
                                <span>Level 4</span>
                            </div>
                            <div className='flex items-center mt-4 text-[#4D9AFF] sm:text-base text-[13px] relative main_tooltip'>
                                <GrCircleInformation className='text-2xl me-2' />Check what you need to raise your NFT
                                <ul className='upgrade_tooltip'>
                                    <li>level 1 - add 10 booster cards</li>
                                    <li>level 2 - combine 2 x 1 lvl NFT cards</li>
                                    <li>level 3 - combine 3 x 2 lvl NFT cards</li>
                                    <li>level 4 - combine 4 x 3 lvl NFT cards</li>
                                    <li>level 5 - combine 5 x 4 lvl NFT cards</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpgradeDetailsItem