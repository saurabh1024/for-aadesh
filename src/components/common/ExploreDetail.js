'use client'
import React, { useState } from 'react'
import { RiSearchLine } from "react-icons/ri";
import { TbArrowsSort } from "react-icons/tb";
import BuyItem from '../common/BuyItem';
import FilterOption from './FilterOption';
import { CiFilter } from "react-icons/ci";

const data = [
    {
        id: 1,
        image: '/assets/images/home/banner1.png',
        title: 'Shades of Space',
        price: '$80'
    },
    {
        id: 2,
        image: '/assets/images/home/explore1.png',
        title: 'Shades of Space',
        price: '$80'
    },
    {
        id: 3,
        image: '/assets/images/home/explore2.png',
        title: 'Shades of Space',
        price: '$80'
    },
    {
        id: 4,
        image: '/assets/images/home/explore3.png',
        title: 'Shades of Space',
        price: '$80'
    },
    {
        id: 5,
        image: '/assets/images/home/explore4.png',
        title: 'Shades of Space',
        price: '$80'
    },
    {
        id: 6,
        image: '/assets/images/home/explore5.png',
        title: 'Shades of Space',
        price: '$80'
    },
]

const ExploreDetail = ({ modalId }) => {

    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("Choose one");

    return (
        <div className="row">
            <div className="col-lg-3 d-lg-block d-none">
                <FilterOption />
            </div>
            <div className="col-lg-9">
                <div className="search_card mb-4">
                    <div className="row gy-4 gx-2">
                        <div className="col-lg-9">
                            <div className='search'>
                                <form className='relative'>
                                    <input type="text" placeholder='Search' />
                                    <RiSearchLine className='search_icon' />
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 d-lg-none d-block">
                            <div className="dropdown">
                                <button className="dropdown-toggle dropdown-btn w-100 justify-between flex items-center xl:px-[22px] px-3 py-[10px]" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className='flex items-center'><CiFilter className='text-[22px]' /> Filters</span>
                                </button>
                                <ul className="dropdown-menu py-0 overflow-hidden mt-2">
                                    <FilterOption />
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="dropdown">
                                <div onClick={(e) => { setIsActive(!isActive); }} className="dropdown-btn">
                                    <span className='flex items-center'><TbArrowsSort className='me-1' /> Sort by:</span> <span className='text-[#4D9AFF]'>{selected}</span>
                                    <span className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"} />
                                </div>
                                <div className="dropdown-menu mt-2" style={{ display: isActive ? "block" : "none" }}>
                                    <div onClick={(e) => { setIsSelected(e.target.textContent); setIsActive(!isActive); }} className="dropdown-item"> Most Relevant </div>
                                    <div className="dropdown-item" onClick={(e) => { setIsSelected(e.target.textContent); setIsActive(!isActive); }}>Recently Listed</div>
                                    <div className="dropdown-item" onClick={(e) => { setIsSelected(e.target.textContent); setIsActive(!isActive); }}>Newest</div>
                                    <div className="dropdown-item" onClick={(e) => { setIsSelected(e.target.textContent); setIsActive(!isActive); }}>Price: Low to High</div>
                                    <div className="dropdown-item" onClick={(e) => { setIsSelected(e.target.textContent); setIsActive(!isActive); }}>Price: High to Low</div>
                                    <div className="dropdown-item" onClick={(e) => { setIsSelected(e.target.textContent); setIsActive(!isActive); }}>Most Likes</div>
                                    <div className="dropdown-item" onClick={(e) => { setIsSelected(e.target.textContent); setIsActive(!isActive); }}>Most Views</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="row gy-4">
                        {
                            data.map((res, index) => {
                                return (
                                    <>
                                        <div className="col-lg-4 col-md-6" key={index}>
                                            <div className="card text-white relative z-10">
                                                <a href="/explore-detail">
                                                    <img src={res.image} alt={res.title} className='w-100' />
                                                </a>
                                                <div className="card-body bg-[#0D0B20] flex items-center justify-between">
                                                    <div>
                                                        <p className="card-title">{res.title}</p>
                                                        <p className="card-text font-[300] text-sm text-[#FFFFFF99]">Price <span>{res.price}</span></p>
                                                    </div>
                                                    <a href="#" className="theme_btn px-[30px] py-2" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>Buy</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <BuyItem Ids={modalId} />
                </div>
            </div>
        </div>
    )
}

export default ExploreDetail