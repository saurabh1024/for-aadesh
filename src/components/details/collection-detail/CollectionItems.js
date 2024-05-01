import React from 'react'
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import Explore from '../../home/Explore'
import ExploreDetail from '../../common/ExploreDetail';
import MyCollections from '../../common/MyCollections';

const CollectionItems = () => {
    return (
        <div className='collection_detail'>
            <picture>
                <source media="(min-width: 767px)" srcset="/assets/images/collection/collection6.png" />
                <img src="/assets/images/collection/collection6_1.png" className='w-100' alt="collection6" />
            </picture>
            <div className="collection_profile">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-5 col-6">
                            <img src="/assets/images/collection/collection5.jpg" className='rounded-[5px] sm:mt-[-100px] mt-[-50px]' alt="collection5" />
                        </div>
                        <div className="col-lg-9 col-12">
                            <div className="inner_text mt-4">
                                <div className='flex justify-between'>
                                    <div>
                                        <p className='mb-2 text-lg flex items-center text-white'>Emilia Clarke <img src="/assets/images/home/verify.png" alt="verify" className='ms-2' /></p>
                                        <span className='theme_text'>@emali97_clk</span>
                                    </div>
                                    <div className='flex'>
                                        <a href="#" className='text-white me-3 text-xl'><FaXTwitter /></a>
                                        <a href="#" className='text-white me-3 text-xl'><FaTelegram /></a>
                                        <a href="#" className='text-white text-xl'><FaDiscord /></a>
                                    </div>
                                </div>
                                <p className='mt-4 sm:text-base text-sm font-[300] text-[#9E9DA6]'>Comprises visionary artists, entrepreneurs, and creatives joining forces to forge a dynamic movement that fuses art, culture, and community.Such as Netflix, Xbox, Crypto.com | NFT, World of Web3, Blockchain Economy, CoinMarketCap, IGN, and many others.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='drops py-[50px] relative'>
                <div className="container">
                    <div className="shadows absolute d-md-block d-none left-[-60px] top-[100px] rotate-[-77.84 deg] opacity-[0.64] -z-10">
                        <img src="/assets/images/home/shadow2.png" alt="shadow2" />
                    </div>
                    <div className="shadows absolute d-md-block d-none right-[0px] top-[100px] rotate-[-48.95 deg] opacity-[0.64] -z-10">
                        <img src="/assets/images/home/shadow3.png" alt="shadow3" />
                    </div>
                    <ul className="nav nav-pills flex-nowrap whitespace-nowrap overflow-x-auto mb-5 border-b border-[#FFFFFF1A]" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-Collected-tab" data-bs-toggle="pill" data-bs-target="#pills-Collected" type="button" role="tab" aria-controls="pills-Collected" aria-selected="true">Collected</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-Created-tab" data-bs-toggle="pill" data-bs-target="#pills-Created" type="button" role="tab" aria-controls="pills-Created" aria-selected="false">Created</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-Liked-tab" data-bs-toggle="pill" data-bs-target="#pills-Liked" type="button" role="tab" aria-controls="pills-Liked" aria-selected="false">Liked</button>
                        </li>
                    </ul>
                    <div className="tab-content explore" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-Collected" role="tabpanel" aria-labelledby="pills-Collected-tab" tabindex="0">
                            <ExploreDetail modalId="modal2" />
                        </div>
                        <div className="tab-pane fade" id="pills-Created" role="tabpanel" aria-labelledby="pills-Created-tab" tabindex="0">
                            <p>Collections</p>
                            <div className='mb-5'>
                                <MyCollections />
                            </div>
                            <ExploreDetail modalId="modal3" />
                        </div>
                        <div className="tab-pane fade" id="pills-Liked" role="tabpanel" aria-labelledby="pills-Liked-tab" tabindex="0">
                            <ExploreDetail modalId="modal4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionItems