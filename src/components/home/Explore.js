import React from 'react'
import ExploreDetail from '../common/ExploreDetail';

const Explore = () => {

    return (
        <div className='explore py-[50px] relative'>
            <div className="shadows absolute d-md-block d-none left-[-60px] top-[-200px] rotate-[-77.84 deg] opacity-[0.64] -z-10">
                <img src="/assets/images/home/shadow2.png" alt="shadow2" />
            </div>
            <div className="shadows absolute d-md-block d-none right-[0px] top-[-300px] rotate-[-48.95 deg] opacity-[0.64] -z-10">
                <img src="/assets/images/home/shadow3.png" alt="shadow3" />
            </div>
            <div className="container">
                <h3 className='mb-5'>Explore</h3>
                <ExploreDetail modalId="modal1"/>                
            </div>
        </div>
    )
}

export default Explore