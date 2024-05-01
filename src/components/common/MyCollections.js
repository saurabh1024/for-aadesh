import React from 'react'
import { TbSettings } from "react-icons/tb";
import CollectionSlide from './CollectionSlide';


const collection_card = [
    {
        id: 1,
        img1: '/assets/images/collection/collection1.jpg',
        title: 'Shades of Space',
        item: 25,
        img2: '/assets/images/collection/collection2.jpg',
        img3: '/assets/images/collection/collection3.jpg',
        img4: '/assets/images/collection/collection4.jpg',
        img5: '/assets/images/collection/collection5.jpg',
    },
    {
        id: 2,
        img1: '/assets/images/collection/collection1.jpg',
        title: 'Shades of Space',
        item: 25,
        img2: '/assets/images/collection/collection2.jpg',
        img3: '/assets/images/collection/collection3.jpg',
        img4: '/assets/images/collection/collection4.jpg',
        img5: '/assets/images/collection/collection5.jpg',
    },
    {
        id: 3,
        img1: '/assets/images/collection/collection1.jpg',
        title: 'Shades of Space',
        item: 25,
        img2: '/assets/images/collection/collection2.jpg',
        img3: '/assets/images/collection/collection3.jpg',
        img4: '/assets/images/collection/collection4.jpg',
        img5: '/assets/images/collection/collection5.jpg',
    }
]

const MyCollections = () => {
    return (
        <div>
            <div className="collection">
                <div className="row gy-4">
                    {
                        collection_card.map((res, index) => {
                            return (
                                <>
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="collection-card">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className='flex items-center'>
                                                    <div className='cursor-pointer' data-bs-toggle="modal" data-bs-target="#CollectionItem">
                                                        <img src={res.img1} className='w-[52px] rounded-[5px]' alt="colllection1" />
                                                    </div>
                                                    <div className='ms-3'>
                                                        <p className='mb-0'>{res.title}</p>
                                                        <span className='text-[#FFFFFF99] text-sm'>{res.item} Items</span>
                                                    </div>
                                                </div>
                                                <a href="/account-setting"><TbSettings className='text-[#FFFFFF99] text-2xl' /></a>
                                            </div>
                                            <div className="row g-2">
                                                <div className="col-6">
                                                    <img src={res.img2} className='w-full h-full rounded-[5px] object-cover' alt="colllection2" />
                                                </div>
                                                <div className="col-6">
                                                    <div className="row g-2">
                                                        <div className="col-6">
                                                            <img src={res.img3} className='rounded-[5px]' alt="colllection3" />
                                                        </div>
                                                        <div className="col-6">
                                                            <img src={res.img4} className='rounded-[5px]' alt="colllection4" />
                                                        </div>
                                                        <div className="col-12">
                                                            <img src={res.img5} className='rounded-[5px]' alt="colllection5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <CollectionSlide />
        </div>
    )
}

export default MyCollections