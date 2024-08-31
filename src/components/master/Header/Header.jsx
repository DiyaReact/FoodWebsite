import React, { useState } from 'react';
import './Header.scss'
import { assets } from '../../../assets/assets';
import { Link } from 'react-router-dom';
import { useStatesContext } from '../../../context/StoreContext';

const Header = () => {

    const [menu, setMenu] = useState("home");


    // const {allStates} = useStatesContext()
    
//  console.log("diya pgl h", allStates);

// const functionPass=()=>{
//     allStates.setMenu2("Diya Jain");
// }
    
// console.log("Parveen",allStates.menu1)
    return (
        <>
            <div className='navbar'>
                <img src={assets.logo} alt='logo' className='logo' />
                <div className='navbar-menu'>
                <ul className='navbar-nav'>
                        <li className='nav-item'>
                                <Link onClick={()=>setMenu("home")}className={menu==='home'?'active':''}>home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={()=>setMenu("menu")}className={menu==='menu'?'active':''}>menu</Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={()=>setMenu("about-the-hotel")}className={menu==='about-the-hotel'?'active':''}>about the tomato</Link>
                            </li>
                            <li className='nav-item'>
                                <Link onClick={()=>setMenu("contact-us")}className={menu==='contact-us'?'active':''}>Contact Us</Link>
                            </li>
                        </ul>
                </div>
                <div className='navbar-right'>
                    <img src={assets.search_icon} alt='search-icon' />
                    <div className='basket'>
                        <img src={assets.basket_icon} alt='basket-icon' />
                        <div className='dot'></div>
                    </div>
                    {/* <button onClick={()=> functionPass() }>sign in</button> */}
                    <button>sign in</button>
                </div>
            </div>
        </>
    )
}

export default Header;