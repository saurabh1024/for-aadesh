import React, { useRef } from 'react'
import { GoPlus } from "react-icons/go";

const UpgradeNftItem = () => {
    const inputRef = useRef(null)
    const onButtonClick = () => {
        inputRef.current.click();
    };
    return (
        <div className='upgrade_item py-[50px]'>
            <div className="container">
                <h3 className='mb-5 border-b pb-3 border-[#FFFFFF1A]'>Upgrade your NFT</h3>

                <p>Add your NFT and check how to increase level</p>

                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="image_upload">
                            <form id="form-file-upload">
                                <label id="label-file-upload" htmlFor="input-file-upload">
                                    <input ref={inputRef} type="file" id="input-file-upload" multiple={true} />
                                    <div className='font-[300]'>
                                        <button className="upload-button" onClick={onButtonClick}>Select</button>
                                    </div>
                                </label>
                            </form>
                        </div>
                        <a href="/floyx-nft/upgrade-nft/upgrade-detail" className='theme_btn w-100 mt-5 py-3 text-center'>Next</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpgradeNftItem