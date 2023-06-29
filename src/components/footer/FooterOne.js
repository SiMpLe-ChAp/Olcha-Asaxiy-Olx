import React from 'react'
import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {SiHuawei} from 'react-icons/si'
import rasm from '../../assets/products/olcha_footer.webp'
import { useLocation } from 'react-router-dom';
function FooterOne() {

    const { pathname } = useLocation()
  //   if(pathname.includes("/single") ){
  //     return<></>
  //   }
  //  else if(pathname.includes("/saved-products")){
  //     return<></>
  //   }

   
  return (
    <div className='container footer__wrapper__part__one'>
    <h1>Наше мобильное приложение доступно <br /> в AppGallery, App store и Google play</h1>
    <div className="footer__btns">
    <button className='footer__btn__one'><AiFillApple className='red'/> Download on the <br /> App Store</button>
    <button className='footer__btn__two'><FcGoogle className='red'/>Get in on <br /> Google Play</button><br />
    </div>
    <button className='footer__btn__three'><SiHuawei style={{color:"red"}} className='red'/>EXPLORE IN ON <br />APPGALLERY</button>
    <div className="iimmgg">
    <img className='footer__img' src={rasm} alt="" />
    </div>
  </div>
  )
}

export default FooterOne