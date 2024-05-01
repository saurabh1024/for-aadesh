import React from 'react'

const collection_card = [
    {
        id: 1,
        image: '/assets/images/home/collection3.png',
        title: 'Shades of Space',
        time: '10d : 20h : 10m : 25s'
    },
    {
        id: 2,
        image: '/assets/images/home/collection2.png',
        title: 'Dream Scape',
        time: '10d : 20h : 10m : 25s'
    },
    {
        id: 3,
        image: '/assets/images/home/collection1.png',
        title: 'Ether & Era',
        time: '10d : 20h : 10m : 25s'
    },
    {
        id: 4,
        image: '/assets/images/home/collection3.png',
        title: 'Shades of Space',
        time: '10d : 20h : 10m : 25s'
    },
    {
        id: 5,
        image: '/assets/images/home/collection2.png',
        title: 'Dream Scape',
        time: '10d : 20h : 10m : 25s'
    },
    {
        id: 6,
        image: '/assets/images/home/collection1.png',
        title: 'Ether & Era',
        time: '10d : 20h : 10m : 25s'
    }
]

const Drops = () => {
    return (
        <div className='drops py-[50px] relative'>
            <div className="container">
                <div className="shadows absolute d-md-block d-none left-[-60px] bottom-[-300px] rotate-[-77.84 deg] opacity-[0.64] -z-10">
                    <img src="/assets/images/home/shadow2.png" alt="shadow2" />
                </div>
                <div className="shadows absolute d-md-block d-none right-[0px] bottom-[-500px] rotate-[-48.95 deg] opacity-[0.64] -z-10">
                    <img src="/assets/images/home/shadow3.png" alt="shadow3" />
                </div>
                <div className="img_shadow absolute d-md-block d-none top-[30px] blur-lg right-[100px]">
                    <img src="/assets/images/home/shadow1.png" alt="shadow1" />
                </div>
                <h3 className='mb-3'>Drops</h3>
                <ul class="nav nav-pills mb-5 border-b border-[#FFFFFF1A]" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-coming-tab" data-bs-toggle="pill" data-bs-target="#pills-coming" type="button" role="tab" aria-controls="pills-coming" aria-selected="true">Upcoming</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-past-tab" data-bs-toggle="pill" data-bs-target="#pills-past" type="button" role="tab" aria-controls="pills-past" aria-selected="false">Past</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-coming" role="tabpanel" aria-labelledby="pills-coming-tab" tabindex="0">
                        <div className="collection_cards">
                            <div className="row gy-4 justify-content-center">
                                {
                                    collection_card.map((res) => {
                                        return (
                                            <>
                                                <div className="col-lg-4 col-md-6" key={res.id}>
                                                    <div className="cards">
                                                        <img src={res.image} className='w-100' alt={res.title} />
                                                        <div className="card_layer">
                                                            <div>
                                                                <p className='mb-2 text-lg flex items-center'>{res.title} <img src="/assets/images/home/verify.png" alt="verify" className='ms-2' /></p>
                                                                <p className='mb-0 text-[#FFFFFF99] bg-[#000000B2] py-2 px-4 rounded-md font-[300]'>{res.time}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-past" role="tabpanel" aria-labelledby="pills-past-tab" tabindex="0">
                        <div className="collection_cards">
                            <div className="row gy-4 justify-content-center">
                                {
                                    collection_card.map((res) => {
                                        return (
                                            <>
                                                <div className="col-lg-4 col-md-6" key={res.id}>
                                                    <div className="cards">
                                                        <img src={res.image} className='w-100' alt={res.title} />
                                                        <div className="card_layer">
                                                            <div>
                                                                <p className='mb-2 text-lg flex items-center'>{res.title} <img src="/assets/images/home/verify.png" alt="verify" className='ms-2' /></p>
                                                                <p className='mb-0 text-[#FFFFFF99] bg-[#000000B2] py-2 px-4 rounded-md font-[300]'>{res.time}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drops