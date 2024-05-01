import React, { useRef } from 'react'
import { GoPlus } from "react-icons/go";

const DropToken = () => {
    const inputRef = useRef(null)
    const onButtonClick = () => {
        inputRef.current.click();
    };
    return (
        <div className='drop_token py-[50px] relative'>
            <div className="container">
                <div className="shadows absolute d-md-block d-none left-[-60px] bottom-[-300px] rotate-[-77.84 deg] opacity-[0.64] -z-10">
                    <img src="/assets/images/home/shadow2.png" alt="shadow2" />
                </div>
                <div className="shadows absolute d-md-block d-none right-[0px] bottom-[-500px] rotate-[-48.95 deg] opacity-[0.64] -z-10">
                    <img src="/assets/images/home/shadow3.png" alt="shadow3" />
                </div>

                <h3 className='mb-3'>Create</h3>
                <p className='mb-5'>You’ll need to deploy an ERC-721 contract onto the blockchain before you can create a drop.</p>
                <div className="mint_form">
                    <div className="row gy-4">
                        <div className="col-lg-4 pe-lg-5">
                            <p>Upload Logo</p>
                            <div className="image_upload">
                                <form id="form-file-upload">
                                    <label id="label-file-upload" htmlFor="input-file-upload">
                                        <input ref={inputRef} type="file" id="input-file-upload" multiple={true} />
                                        <div className='font-[300]'>
                                            <img src="/assets/images/create/upload.png" className='mx-auto mb-3' alt="upload" />
                                            <p>Drag and drop your file</p>
                                            <div className='text-[#FFFFFF99]'>
                                                <span className='block'>PNG, GIF, WEBP, MP4 or MP3</span>
                                                <span className='text-sm'>Max 100mb</span>
                                            </div>
                                        </div>
                                    </label>
                                </form>
                            </div>
                            <p className='mt-3'>or choose a file</p>
                            <button className="upload-button mb-5 w-100" onClick={onButtonClick}>Browse file</button>
                        </div>
                        <div className="col-lg-8">
                            <form className='ps-lg-5 fill_form lg:border-l border-l-[#FFFFFF1A]'>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className='mb-[30px]'>
                                            <label htmlFor="title" className="form-label">Contract Name</label>
                                            <input type="text" className='form-control' placeholder='Ex. Shades of Space' />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='mb-[30px]'>
                                            <label htmlFor="title" className="form-label">Token symbol</label>
                                            <input type="text" className='form-control' placeholder='Ex. BTC' />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className='mb-[30px]'>
                                            <label htmlFor="title" className="form-label">Blockchain</label>
                                            <div className="row g-2 row-cols-lg-5 row-cols-md-3 row-cols-2">
                                                <div className="col">
                                                    <input type="radio" className="btn-check" name="options-base" id="option5" autocomplete="off" />
                                                    <label className="btn blockchain w-100" for="option5"><img src="/assets/images/create/image 6.png" alt="Bitcoin" /><span>Bitcoin</span></label>
                                                </div>
                                                <div className="col">
                                                    <input type="radio" className="btn-check" name="options-base" id="option6" autocomplete="off" />
                                                    <label className="btn blockchain w-100" for="option6"><img src="/assets/images/create/image 7.png" alt="Ethereum" /><span>Ethereum</span></label>
                                                </div>
                                                <div className="col">
                                                    <input type="radio" className="btn-check" name="options-base" id="option7" autocomplete="off" />
                                                    <label className="btn blockchain w-100" for="option7"><img src="/assets/images/create/image 8.png" alt="Cardano" /><span>Cardano</span></label>
                                                </div>
                                                <div className="col">
                                                    <input type="radio" className="btn-check" name="options-base" id="option8" autocomplete="off" />
                                                    <label className="btn blockchain w-100" for="option8"><img src="/assets/images/create/image 9.png" alt="Solona" /><span>Solona</span></label>
                                                </div>
                                                <div className="col">
                                                    <input type="radio" className="btn-check" name="options-base" id="option9" autocomplete="off" />
                                                    <label className="btn blockchain w-100" for="option9"><img src="/assets/images/create/image 10.png" alt="Binance" /><span>Binance</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className='mb-[30px]'>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label class="form-check-label ms-3" for="defaultCheck1">
                                                    <p className='font-[300]'>Proxy contract</p>
                                                    <span className='font-[300] text-[#A1A0AA] text-sm'>Recommended for most creators. This contract type is cost-effective but requires wallets minting, transferring, and selling items from the collection to pay extra gas fees.Contract deployment cost estimate: $63.72.</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='mb-[30px]'>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                                <label class="form-check-label ms-3" for="defaultCheck2">
                                                    <p className='font-[300]'>Proxy contract</p>
                                                    <span className='font-[300] text-[#A1A0AA] text-sm'>Recommended for advanced creators. This contract type is pricier to deploy but entails lower gas fees for minting, transfers, and sales. Estimated contract deployment cost: $796.56.</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
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

export default DropToken