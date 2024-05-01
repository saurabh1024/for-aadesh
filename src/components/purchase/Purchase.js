import React, { useState } from 'react'
import PurchaseItem from '../common/PurchaseItem';

const purchase_card = [
    {
        id: 1,
        image: '/assets/images/offer/purchase1.png',
        title: 'Shades - Rare',
        user: 'By Floyx',
        des: `The card is level 0. It serves as a basic card whose level can be increased through the appropriate number of Boosters. The higher the level, the more benefits users receive both in staking and on the Floyx platform. For more on the level increase system, see Upgrade Floyx NFT`,
        price: '100',
        available: '120'
    },
    {
        id: 2,
        image: '/assets/images/offer/purchase2.png',
        title: 'Shades - Booster',
        user: 'By Floyx',
        des: 'The card is used to increase the levels of your. The higher the level, the more benefits users receive both in staking and onthe Floyx platform.For more on the level increase system, see Upgrade Floyx NFT Upgrade Floyx NFT',
        price: '10',
        available: '150'
    },
]

const Purchase = () => {

    const [quantities, setQuantities] = useState(Array(purchase_card.length).fill(0));

    const handleIncrement = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    const handleDecrement = (index) => {
        if (quantities[index] > 0) {
            const newQuantities = [...quantities];
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
        }
    };

    return (
        <div className='purchase py-[50px] relative'>
            <div className="container">
                <div className="img_shadow absolute d-md-block d-none lg:top-[-80px] top-0 blur-lg right-[100px] -z-10">
                    <img src="/assets/images/home/shadow1.png" alt="shadow1" />
                </div>
                <h3 className='mb-5 border-b pb-3 border-[#FFFFFF1A]'>Purchase Floyx NFTs</h3>
                <div className="row gy-4">
                    {
                        purchase_card.map((res, index) => {
                            return (
                                <>
                                    <div className="col-md-6" key={index}>
                                        <div className="purchase_card bg-[#0D0B20] h-100">
                                            <div className="row g-0 h-100">
                                                <div className="col-lg-6">
                                                    <img src={res.image} className='w-100 h-100 object-cover' alt={res.title} />
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className='purchase_info p-4'>
                                                        <div className='flex items-center'>
                                                            <div className='w-9 h-9 bg-[#23203E] rounded-sm flex items-center justify-center'><img src="/assets/images/offer/Group.png" alt="Group" /></div>
                                                            <div className='ps-3'>
                                                                <p className='mb-0'>{res.title}</p>
                                                                <span className='theme_text text-sm'>By Floyx</span>
                                                            </div>
                                                        </div>
                                                        <p className='font-[300] text-sm my-4 text-[#FFFFFF99]'>{res.des}</p>
                                                        <div className='flex items-center justify-between mb-4'>
                                                            <p className='mb-0'>Price ${res.price}</p>
                                                            <p className='mb-0 text-[#FFFFFF99] font-[300] text-sm'>Available: {res.available} pcs</p>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-6'>
                                                                <div className='border py-2 rounded-md flex border-[#FFFFFF1A] items-center'>
                                                                    <button className='flex-grow text-center' onClick={() => handleDecrement(index)}>-</button>
                                                                    <span className='flex-grow text-center'>{quantities[index]}</span>
                                                                    <button className='flex-grow text-cente' onClick={() => handleIncrement(index)}>+</button>
                                                                </div>
                                                            </div>
                                                            <div className='col-6'>
                                                                <a type='button' data-bs-toggle="modal" data-bs-target="#purchaseItem" className='theme_btn py-2 text-center w-100'>Buy</a>
                                                            </div>
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
            <PurchaseItem />
        </div>
    )
}

export default Purchase