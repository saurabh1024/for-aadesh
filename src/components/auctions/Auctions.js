import React from 'react'
import NftsCard from './NftsCard'
import ParticipatCard from './ParticipatCard'
import Failed from './Failed'


const Auctions = () => {
    return (
        <div className='drops py-[50px] relative'>
            <div className="container">
                <h3 className='mb-3'>Auctions</h3>
                <ul className="nav nav-pills flex-nowrap whitespace-nowrap overflow-x-auto mb-5 border-b border-[#FFFFFF1A]" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-nfts-tab" data-bs-toggle="pill" data-bs-target="#pills-nfts" type="button" role="tab" aria-controls="pills-nfts" aria-selected="true">My NFTs</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-Participating-tab" data-bs-toggle="pill" data-bs-target="#pills-Participating" type="button" role="tab" aria-controls="pills-Participating" aria-selected="false">Participating</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-failed-tab" data-bs-toggle="pill" data-bs-target="#pills-failed" type="button" role="tab" aria-controls="pills-failed" aria-selected="false">Failed to Buy</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-nfts" role="tabpanel" aria-labelledby="pills-nfts-tab" tabindex="0">
                        <div className="img_shadow absolute d-md-block d-none top-[30px] blur-lg right-[100px] -z-10">
                            <img src="/assets/images/home/shadow1.png" alt="shadow1" />
                        </div>
                        <div className="collection_cards">
                            <NftsCard />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-Participating" role="tabpanel" aria-labelledby="pills-Participating-tab" tabindex="0">
                        <div className="img_shadow absolute d-md-block d-none top-[30px] blur-lg right-[100px] -z-10">
                            <img src="/assets/images/home/shadow1.png" alt="shadow1" />
                        </div>
                        <div className="collection_cards">
                            <ParticipatCard />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-failed" role="tabpanel" aria-labelledby="pills-failed-tab" tabindex="0">
                        <div className="shadows absolute d-md-block d-none left-[-60px] bottom-[-400px] rotate-[-77.84 deg] opacity-[0.64] -z-10">
                            <img src="/assets/images/home/shadow2.png" alt="shadow2" />
                        </div>
                        <div className="shadows absolute d-md-block d-none right-[0px] bottom-[-600px] rotate-[-48.95 deg] opacity-[0.64] -z-10">
                            <img src="/assets/images/home/shadow3.png" alt="shadow3" />
                        </div>
                        <div className="collection_cards">
                            <Failed />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auctions