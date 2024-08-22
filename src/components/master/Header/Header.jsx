import React from 'react';
import './Header.scss'
import { assets } from '../../../assets/assets';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='navbar'>
                <img src={assets.logo} alt='logo' className='logo' />
                <div className='navbar-menu'>
                <ul className='navbar-nav'>
                        <li className='nav-item'>
                                <Link to='/' className='nav-link'>home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-link'>menu</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='' className='nav-link'>about the tomato</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact' className='nav-link'>Contact Us</Link>
                            </li>
                        </ul>
                </div>
                <div className='navbar-right'>
                    <img src={assets.search_icon} alt='search-icon' />
                    <div className='basket'>
                        <img src={assets.basket_icon} alt='basket-icon' />
                        <div className='dot'></div>
                    </div>
                    <button>sign in</button>
                </div>
            </div>
        </>
    )
}

export default Header;