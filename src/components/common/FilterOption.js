import React from 'react'
import { CiFilter } from "react-icons/ci";

const FilterOption = () => {
    return (

        <div className="filter h-100">
            <div className='flex items-center justify-between text-white border-b border-b-[#FFFFFF3D] pb-3 px-[20px]'>
                <p className='mb-0 text-lg'>Filters</p>
                <CiFilter className='text-[22px]' />
            </div>
            <div>
                <div className="accordion border-b border-b-[#FFFFFF3D]" id="accordionExample">
                    <div className="accordion-item border-0 bg-transparent">
                        <h2 className="accordion-header">
                            <button className="accordion-button shadow-none  text-white font-[300] border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Listing type
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show visible" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="form-check text-[#FFFFFF99] font-[400] mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Buy now
                                    </label>
                                </div>
                                <div className="form-check text-[#FFFFFF99] font-[400]">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Auction
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion border-b border-b-[#FFFFFF3D]" id="accordionExampletwo">
                    <div className="accordion-item border-0 bg-transparent">
                        <h2 className="accordion-header">
                            <button className="accordion-button shadow-none  text-white font-[300] border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                Price
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse show visible" data-bs-parent="#accordionExampletwo">
                            <div className="accordion-body">
                                <input className="form-control mb-3" type="text" placeholder="Max price" aria-label=".form-control-lg example" />
                                <input className="form-control" type="text" placeholder="Min price" aria-label=".form-control-lg example" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordionExamplethree">
                    <div className="accordion-item border-0 bg-transparent">
                        <h2 className="accordion-header">
                            <button className="accordion-button shadow-none  text-white font-[300] border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                                Listing type
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse show visible" data-bs-parent="#accordionExamplethree">
                            <div className="accordion-body">
                                <div className="form-check text-[#FFFFFF99] font-[400] mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Art
                                    </label>
                                </div>
                                <div className="form-check text-[#FFFFFF99] font-[400] mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Gaming
                                    </label>
                                </div>
                                <div className="form-check text-[#FFFFFF99] font-[400] mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Memberships
                                    </label>
                                </div>
                                <div className="form-check text-[#FFFFFF99] font-[400] mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        PFPs
                                    </label>
                                </div>
                                <div className="form-check text-[#FFFFFF99] font-[400] mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Photography
                                    </label>
                                </div>
                                <div className="form-check text-[#FFFFFF99] font-[400]">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Music
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterOption