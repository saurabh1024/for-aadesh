import React, { useRef } from 'react'
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";

const Account = () => {

    const inputRef = useRef(null)
    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <div className='account py-[50px]'>
            <div className="container">

                <div className="shadows absolute d-md-block d-none left-[-60px] bottom-[-500px] rotate-[-77.84 deg] opacity-[0.64] -z-10">
                    <img src="/assets/images/home/shadow2.png" alt="shadow2" />
                </div>
                <div className="shadows absolute d-md-block d-none right-[0px] bottom-[-700px] rotate-[-48.95 deg] opacity-[0.64] -z-10">
                    <img src="/assets/images/home/shadow3.png" alt="shadow3" />
                </div>

                <h3 className='mb-5 border-b pb-3 border-[#FFFFFF1A]'>Account Settings</h3>

                <div className="mint_form">
                    <div className="row gy-4">
                        <div className="col-lg-3">
                            <div className='account_photo'>
                                <img src="/assets/images/collection/collection5.jpg" className='rounded-[5px]' alt="collection5" />
                            </div>
                            <button className="upload-button py-3 w-100 text-center mt-5">Upload new photo</button>
                            <button className="upload-button py-3 w-100 text-center mt-3">Delete photo</button>
                        </div>
                        <div className="col-lg-9">
                            <form className='ps-lg-5 fill_form'>
                                <div className="image_upload mb-[30px]">
                                    <form id="form-file-upload">
                                        <label id="label-file-upload" htmlFor="input-file-upload">
                                            <input ref={inputRef} type="file" id="input-file-upload" multiple={true} />
                                            <div className='font-[300]'>
                                                <button className="upload-button flex items-center py-3" onClick={onButtonClick}><img src="/assets/images/create/upload.png" className='me-2' alt="upload" />Upload cover</button>
                                            </div>
                                        </label>
                                    </form>
                                </div>
                                <div className="row gy-4">
                                    <div className="col-lg-6">
                                        <div className='mb-[30px]'>
                                            <label htmlFor="title" class="form-label">Name</label>
                                            <input type="text" className='form-control' placeholder='Ex. Emilia Clarke' />
                                        </div>
                                        <div className='mb-[30px]'>
                                            <label htmlFor="email" class="form-label">Email</label>
                                            <input type="email" className='form-control' placeholder='Ex. emilia@gmail.com' />
                                        </div>
                                        <div class="mb-[30px]">
                                            <label for="exampleFormControlTextarea1" class="form-label">Bio</label>
                                            <textarea class="form-control" placeholder='Tell about yourself...' id="exampleFormControlTextarea1" rows="5"></textarea>
                                        </div>
                                        <div className='mb-[30px]'>
                                            <label htmlFor="title" class="form-label">Links</label>
                                            <input type="text" className='form-control' placeholder='Ex. emilia.clarke.com' />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='mb-[30px]'>
                                            <label htmlFor="title" class="form-label">Connect Twitter</label>
                                            <div className='relative'>
                                                <input type="text" className='form-control ps-5' placeholder='Twitter username' />
                                                <FaXTwitter className='absolute top-4 left-4 text-lg' />
                                                <a href="#" className='absolute right-4 top-4 text-[#4D9AFF]'>Connect</a>
                                            </div>
                                        </div>
                                        <div className='mb-[30px]'>
                                            <label htmlFor="title" class="form-label">Connect Telegram</label>
                                            <div className='relative'>
                                                <input type="text" className='form-control ps-5' placeholder='Telegram username' />
                                                <FaTelegram className='absolute top-4 left-4 text-lg' />
                                                <a href="#" className='absolute right-4 top-4 text-[#4D9AFF]'>Connect</a>
                                            </div>
                                        </div>
                                        <div className='mb-[30px]'>
                                            <label htmlFor="title" class="form-label">Connect Discord</label>
                                            <div className='relative'>
                                                <input type="text" className='form-control ps-5' placeholder='Discord username' />
                                                <FaDiscord className='absolute top-4 left-4 text-lg' />
                                                <a href="#" className='absolute right-4 top-4 text-[#4D9AFF]'>Connect</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <a href="#" className='theme_btn text-center py-3 px-4'>Update profile</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account