import React, { useState } from 'react'
import './FoodItem.scss'
import { assets } from '../../assets/assets'


const FoodItem = (props) => {
    const [itemcount, setItemCount] = useState(0)
    return(
<div className="food-item">
    <div className="img-box">
        <img src={props.food_list.image} className='food-item-img' alt="" />
        {
            !itemcount
            ?<img className="add" onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt=''/>
            :<div className='food-item-counter'>
                <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt=''></img>
                <p>{itemcount}</p>
                <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt=''></img>
             </div>
        }
    </div>
     <div className="food-item-info">
        <div className="food-item-name-rating">
        <p>{props.food_list.name}</p>
        <img src={assets.rating_starts} alt="" />
        </div>
        <p className="des">{props.food_list.description}</p>
        <p className="price">${props.food_list.price}</p>
     </div>
</div>
    )
}

export default FoodItem