import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";


const CollectionSlide = () => {

    const options = {
        loop: true,
        dots: false,
        items: 1,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
    }


    return (

        <div>
            {/* <!-- Buy item Modal --> */}
            <div className="modal fade backdrop-blur-lg buy_item" id="CollectionItem" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog mt-5">
                    <div className="modal-content sm:p-4">
                        <div className="modal-header">
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <div className='cursor-pointer' data-bs-toggle="modal" data-bs-target="#CollectionItem">
                                        <img src='/assets/images/collection/collection1.jpg' className='w-[52px] rounded-[5px]' alt="colllection1" />
                                    </div>
                                    <div className='ms-3'>
                                        <p className='mb-0'>Shades of Space</p>
                                        <span className='text-[#FFFFFF99] text-sm'>25 Items</span>
                                    </div>
                                </div>
                                <div className='text-end self-end'>
                                    <button type="button" className='text-[#FE5959]' data-bs-dismiss="modal" aria-label="Close">Remove</button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body collection_slider">
                            <OwlCarousel className='owl-theme owl-carousel' {...options}>
                                <div class='item'>
                                    <img src="/assets/images/collection/collection5.jpg" alt="collection_slide" className='h-[300px] object-cover' />
                                </div>
                                <div class='item'>
                                    <img src="/assets/images/collection/collection5.jpg" alt="collection_slide" className='h-[300px] object-cover' />
                                </div>
                                <div class='item'>
                                    <img src="/assets/images/collection/collection5.jpg" alt="collection_slide" className='h-[300px] object-cover' />
                                </div>
                                <div class='item'>
                                    <img src="/assets/images/collection/collection5.jpg" alt="collection_slide" className='h-[300px] object-cover' />
                                </div>
                                <div class='item'>
                                    <img src="/assets/images/collection/collection5.jpg" alt="collection_slide" className='h-[300px] object-cover' />
                                </div>
                            </OwlCarousel>
                            <div className='mt-3'>
                                <form>
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="" className='font-[300] mb-2'>Royalty</label>
                                            <div className='relative'>
                                                <input type="number" name="" id="" className='form_control' placeholder="Ex. 25" />
                                                <span className='text-[#4D9AFF] absolute top-3 right-10'>%</span>
                                                <div className='absolute right-4 top-2 cursor-pointer'>
                                                    <TiArrowSortedUp />
                                                    <TiArrowSortedDown />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="" className='font-[300] mb-2'>Price</label>
                                            <div className='relative'>
                                                <input type="number" name="" id="" className='form_control' placeholder="250.00" />
                                                <div className='absolute right-4 top-2 cursor-pointer'>
                                                    <TiArrowSortedUp />
                                                    <TiArrowSortedDown />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn theme_btn w-100 border-0 py-3">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionSlide