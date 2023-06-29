import React, {useEffect} from 'react';
import './Singleroute.css';
import { useLocation } from 'react-router-dom';
import {  AiFillStar } from 'react-icons/ai';
import {FaFacebookF,FaTelegram,FaTwitter,FaWhatsapp} from 'react-icons/fa'
import { addToCart } from '../../context/cart'
import { useDispatch, useSelector } from 'react-redux';

function SingleRoute() {
  const location = useLocation();
  const item = location.state.item; 
  const dispatch =useDispatch() 
    useEffect(()=>{
      window.scroll(0, 0)
    }, [])
  return (
    <div className='container'>
        <div className="single__route">
          <img src={item.url} className='route__img' alt="" />
          <div className="single__left">
            <div className="top">
              <h2>{item.title}</h2>
              <button className="wishes">&nbsp;
              </button>
            </div>
            <p className='card__rating' style={{marginBottom:30}}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <span> 0 отзывов</span>
                </p>
                <del style={{color:"darkred",fontSize:20,marginBottom:10}}>{Math.round(item.price * 1.5)} сум</del>
                <p style={{color:"orange",fontSize:30,marginBottom:10}}>{item.price}</p> 
                <span  style={{fontSize:20}} className='month'>{Math.round(item.price * 1.44 / 12)} сум / 12 мес</span><br /><br />
                <p className='brend' style={{fontSize:20}}>Бренд: {item.title}</p><br />
                <p style={{fontSize:20}} className='start'>Наличии: <span style={{
                  color:"lightgreen",
                  marginLeft:5
                }}>Есть в наличии</span></p>
                <div className="share__icons">
                  <p style={{fontSize:20,marginTop:5}}>Поделиться:</p>
                  <FaFacebookF style={{background:"darkblue",color:"white",fontSize:35,borderRadius:30,marginLeft:10}}/>
                  <FaTelegram  style={{background:"dodgerblue",color:"white",fontSize:35,borderRadius:30,marginLeft:10}}/>
                  <FaTwitter style={{background:"blue",color:"white",fontSize:35,borderRadius:30,marginLeft:10}}/>
                  <FaWhatsapp style={{background:"lightgreen",color:"white",fontSize:35,borderRadius:30,marginLeft:10}}/>
                </div>
                <div className="share__btns">
                  <button className='share__btn__one'>Priobresti v rassrochku</button>
                  <button className='share__btn__two' onClick={() => dispatch(addToCart(item))}>Dobavit v korzinku</button>
                  <button className='share__btn__three'>kupit v 1 klik</button>
                </div>
           
            
          </div>
        </div>
      </div>
  );
}

export default SingleRoute;
