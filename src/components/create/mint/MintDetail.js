import React, { useRef } from 'react'
import { GoPlus } from "react-icons/go";

const MintDetail = () => {
    const inputRef = useRef(null)
    const onButtonClick = () => {
        inputRef.current.click();
    };
    return (
        <div className='mint_detail py-[50px] relative'>
            <div className="container">

                <div className="shadows absolute d-md-block d-none left-[-60px] bottom-[-300px] rotate-[-77.84 deg] opacity-[0.64] -z-10">
                    <img src="/assets/images/home/shadow2.png" alt="shadow2" />
                </div>
                <div className="shadows absolute d-md-block d-none right-[0px] bottom-[-500px] rotate-[-48.95 deg] opacity-[0.64] -z-10">
                    <img src="/assets/images/home/shadow3.png" alt="shadow3" />
                </div>

                <h3 className='mb-3'>Create</h3>
                <div className='flex items-center justify-between pb-3 border-b mb-5 border-b-[#FFFFFF1A]'>
                    <p className='mb-0'>Mint NFT</p>
                    <a href="#" className='flex items-center text-[#4D9AFF] sm:text-base text-sm'><GoPlus className='text-lg me-1' />Create a new collection</a>
                </div>
                <div className="mint_form">
                    <div className="row gy-4">
                        <div className="col-lg-4">
                            <div className="image_upload">
                                <form id="form-file-upload">
                                    <label id="label-file-upload" htmlFor="input-file-upload">
                                        <input ref={inputRef} type="file" id="input-file-upload" multiple={true} />
                                        <div className='font-[300]'>
                                            <img src="/assets/images/create/upload.png" className='mx-auto mb-3' alt="upload" />
                                            <p>Drag and drop your file</p>
                                            <p>or choose a file</p>
                                            <button className="upload-button mb-5" onClick={onButtonClick}>Browse file</button>
                                            <div className='text-[#FFFFFF99]'>
                                                <span className='block'>PNG, GIF, WEBP, MP4 or MP3</span>
                                                <span className='text-sm'>Max 100mb</span>
                                            </div>
                                        </div>
                                    </label>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form className='ps-lg-5 fill_form'>
                                <div className='mb-[30px]'>
                                    <label htmlFor="title" class="form-label">NFT Title</label>
                                    <input type="text" className='form-control' placeholder='Ex. Shades of Space' />
                                </div>
                                <div class="mb-[30px]">
                                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                    <textarea class="form-control" placeholder='Write description here' id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className='mb-[30px]'>
                                    <label htmlFor="title" class="form-label">Supply</label>
                                    <input type="text" className='form-control' placeholder='Ex. 100,000' />
                                </div>
                                <div className='mb-[30px]'>
                                    <label htmlFor="title" class="form-label">External Links</label>
                                    <input type="text" className='form-control' placeholder='https://shadeofspace.com' />
                                </div>
                                <div className='mb-[30px]'>
                                    <a href="#" className='flex items-center text-[#4D9AFF]'><GoPlus className='text-lg me-1' />Add a Trait</a>
                                    <p className='text-[#FFFFFF80] font-[300] mt-3 sm:text-base text-sm'>traits define the attributes of your item. They serve as filters on your collection page and are also detailed within each item's page.</p>
                                </div>
                                <div>
                                    <a href="#" className='theme_btn w-100 text-center py-3'>Create</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintDetail