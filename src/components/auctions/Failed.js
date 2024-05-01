import React from 'react'

const auctions_card = [
    {
        id: 1,
        image: '/assets/images/home/banner1.png',
        title: 'Shades of Space',
        name: 'By David_Millan',
    },
    {
        id: 2,
        image: '/assets/images/home/explore1.png',
        title: 'Dream Scape',
        name: 'By David_Millan',
    },
    {
        id: 3,
        image: '/assets/images/home/explore2.png',
        title: 'Ether & Era',
        name: 'By David_Millan',
    },
]

const Failed = () => {
    return (
        <div className="row gy-4 faileds">
            {
                auctions_card.map((res) => {
                    return (
                        <>
                            <div className="col-12 failed" key={res.id}>
                                <div className="md:flex border-b pb-4 border-[#FFFFFF1A] failed_card">
                                    <div className='relative'>
                                        <img src={res.image} className='md:w-[274px] w-full md:h-[176px] h-[250px] object-cover object-top' alt={res.title} />
                                    </div>
                                    <div className="auction_info md:ps-4">
                                        <div className='pb-4'>
                                            <p className='mb-0 flex items-center'>{res.title}</p>
                                            <span className='theme_text text-sm'>{res.name}</span>
                                        </div>
                                        <div className='text-sm font-[300]'>
                                            <p className='mb-0 text-[#A1A0AA] pb-2'>Your bid : <span className='text-white'>$250.50</span></p>
                                            <p className='mb-0 text-[#A1A0AA] pb-4'>Final price : <span className='text-[#38B923]'>$450.50</span></p>
                                            <p className='mb-0 text-[#A1A0AA]'>Auction end time : <span className='text-white'><span>25/02/24</span> at <span>15:25</span></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Failed