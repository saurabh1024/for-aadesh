import React from 'react'
import { RiSearchLine } from "react-icons/ri";
import { PiBagLight } from "react-icons/pi";
import Creates from '../create/Index';
import CartModal from '../common/CartModal';

const OffCanvas = ({ sidebar, cart }) => {
    return (
        <div className='sidebar d-lg-none'>
            <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="/assets/images/logo.png" alt="logo" />
                    </a>
                    <button className="navbar-toggler shadow-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <a className="navbar-brand" href="#">
                                <img src="/assets/images/logo.png" alt="logo" />
                            </a>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="sign_option flex items-center justify-between">
                                <a href="/sign-up">Sign up</a>
                                <a href="/login">Login</a>
                            </div>
                            <div className='search mt-5'>
                                <form className='relative'>
                                    <input type="text" placeholder='Search' />
                                    <RiSearchLine className='search_icon' />
                                </form>
                            </div>
                            <ul className="navbar-nav justify-content-end flex-grow-1 mt-4">
                                <li className="nav-item">
                                    <a className="nav-link text-white font-[400]" href="#">Drop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white font-[400]" data-bs-toggle="modal" data-bs-target={`#${sidebar}`} type='button'>Create</a>
                                </li>
                                <li className='nav-item'>
                                    <a className="nav-link text-white font-[400]" href="#" data-bs-toggle="modal" data-bs-target={`#${cart}`}><PiBagLight className='text-[20px]' /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Creates create={sidebar} />
            <CartModal cart={cart} />
        </div>
    )
}

export default OffCanvas