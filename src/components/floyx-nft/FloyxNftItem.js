import React from 'react'

const FloyxNftItem = () => {
    return (
        <div className='floyx_nft py-[50px] relative'>
            <div className="container">
                <div className="img_shadow absolute d-md-block d-none lg:top-[-80px] top-0 blur-lg right-[100px] -z-10">
                    <img src="/assets/images/home/shadow1.png" alt="shadow1" />
                </div>

                <h3 className='mb-5 border-b pb-3 border-[#FFFFFF1A]'>Floyx NFT Staking </h3>
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <div className="floyx_card relative overflow-hidden">
                            <img src="/assets/images/offer/floyx1.jpg" className='w-100 h-100 rounded-md' alt="floyx1" />
                            <div className="layer rounded-md absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center text-center">
                                <div>
                                    <h1 className='sm:text-[28px] text-[20px]'>Upgrade your NFT</h1>
                                    <a href="/floyx-nft/upgrade-nft" className='py-sm-3 py-2 w-[132px] text-white rounded px-8 inline-block'>Upgrade</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="floyx_card relative overflow-hidden h-100">
                            <img src="/assets/images/offer/floyx2.jpg" className='w-100 h-100 rounded-md' alt="floyx2" />
                            <div className="layer rounded-md absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center text-center">
                                <div>
                                    <h1 className='sm:text-[28px] text-[20px]'>Stake your NFT</h1>
                                    <a href="/floyx-nft/stack-nft" className='py-sm-3 py-2 w-[132px] text-white rounded px-8 inline-block'>Stack</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FloyxNftItem