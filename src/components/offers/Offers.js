import React from 'react'
import BuyItem from '../common/BuyItem'
import { MdOutlineLocalOffer } from "react-icons/md";

const offer_card = [
    {
        id: 1,
        image: '/assets/images/home/banner1.png',
        title: 'Shades of Space',
        price: '$80',
        offer: '$72',
        off: '10%'
    },
    {
        id: 2,
        image: '/assets/images/home/explore1.png',
        title: 'Dream Scape',
        price: '$80',
        offer: '$72',
        off: '10%'
    },
    {
        id: 3,
        image: '/assets/images/home/explore2.png',
        title: 'Ether & Era',
        price: '$80',
        offer: '$72',
        off: '10%'
    },
    {
        id: 4,
        image: '/assets/images/home/explore3.png',
        title: 'Shades of Space',
        price: '$80',
        offer: '$72',
        off: '10%'
    },
    {
        id: 5,
        image: '/assets/images/home/explore4.png',
        title: 'Dream Scape',
        price: '$80',
        offer: '$72',
        off: '10%'
    },
    {
        id: 6,
        image: '/assets/images/home/explore5.png',
        title: 'Ether & Era',
        price: '$80',
        offer: '$72',
        off: '10%'
    },
    {
        id: 7,
        image: '/assets/images/home/explore1.png',
        title: 'Ether & Era',
        price: '$80',
        offer: '$72',
        off: '10%'
    },
    {
        id: 8,
        image: '/assets/images/home/explore2.png',
        title: 'Ether & Era',
        price: '$80',
        offer: '$72',
        off: '10%'
    }
]


const Offers = () => {
    return (
        <div className='offers py-[50px] relative'>
            <div className="container">
                <div className="shadows absolute d-md-block d-none left-[-60px] bottom-[-300px] rotate-[-77.84 deg] opacity-[0.64] -z-10">
                    <img src="/assets/images/home/shadow2.png" alt="shadow2" />
                </div>
                <div className="shadows absolute d-md-block d-none right-[0px] bottom-[-500px] rotate-[-48.95 deg] opacity-[0.64] -z-10">
                    <img src="/assets/images/home/shadow3.png" alt="shadow3" />
                </div>
                <div className="img_shadow absolute d-md-block d-none lg:top-[-80px] top-0 blur-lg right-[100px] -z-10">
                    <img src="/assets/images/home/shadow1.png" alt="shadow1" />
                </div>
                <h3 className='mb-3 border-b pb-3 border-[#FFFFFF1A]'>Offers</h3>

                <div className="cards mt-5">
                    <div className="row gy-4">
                        {
                            offer_card.map((res) => {
                                return (
                                    <>
                                        <div className="col-lg-3 col-md-6" key={res.id}>
                                            <div className="card text-white relative z-10">
                                                <div className='relative'>
                                                    <img src={res.image} alt={res.title} className='w-100' />
                                                    <div className="offer absolute top-3 backdrop-blur-sm right-3 flex items-center bg-[#0D0B20B2] px-[16px] py-[10px] rounded-md">
                                                        <MdOutlineLocalOffer className='me-2 text-xl' /><span> {res.off} off</span>
                                                    </div>
                                                </div>
                                                <div className="card-body bg-[#0D0B20]">
                                                    <p className="card-title">{res.title}</p>
                                                    <div className='flex justify-between'>
                                                        <div>
                                                            <p className="card-text font-[300] text-sm text-[#FFFFFF99] mb-0"><del>Price <span>{res.price}</span></del></p>
                                                            <p className="card-text font-[300] text-sm text-[#38B923]">Offer Price <span>{res.offer}</span></p>
                                                        </div>
                                                        <a href="#" className="theme_btn px-[20px] py-2 self-end" data-bs-toggle="modal" data-bs-target="#buyItem">Buy</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <BuyItem />
                </div>
            </div>
        </div>
    )
}

export default Offers