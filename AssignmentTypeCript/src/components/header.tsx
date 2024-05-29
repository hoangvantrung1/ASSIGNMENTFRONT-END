import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
    <>
                <div className="top_nav">
                    <div className="container top_nav_container">
                        <div className="top_nav_wrapper">
                            <p className="tap_nav_p">
                                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                            </p>
                            <a href="#" className="top_nav_link">SHOP NOW</a>
                        </div>
                    </div>
                </div>
                <nav className="nav">
                    <div className="container nav_container">
                        <a href="#" className="nav_logo">EXCLUSIVE</a>
                        <ul className="nav_list">
                            <li className="nav_item"><a href="/" className="nav_link">Home</a></li>
                            <li className="nav_item"><a href="#" className="nav_link">About</a></li>
                            <li className="nav_item"><a href="#" className="nav_link">Contact</a></li>
                            <li className="nav_item">
                                <a href="/sign-up.html" className="nav_link">Sign up</a>
                            </li>
                        </ul>
                        <div className="nav_items">
                            <form action="#" className="nav_form">
                                <input
                                    type="text"
                                    className="nav_input"
                                    placeholder="search here...." />
                                <img src="./image/search.png" alt="" className="nav_search" />
                            </form>
                            <img src="./image/heart.png" alt="" className="nav_heart" />
                            <a href="/cart.html">
                                <img src="./image/cart.png" alt="" className="nav_cart" />
                            </a>
                        </div>
                        <span className="hamburger">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </span>
                    </div>
                </nav>
                <nav className="mobile_nav mobile_nav_hide">
                    <ul className="mobile_nav_list">
                        <li className="mobile_nav_item">
                            <a href="/" className="mobile_nav_link">Home</a>
                        </li>
                        <li className="mobile_nav_item">
                            <a href="#" className="mobile_nav_link">About</a>
                        </li>
                        <li className="mobile_nav_item">
                            <a href="#" className="mobile_nav_link">Contact</a>
                        </li>
                        <li className="mobile_nav_item">
                            <a href="/sign-up.html" className="mobile_nav_link">Sign Up</a>
                        </li>
                        <li className="mobile_nav_item">
                            <a href="/cart.html" className="mobile_nav_link">Cart</a>
                        </li>
                    </ul>
                </nav>
                <header className="header">
                    <div className="container header_container">
                        <div className="header_filter">
                            <a href="#" className="header_filter_link">Woman’s Fashion</a>
                            <a href="#" className="header_filter_link">Men’s Fashion</a>
                            <a href="#" className="header_filter_link">Electronics</a>
                            <a href="#" className="header_filter_link">Home & Lifestyle</a>
                            <a href="#" className="header_filter_link">Medicine</a>
                            <a href="#" className="header_filter_link">Sports & Outdoor</a>
                            <a href="#" className="header_filter_link">Baby’s & Toys</a>
                            <a href="#" className="header_filter_link">Groceries & Pets</a>
                            <a href="#" className="header_filter_link">Health & Beauty</a>
                        </div>
                        <img src="./image/header.png" alt="" className="header_img" />
                    </div>
</header>
                </>
                )
}


                export default Header