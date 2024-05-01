import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { FiShare2 } from "react-icons/fi";
import { HiOutlineSquare2Stack, HiOutlineBell } from "react-icons/hi2";


const ExploreItem = () => {
    return (
        <div className='explore_detail py-[50px] relative'>
            <div className="container">
                <div className="shadows absolute d-md-block d-none left-[0px] bottom-[-500px] rotate-[-77.84 deg] opacity-[0.64] -z-10">
                    <img src="/assets/images/home/shadow2.png" alt="shadow2" />
                </div>
                <div className="shadows absolute d-md-block d-none right-[0px] bottom-[-600px] rotate-[-48.95 deg] opacity-[0.64] -z-10">
                    <img src="/assets/images/home/shadow3.png" alt="shadow3" />
                </div>
                <div className="row gy-4">
                    <div className="col-lg-4">
                        <img src="/assets/images/home/explore6.png" className='mx-auto' alt="explore6" />
                        <div className="accordion mt-4" id="accordionExample">
                            <div className="accordion-item border-0 bg-transparent">
                                <h2 className="accordion-header">
                                    <button className="accordion-button shadow-none  text-white font-[300] border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Properties
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show visible" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <div className='text-center py-3 theme_border' style={{ background: "linear-gradient(86.55deg, rgba(171, 89, 255, 0.07) 0%, rgba(133, 143, 255, 0.07) 57.35%, rgba(77, 154, 255, 0.07) 100.99%" }}>
                                                    <span className='theme_text'>ARTIST</span>
                                                    <p className='text-white mb-0'>DESTABILIZED</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className='text-center py-3 theme_border' style={{ background: "linear-gradient(86.55deg, rgba(171, 89, 255, 0.07) 0%, rgba(133, 143, 255, 0.07) 57.35%, rgba(77, 154, 255, 0.07) 100.99%" }}>
                                                    <span className='theme_text'>VOLUME</span>
                                                    <p className='text-white mb-0'>1</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className='text-center py-3 theme_border' style={{ background: "linear-gradient(86.55deg, rgba(171, 89, 255, 0.07) 0%, rgba(133, 143, 255, 0.07) 57.35%, rgba(77, 154, 255, 0.07) 100.99%" }}>
                                                    <span className='theme_text'>COLLECTION</span>
                                                    <p className='text-white mb-0'>SYNTHTOPIA</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className='text-center py-3 theme_border' style={{ background: "linear-gradient(86.55deg, rgba(171, 89, 255, 0.07) 0%, rgba(133, 143, 255, 0.07) 57.35%, rgba(77, 154, 255, 0.07) 100.99%" }}>
                                                    <span className='theme_text'>MOVEMENT</span>
                                                    <p className='text-white mb-0'>DESTABILIZED</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className='flex items-center justify-between pb-3 border-b border-b-[#FFFFFF1A]'>
                                <p className='mb-0 text-lg'>View Cronos POS Chain details</p>
                                <img src="/assets/images/home/share.png" alt="share" />
                            </div>
                            <div className='flex items-center justify-between pt-3'>
                                <p className='mb-0 text-lg'>View Cronoscan details</p>
                                <img src="/assets/images/home/share.png" alt="share" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 ps-lg-4">
                        <div className='flex mb-3 justify-between'>
                            <div>
                                <h1>SYNTHTOPIA #7782</h1>
                                <h3 className='mb-0 text-[#4D9AFF]'>$500</h3>
                            </div>
                            <HiOutlineBell className='text-2xl sm:self-start self-end' />
                        </div>
                        <p className='text-[#9E9DA6]'>Enter SYNTHTOPIA: where the journey starts with your choice of an Avatar, an Artifact, or a Cinematic Moment. Each unique collectible gives you a lifetime pass to the movement, letting you influence the story and enjoy lifetime perks like airdrops, real-life & multi-metaverse experiences, and connection with a vibrant community of innovators.</p>
                        <div className='flex items-center mt-4'>
                            <div className='flex items-center creater border-r border-r-[#FFFFFF80] pe-4'>
                                <img src="/assets/images/collection/collection1.jpg" className='w-[50px] rounded-[5px]' alt="collection1" />
                                <div className='ms-3'>
                                    <span className='text-[#FFFFFF99] text-sm'>Creator</span>
                                    <p className='mb-0'>Emilia Clarke</p>
                                </div>
                            </div>
                            <div className='flex items-center creater ps-4'>
                                <img src="/assets/images/collection/collection1.jpg" className='w-[50px] rounded-[5px]' alt="collection1" />
                                <div className='ms-3'>
                                    <span className='text-[#FFFFFF99] text-sm'>Collection</span>
                                    <p className='mb-0'>Shades of Space</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap items-center  justify-between mt-5'>
                            <ul className='flex items-center'>
                                <li className='flex items-center me-sm-4 me-2'><FaRegHeart className='me-2 text-[22px]' /> 150</li>
                                <li className='flex items-center me-sm-4 me-2'><LuEye className='me-2 text-[22px]' /> 6K</li>
                                <li className='flex items-center'><FiShare2 className='me-2 text-[22px]' /> Share</li>
                            </ul>
                            <div className='flex items-center mt-sm-0 mt-2'>
                                <span className='text-[#9E9DA6] me-2'>Chain:</span>
                                <span className='flex items-center'><img src="/assets/images/create/image 7.png" alt="image 7" className='me-2' />ETH</span>
                            </div>
                        </div>
                        <div className='row items-center mt-5'>
                            <div className="col-md-3 col-6">
                                <a href="#" className='theme_btn w-100 block py-2 text-center'>Buy now</a>
                            </div>
                            <div className="col-md-3 col-6">
                                <a href="#" className='theme_text w-100 block py-2 text-center theme_border'>Add to cart</a>
                            </div>
                            <div className="col-md-3 text-center text-md-start mt-md-0 mt-3">
                                <a href="#" className='border-b border-b-[#4D9AFF] text-[#4D9AFF]'>Make an offer</a>
                            </div>
                        </div>
                        <div className='drops mt-5'>
                            <ul className="nav nav-pills flex-nowrap whitespace-nowrap overflow-x-auto mb-5 border-b border-[#FFFFFF1A]" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-Ownership-tab" data-bs-toggle="pill" data-bs-target="#pills-Ownership" type="button" role="tab" aria-controls="pills-Ownership" aria-selected="true">Ownership</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-History-tab" data-bs-toggle="pill" data-bs-target="#pills-History" type="button" role="tab" aria-controls="pills-History" aria-selected="false">History</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-offer-tab" data-bs-toggle="pill" data-bs-target="#pills-offer" type="button" role="tab" aria-controls="pills-offer" aria-selected="false">Offers</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-Ownership" role="tabpanel" aria-labelledby="pills-Ownership-tab" tabindex="0">
                                    <div className="flex items-center justify-between">
                                        <div className='flex items-center'>
                                            <img src="/assets/images/collection/collection5.jpg" className='w-[50px] rounded-[5px]' alt="collection5" />
                                            <div className='ms-3'>
                                                <span className='text-[#FFFFFF99] text-sm'>Owner</span>
                                                <p className='mb-0'>Olivia Megan</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <span>cro1zk7wr6hsek...</span>
                                            <HiOutlineSquare2Stack className='text-2xl text-[#4D9AFF] ms-1' />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-History" role="tabpanel" aria-labelledby="pills-History-tab" tabindex="0">
                                    <div className="flex items-center justify-between border-b border-b-[#FFFFFF1A] pb-3">
                                        <div className='flex items-center'>
                                            <img src="/assets/images/collection/collection5.jpg" className='w-[50px] rounded-[5px]' alt="collection5" />
                                            <div className='ms-3'>
                                                <span className='text-[#FFFFFF99] text-sm'>5 days ago</span>
                                                <p className='mb-0'>Bought by Olivia Megan</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center self-end'>
                                            <span>Price: $360</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-3 border-b border-b-[#FFFFFF1A] pb-3">
                                        <div className='flex items-center'>
                                            <img src="/assets/images/collection/collection5.jpg" className='w-[50px] rounded-[5px]' alt="collection5" />
                                            <div className='ms-3'>
                                                <span className='text-[#FFFFFF99] text-sm'>6 days ago</span>
                                                <p className='mb-0'>Bought by Adele Jeniffer</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center self-end'>
                                            <span>Price: $250</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-offer" role="tabpanel" aria-labelledby="pills-offer-tab" tabindex="0">
                                    <div className='flex items-center border-b border-b-[#FFFFFF1A] pb-3'>
                                        <img src="/assets/images/collection/collection5.jpg" className='w-[50px] rounded-[5px]' alt="collection5" />
                                        <div className='ms-3'>
                                            <span className='text-[#FFFFFF99] text-sm'>4 days ago</span>
                                            <p className='mb-0'>AsSeenOn offer of <span className='text-[#FE5959]'>$115</span> rejected</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center border-b border-b-[#FFFFFF1A] pb-3 pt-3'>
                                        <img src="/assets/images/collection/collection5.jpg" className='w-[50px] rounded-[5px]' alt="collection5" />
                                        <div className='ms-3'>
                                            <span className='text-[#FFFFFF99] text-sm'>5 days ago</span>
                                            <p className='mb-0'>AsSeenOn made an offer of <span className='text-[#4D9AFF]'>$55</span></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center border-b border-b-[#FFFFFF1A] pb-3 pt-3'>
                                        <img src="/assets/images/collection/collection5.jpg" className='w-[50px] rounded-[5px]' alt="collection5" />
                                        <div className='ms-3'>
                                            <span className='text-[#FFFFFF99] text-sm'>5 days ago</span>
                                            <p className='mb-0'>Slowmotion made an offer of <span className='text-[#FE5959]'>$55</span></p>
                                        </div>
                                    </div>
                                    <div className='flex items-center border-b border-b-[#FFFFFF1A] pb-3 pt-3'>
                                        <img src="/assets/images/collection/collection5.jpg" className='w-[50px] rounded-[5px]' alt="collection5" />
                                        <div className='ms-3'>
                                            <span className='text-[#FFFFFF99] text-sm'>6 days ago</span>
                                            <p className='mb-0'>Slowmotion made an offer of <span className='text-[#4D9AFF]'>$55</span></p>
                                        </div>
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

export default ExploreItem