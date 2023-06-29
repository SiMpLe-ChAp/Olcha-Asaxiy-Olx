import React from 'react';
import './productWrapper.css';
import { Link } from 'react-router-dom';
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillHeart
} from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addToHeart, removeFromHeart } from '../../context/heart';
import { addToCart } from '../../context/cart';
import { db } from '../../server';
import { doc, deleteDoc } from 'firebase/firestore';
import { toggle } from '../../context/productreload';
import { toast } from 'react-toastify';

function ProductWrapper({ data, admin }) {
  const dispatch = useDispatch();
  const heart = useSelector(state => state.heart.value);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id))
      .then(res => {
        console.log(res);
        toast.warn('ochirildi ');
        dispatch(toggle());
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="products">
      {data?.map(item => (
        <div key={item.id} className='card'>
          <Link to={`/single-product/${item.id}`} className='card__image' state={{ item }}>
            <img src={item.url} alt='' />
          </Link>
          <div className="skidka__btn">Skidka</div>

          <button className='caaart'>
            {admin ? (
              <button className="price__cart" onClick={() => handleDelete(item.id)}>
                <FiTrash2 />
              </button>
            ) : (
              <button onClick={() => dispatch(addToCart(item))} className="price__cart">
                <AiOutlineShoppingCart />
              </button>
            )}
          </button>

          <button className='cart__heart'>
            {heart.some(i => i.id === item.id) ? (
              <AiFillHeart style={{ color: "dodgerblue" }} onClick={() => dispatch(removeFromHeart(item))} />
            ) : (
              <AiOutlineHeart style={{ color: "dodgerblue" }} onClick={() => dispatch(addToHeart(item))} />
            )}
          </button>

          <div className='card__body'>
            <p className='card__title'>{item.title}</p>
            <p className='card__rating'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span>0 otziv</span>
            </p>
            <div className='card__price'>
              <div>
                <del style={{ color: "darkred", fontSize: 18, marginLeft: 15 }}>{Math.round(item.price * 1.5)} so'm</del>
                <p style={{ fontSize: 18, marginLeft: 15, marginTop: 3 }}>{item.price} so'm</p>
              </div>
            </div>
            <button className='btn_for_skidka'>Kupit v 1 klik</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductWrapper;
