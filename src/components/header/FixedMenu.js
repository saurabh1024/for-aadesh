'use client'
import React, { useState, useEffect } from 'react'
import { MdOutlineLocalOffer, MdChevronRight } from "react-icons/md";
import { TbClock2, TbShieldHalf, TbSettings } from "react-icons/tb";
import { HiOutlineShoppingBag, HiOutlineSquare2Stack } from "react-icons/hi2";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

const menu = [
    {
        id: 1,
        icon: <MdOutlineLocalOffer />,
        tooltip: 'Offer',
        link: '/offers'
    },
    {
        id: 2,
        icon: <TbClock2 />,
        tooltip: 'Auctions',
        link: '/auctions'
    },
    {
        id: 3,
        icon: <HiOutlineShoppingBag />,
        tooltip: 'Purchase',
        link: '/purchase'
    },
    {
        id: 4,
        icon: <TbShieldHalf />,
        tooltip: 'Floyx NFT',
        link: '/floyx-nft'
    },
    {
        id: 5,
        icon: <HiOutlineSquare2Stack />,
        tooltip: 'My Collection',
        link: '/collection'
    },
    {
        id: 6,
        icon: <TbSettings />,
        tooltip: 'Account Setting',
        link: '/account-setting'
    }
]

const FixedMenu = () => {

    const [show, setShow] = useState(false)
    const [activeItem, setActiveItem] = useState(null);

    const showMenu = () => {
        setShow(!show)
    }

    useEffect(() => {
        // Load active item from localStorage when component mounts
        const storedActiveItem = localStorage.getItem('activeItem');
        if (storedActiveItem) {
            setActiveItem(parseInt(storedActiveItem));
        }
    }, []);

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
        localStorage.setItem('activeItem', itemId);
    };

    return (
        <div className='fixed_menu fixed left-0 top-[200px] z-50'>
            <div>
                <button id="toggleButton" onClick={showMenu} className={`w-5 z-10 rotate-${show ? '180' : '0'} h-5 bg-${show ? 'blue-500' : 'white'} rounded-full text-black flex items-center justify-center absolute top-1/2 translate-y-[-50%] right-[-10px]`}><MdChevronRight className={``} /></button>
                <ul id="menu" className={`backdrop-blur-md flex flex-col justify-around rounded-[0_5px_5px_0] w-${show ? '16' : '7'} h-[350px] text-center`}>
                    {
                        menu.map((res) => {
                            return (
                                <li key={res.id} className='py-3 px-2' data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Tooltip on right">
                                    <a href={res.link}
                                        onClick={() => handleItemClick(res.id)}
                                        data-tooltip-id="my-tooltip"
                                        data-tooltip-content={res.tooltip}
                                        data-tooltip-place="right" className={`text-2xl text-[#FFFFFF99] flex justify-center ${activeItem === res.id ? 'gradient-color' : ''}`}>{show && <>{res.icon}</>}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <Tooltip id="my-tooltip" />
        </div>

    )
}

export default FixedMenu
