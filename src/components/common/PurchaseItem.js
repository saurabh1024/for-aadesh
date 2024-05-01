import React from 'react'

const PurchaseItem = () => {
    return (
        <div>
            {/* <!-- Buy item Modal --> */}
            <div className="modal fade backdrop-blur-lg buy_item" id="purchaseItem" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog mt-5">
                    <div className="modal-content sm:p-4">
                        <div className="modal-header">
                            <div className='text-end'>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <h1 className="modal-title text-center mt-3" id="exampleModalLabel">Purchase Summary</h1>
                        </div>
                        <div className="modal-body">
                            <p className='font-[300]'>item</p>
                            <div className='flex items-center justify-between sm:text-base text-sm font-[300] border-b border-b-[#FFFFFF1A] pb-4'>
                                <div className='flex items-center'>
                                    <img src="/assets/images/home/banner1.png" className='sm:w-[70px] w-[64px] rounded-md' alt="banner1" />
                                    <div className='sm:ms-3 ms-2'>
                                        <span>Shades of Space</span>
                                        <p className='mt-1 mb-0 text-[#FFFFFF99]'>Floyx Rare NFT (10x pcs)</p>
                                    </div>
                                </div>
                                <div className='text-end'>
                                    <p className='mb-1'>Price</p>
                                    <span className='text-[#4D9AFF]'>$1000</span>
                                </div>
                            </div>
                            <div className='flex justify-between font-[300] pt-4'>
                                <span>Total price</span>
                                <div className='text-end'>                                
                                    $1000
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn theme_btn w-100 border-0 py-3">Complete purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseItem;