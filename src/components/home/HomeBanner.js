import React from 'react'
// Import Swiper styles

const HomeBanner = () => {
    return (
        <div className='home_banner py-[50px]'>
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-5">
                        <div className="home_text">
                            <h1>Explore Our</h1>
                            <h1 className='theme_text'>NFT Universe</h1>
                            <p className='mt-3'>Start your NFT journey with us! & own a piece of the future</p>
                            <a href="#" className='theme_btn px-5 py-3 mt-4'>Get Started</a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="banner_card relative">
                            <div className="img_shadow absolute sm:top-[120px] md:top-[50px] xl:top-[30px] top-[90px] blur-lg sm:left-0 left-[-300px]">
                                <img src="/assets/images/home/shadow1.png" alt="shadow1" />
                            </div>
                            <div className="img_shadow absolute top-[-120px] d-md-block d-none  sm:right-[-5px] right-[-100px]">
                                <img src="/assets/images/home/shadow1.png" alt="shadow1" />
                            </div>
                            <div className="card_img absolute xl:left-[55px] left-0">
                                <img src="/assets/images/home/banner3.png" alt="banner3" />
                            </div>
                            <div className="card text-white relative z-10">
                                <img src="/assets/images/home/banner1.png" alt="banner1" />
                                <div class="card-body bg-[#0D0B20] flex items-center justify-between">
                                    <div>
                                        <p class="card-title">Shades of Space</p>
                                        <p class="card-text font-[300] text-sm text-[#FFFFFF99]">Price $80</p>
                                    </div>
                                    <a href="#" class="theme_btn px-[30px] py-3">Buy</a>
                                </div>
                            </div>
                            <div className="card_img absolute xl:right-[55px] right-0">
                                <img src="/assets/images/home/banner2.png" alt="banner2" />
                            </div>
                        </div>
                        {/* <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            loop={true}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card border-0">
                                    <img src="/assets/images/home/banner1.png" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card border-0">
                                    <img src="/assets/images/home/banner1.png" alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner