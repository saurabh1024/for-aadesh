import React from 'react'

const MenuBar = () => {
    return (
        <div>
            {/* menu start */}
            <div className="container">
                <ul class="nav overflow-x-auto whitespace-nowrap flex-nowrap menu border-b border-b-[#FFFFFF1A]">
                    <li class="nav-item">
                        <a class="text-[#5499FF] pb-4 hover:text-[#5499FF] pe-4 block active" aria-current="page" href="#">All</a>
                    </li>
                    <li class="nav-item">
                        <a class="text-[#FFFFFF99] pb-4 hover:text-[#5499FF] pe-4 block" href="#">Art</a>
                    </li>
                    <li class="nav-item">
                        <a class="text-[#FFFFFF99] pb-4 hover:text-[#5499FF] pe-4 block" href="#">Gaming</a>
                    </li>
                    <li class="nav-item">
                        <a class="text-[#FFFFFF99] pb-4 hover:text-[#5499FF] pe-4 block" href="#">Memberships</a>
                    </li>
                    <li class="nav-item">
                        <a class="text-[#FFFFFF99] pb-4 hover:text-[#5499FF] pe-4 block" href="#">PFPs</a>
                    </li>
                    <li class="nav-item">
                        <a class="text-[#FFFFFF99] pb-4 hover:text-[#5499FF] pe-4 block" href="#">Photography</a>
                    </li>
                    <li class="nav-item">
                        <a class="text-[#FFFFFF99] pb-4 hover:text-[#5499FF] pe-4 block" href="#">Music</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBar