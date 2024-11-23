import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addTocart, removeFromCart, url } = useContext(StoreContext)

  // Kiểm tra xem cartItems có tồn tại và có phần tử cho id này không
  const cartItemCount = cartItems && cartItems[id] ? cartItems[id] : 0;

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={url + "/images/" + image} alt='' />
        {
          cartItemCount === 0
            ? <img className='add' onClick={() => addTocart(id)} src={assets.add_icon_white} alt='' />
            : <div className='food-item-counter'>
                <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='' />
                <p> {cartItemCount}</p>
                <img onClick={() => addTocart(id)} src={assets.add_icon_green} alt='' />
              </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem