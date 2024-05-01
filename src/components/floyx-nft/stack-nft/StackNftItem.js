import React from 'react'
import NftStaking from './NftStaking'
import Rewards from './Rewards'

const StackNftItem = () => {
    return (
        <div>
            <div className='drops py-[50px] relative'>
            <div className="container">                
                <ul class="nav nav-pills flex-nowrap mb-5 border-b border-[#FFFFFF1A]" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-stack-tab" data-bs-toggle="pill" data-bs-target="#pills-stack" type="button" role="tab" aria-controls="pills-stack" aria-selected="true">Floyx NFT Staking</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-reward-tab" data-bs-toggle="pill" data-bs-target="#pills-reward" type="button" role="tab" aria-controls="pills-reward" aria-selected="false"> My Rewards</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-stack" role="tabpanel" aria-labelledby="pills-stack-tab" tabindex="0">
                        <NftStaking/>
                    </div>
                    <div class="tab-pane fade" id="pills-reward" role="tabpanel" aria-labelledby="pills-reward-tab" tabindex="0">
                        <Rewards/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default StackNftItem