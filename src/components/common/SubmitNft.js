import React from 'react'

const SubmitNft = () => {
    return (
        <div>
            {/* <!-- Buy item Modal --> */}
            <div className="modal fade backdrop-blur-lg buy_item" id="SubmitNft" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog mt-5">
                    <div className="modal-content sm:p-4">
                        <div className="modal-header">
                            <div className='text-end'>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <h1 className="modal-title text-center mt-3" id="exampleModalLabel">Submit your NFT to join</h1>
                        </div>
                        <div className="modal-body">
                            <p className='font-[300] text-center text-[#9E9DA6]'>Please note that once you join, you will not be able to withdraw your NFT until the staking is complete.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-target="#Congratulations" data-bs-toggle="modal" className="btn theme_btn w-100 border-0 py-3">Submit your NFT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade backdrop-blur-lg buy_item" id="Congratulations" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog mt-5">
                    <div className="modal-content sm:p-4">
                        <div className="modal-header">
                            <div className='text-end'>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <h1 className="modal-title text-center mt-3" id="exampleModalLabel">Congratulations!</h1>
                        </div>
                        <div className="modal-body">
                            <img src="/assets/images/offer/c1.png" className='mx-auto mb-3' alt="Congratulations" />
                            <p className='font-[300] text-center text-[#9E9DA6]'>You have joined the staking. You can check your status under My Rewards.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn theme_btn w-100 border-0 py-3">Done</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmitNft