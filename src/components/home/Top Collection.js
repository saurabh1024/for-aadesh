import React from 'react'

const collection_card = [
    {
        id: 1,
        image: '/assets/images/home/collection3.png',
        title: 'Shades of Space',
        price: '$80',
    },
    {
        id: 2,
        image: '/assets/images/home/collection2.png',
        title: 'Dream Scape',
        price: '$80'
    },
    {
        id: 3,
        image: '/assets/images/home/collection1.png',
        title: 'Ether & Era',
        price: '$80'
    }
]

const TopCollection = () => {
    return (
        <div className='top_collection py-[50px]'>
            <div className="container">
                <h3 className='mb-5'>Top Collection</h3>
                <div className="collection_cards">
                    <div className="row gy-4 justify-content-center">
                        {
                            collection_card.map((res) => {
                                return (
                                    <>
                                        <div className="col-lg-4 col-md-6" key={res.id}>
                                            <a href="/collection-detail">
                                                <div className="cards">
                                                    <img src={res.image} className='w-100' alt={res.title} />
                                                    <div className="card_layer">
                                                        <div>
                                                            <p className='mb-2 text-lg flex items-center text-white'>{res.title} <img src="/assets/images/home/verify.png" alt="verify" className='ms-2' /></p>
                                                            <p className='mb-0 text-[#FFFFFF99] font-[300]'>Price <span>{res.price}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCollection