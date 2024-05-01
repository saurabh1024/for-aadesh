import React from 'react'
import { FaChevronRight } from "react-icons/fa6";

const Creates = ({ create }) => {
    return (
        <div className='create'>
            {/* <!-- Modal --> */}
            <div className="modal backdrop-blur-lg fade" id={create} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog top-12 modal-lg">
                    <div className="modal-content">
                        <div className="modal-header p-0 relative overflow-hidden">
                            <img src="/assets/images/create/create_banner.png" className='w-100 lg:h-[100%] h-[185px] object-cover' alt="create_banner" />
                            <div className='flex items-center absolute left-7 bottom-5'>
                                <img src="/assets/images/offer/Group.png" alt="Group" className='w-[26px] me-3'/>
                                <h1 className='text-[32px] mb-0'>Create</h1>
                            </div>
                            <button type="button" className="btn-close absolute top-5 right-5 shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="create_info p-md-4">
                                <ul>
                                    <li className='border-b border-b-[#FFFFFF1F] pb-4'>
                                        <a href="/drop-token" className='flex items-center justify-between'>
                                            <div className='flex items-center text-left'>
                                                <div className="box_img">
                                                    <img src="/assets/images/create/Box.png" alt="Box" />
                                                </div>
                                                <div className="box_text ms-3">
                                                    <p className='mb-2 md:text-lg text-white'>DROP ERC721 token</p>
                                                    <span className='md:text-base text-sm text-[#FFFFFF99]'>Create a NFT collection which owns to the marketplace</span>
                                                </div>
                                            </div>
                                            <FaChevronRight className='text-2xl text-white' />
                                        </a>
                                    </li>
                                    <li className='pt-4'>
                                        <a href="/mint" className='flex items-center justify-between'>
                                            <div className='flex items-center text-left'>
                                                <div className="box_img">
                                                    <img src="/assets/images/create/Gallery.png" alt="Gallery" />
                                                </div>
                                                <div className="box_text ms-3">
                                                    <p className='mb-2 md:text-lg text-white'>Mint NFT</p>
                                                    <span className='md:text-base text-sm text-[#FFFFFF99]'>Create a collection and mint NFTs directly to your wallet</span>
                                                </div>
                                            </div>
                                            <FaChevronRight className='text-2xl text-white' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creates