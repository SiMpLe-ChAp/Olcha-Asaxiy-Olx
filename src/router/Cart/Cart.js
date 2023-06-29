import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CardWrapper from '../../components/cardwrapper/CardWrapper'

function Qualified() {
  const cart = useSelector(s => s.cart.value)
  console.log(cart);
  return (
    <div className='container'>
    {cart.length ? (
      <CardWrapper data={cart} />
    ) : (
      <div className="container empty">
        <img className="empty__img" src="https://olcha.uz/_nuxt/cart.de8a9297.png" alt="" />
        <h1>Корзина пуста</h1>
        <h2>Но вы всегда можете ее наполнить</h2>
        <Link to="/">
          <button className="add__to__account">На главную</button>
        </Link>
      </div>
    )}
  </div>
  )
}

export default Qualified;