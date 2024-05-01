import React from 'react'
import PlaceBid from '../common/PlaceBid'

const auctions_card = [
    {
        id: 1,
        image: '/assets/images/home/banner1.png',
        title: 'Shades of Space',
        time: '10d : 20h : 10m : 25s',
        name: 'By David_Millan',
        highbid: '$450.90',
        yourbid: '$250.50',
        btn: 'Place a bid'
    },
    {
        id: 2,
        image: '/assets/images/home/explore1.png',
        title: 'Dream Scape',
        time: '10d : 20h : 10m : 25s',
        name: 'By David_Millan',
        highbid: '$450.90',
        yourbid: '$250.50'
    },
    {
        id: 3,
        image: '/assets/images/home/explore2.png',
        title: 'Ether & Era',
        time: '10d : 20h : 10m : 25s',
        name: 'By David_Millan',
        highbid: '$450.90',
        yourbid: '$250.50'
    },
    {
        id: 4,
        image: '/assets/images/home/explore3.png',
        title: 'Shades of Space',
        time: '10d : 20h : 10m : 25s',
        name: 'By David_Millan',
        highbid: '$450.90',
        yourbid: '$250.50'
    },
]

const ParticipatCard = () => {
    return (
        <div className="row gy-4 justify-content-center">
            {
                auctions_card.map((res) => {
                    return (
                        <>
                            <div className="col-lg-3 col-md-6" key={res.id}>
                                <div className="cards bg-[#0D0B20]">
                                    <div className='relative'>
                                        <img src={res.image} className='w-100' alt={res.title} />
                                        <div className="card_layer flex justify-center w-100 z-[1]">
                                            <div>
                                                {
                                                    res.id == 1 ? <a type='button' data-bs-toggle="modal" data-bs-target="#placebid" className='theme_btn w-100 text-center py-2 mb-4'>{res.btn}</a> : ''
                                                }
                                                <p className='mb-0 text-[#FFFFFF99] bg-[#000000B2] py-2 px-4 rounded-md font-[300]'>{res.time}</p>
                                            </div>
                                        </div>
                                        {
                                            res.id == 1 ? <div className="layer w-100 h-100 bg-black/50 absolute top-0 left-0"></div> : ''
                                        }
                                    </div>
                                    <div className="auction_info p-3">
                                        <div className='flex items-center gap-3 border-b border-[#FFFFFF1A] pb-3'>
                                            <img src="/assets/images/offer/user.png" alt="user" />
                                            <div>
                                                <p className='mb-0 flex items-center'>{res.title}</p>
                                                <span className='theme_text text-sm'>{res.name}</span>
                                            </div>
                                        </div>
                                        <div className='text-[#4D9AFF] flex items-center justify-between text-sm pt-3'>
                                            <p className='mb-0'>your bid</p>
                                            <span>{res.yourbid}</span>
                                        </div>
                                        <div className='flex items-center justify-between text-sm pt-3'>
                                            <p className='mb-0'>Highest bid</p>
                                            <span>{res.highbid}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

            <PlaceBid />
        </div>
    )
}

export default ParticipatCard