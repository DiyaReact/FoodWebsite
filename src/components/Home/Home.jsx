import React, { useState } from "react";
import './home.scss';
import { menu_list } from "../../assets/assets";

const Home = () => {
    const [category, setCategory] = useState("All")
    return(
        <>
        
        <section className='main-banner'>
            <div className="content">
                <h2>order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. We try to satisfy your cravings and elevate your dinning experience, one delicious meal at a time</p>
                <button>view menu</button>
            </div>

        </section>

        <section className="explore-menu">
             <h1 className="heading">Explore our menu</h1>
             <p className="sub-text">choose from a diverse menu featuring a delectable array of dishes. Our missions to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                              <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="menu-img"/>
                              <p>{item.menu_name}</p>
                        </div>
                    )
                })

                }
            </div>
             <hr/>
        </section>
        </>
    )
}

export default Home