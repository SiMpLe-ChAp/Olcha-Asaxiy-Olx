import React from 'react';
import './Qualified.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToHeart, removeFromHeart } from '../../context/heart';
import { useLocation } from 'react-router-dom';

function Cart() {
  const heartItems = useSelector(state => state.heart.value);
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  if (pathname.includes("/single")) {
    return <></>;
  }

  const handleDelete = (id) => {
    dispatch(removeFromHeart({ id }));
  };
  
  const reversedHeartItems = [...heartItems].reverse(); // Reverse the order of heartItems

  return (
    <div className={`container heartsss${heartItems?.length ? '' : 'empty'}`}>
      {heartItems?.length > 0 && (
        <div className="one">
          <h1>Избранное</h1>
          <select name="" id="">
            <option value="">12</option>
            <option value="">24</option>
            <option value="">48</option>
            <option value="">60</option>
          </select>

          <select name="" id="">
            <option value="">Reyting (nachinaya s niskogo)</option>
            <option value="">Sortirovka</option>
            <option value="">Novinki</option>
            <option value="">Snachala deshevle</option>
            <option value="">Snachala doroje</option>
          </select>
        </div>
      )}

      {reversedHeartItems?.length ? (
        reversedHeartItems.map(({ id, url, title, price }) => (
          <div key={id} className='CART__ASAXIY'>
            <div className="small__card">
              <img src={url} alt="" />
              <div className="column">
                <h1>{title}</h1>
                <button className='intex'>Intex</button>
              </div>
              <div className="column__two">&nbsp;&nbsp;
                <del>{Math.round(price * 1.5)} so'm</del>
                <h1>{price}</h1>&nbsp;&nbsp;
                <span>{Math.round(price * 1.44 / 12)} 12 cym/12mec</span>
              </div>
              <div className="column__three">
                <button className='add_cart'>Dobavit v korzinku</button><br />
                <button className='delate' onClick={() =>handleDelete(id)}>Udalit</button>
              </div>
            </div>
            <br /><br />
          </div>
        ))
      ) : (
        <div className='emptyyyy'>
          <img className='empty__img' src="https://asaxiy.uz/custom-assets/images/heart-bubble.svg" alt="" />
          <h1>Нет любимых продуктов</h1>
          <h2>Добавить с символом ♡ на продукте</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
