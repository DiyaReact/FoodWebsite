import React from 'react'
import './FoodDisplay.scss'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = (props) => {

    return (
        <div className="food-display" id='food-display'>
             <h1 className="heading">Top Dishes near you</h1>
             <div className="food-display-list">
            {
                props.food_list.map((food_list, index)=>{
                    return <FoodItem food_list={food_list} key={index} />
                })
            }
             </div>

        </div>
    )
}

export default FoodDisplay