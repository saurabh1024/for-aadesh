'use client'
import {useState} from 'react';
import { RiSearchLine } from "react-icons/ri";
import { PiBagLight } from "react-icons/pi";
import OffCanvas from './OffCanvas';
import Creates from '../create/Index';
import CartModal from '../common/CartModal';
import Link from 'next/link';
const Header = ({ head, cart }) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);


    return (
        <div>
            {/* <div className={click ? "main-container" : ""} onClick={() => Close()} /> */}
            <div className='d-lg-block d-none'>
                <nav className="navbar" onClick={e => e.stopPropagation()}>
                    <div className="container">
                        <a href="/" className="nav-logo">
                            <img src="/assets/images/logo.png" alt="logo" />
                        </a>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link
                                    href="/drops"
                                    className="nav-links"
                                >
                                    Drops
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/create" type='button' data-bs-toggle="modal" data-bs-target={`#${head}`}  className="nav-links">
                                    Create
                                </Link>
                                <Creates create={head} />
                            </li>
                            <li className='search'>
                                <form className='relative'>
                                    <input type="text" placeholder='Search' />
                                    <RiSearchLine className='search_icon' />
                                </form>
                            </li>
                        </ul>
                        <div className="sign_menu flex items-center">
                            <a href="/sign-up">Sign up</a>
                            <a href="/login">Login</a>
                            <a href="#" data-bs-toggle="modal" data-bs-target={`#${cart}`}><PiBagLight /></a>
                            <CartModal cart={cart} />
                        </div>
                        {/* <div className="nav-icon" onClick={handleClick}>
                            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                        </div> */}
                    </div>
                </nav>
            </div>
            <OffCanvas sidebar="sideMenu" cart="sideCart" />
        </div>
    );
}

export default Header