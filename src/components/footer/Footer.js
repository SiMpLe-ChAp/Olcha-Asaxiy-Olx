import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';
import rasm from '../../assets/products/olcha_footer.webp'
import apelsin from '../../assets/Apelsin-01.png'
import uzcard from '../../assets/Uzcard-01.png'
import click from '../../assets/Click-01.png'
import payme from '../../assets/payme-01.png'
import humo from '../../assets/Humo-01.jpg'
import paynet from '../../assets/paynet.jpg'
import {IoLocationOutline} from 'react-icons/io5'
import {AiOutlineMail } from 'react-icons/ai';
import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {SiHuawei} from 'react-icons/si'
function Footer() {

  const { pathname } =useLocation()
  if(pathname.includes("/admin") ){
    return<></>
  }
  if(pathname.includes("/login") ){
    return<></>
  }
  return (
    <div className='container footer__wrapper__part__one'><br /><br />
      <h1>Наше мобильное приложение доступно <br /> в AppGallery, App store и Google play</h1>
      <div className="footer__btns">
      <button className='footer__btn__one'><AiFillApple className='red'/> Download on the <br /> App Store</button>
      <button className='footer__btn__two'><FcGoogle className='red'/>Get in on <br /> Google Play</button><br />
      </div>
      <button className='footer__btn__three'><SiHuawei style={{color:"red"}} className='red'/>EXPLORE IN ON <br />APPGALLERY</button>
      <div className="iimmgg">
      <img className='footer__img' src={rasm} alt="" />
      </div>
    <div className="footer__wrapper__part__two">

      <div className="collection__one">
      <h1 className='footer__logo' style={{fontSize:50,fontFamily:"cursive"}}>olcha</h1>
      <h1 style={{fontWeight:100}}>Телефон поддержки</h1><br />
      <span style={{fontWeight:900,fontSize:23}}>+998 (71) 202 202 1</span><br /><br />
      <p style={{color:"dodgerblue",fontSize:23}}><IoLocationOutline/> Козитарнов, Ташкент</p><br />
      <p style={{fontSize:23}}><AiOutlineMail/> info@olcha.uz</p>
      </div>

      <div className="collection__two">
        <div className="footer__logo__two">
          <ul className='footer__collection'>
          <li className="footer__items" style={{color:"dodgerblue",fontSize:30}}>Информация</li><br /><br />
          <li className="footer__items">О компании</li><br />
          <li className="footer__items">Вакансии</li><br />
          <li className="footer__items">Возврат и обмен товаров</li><br />
          <li className="footer__items">Условия рассрочки</li><br />
          <li className="footer__items">Помощь</li><br />
          <li className="footer__items">Доставка</li>
          </ul>
        </div>
      </div>


      <div className="collection__three">
        <div className="footer__logo__two">
          <ul className='footer__collection'>
          <li className="footer__items">Eco-friendly</li><br />
          <li className="footer__items">Бонусы и акции</li><br />
          <li className="footer__items">Оплата и доставка</li><br />
          <li style={{background:"dodgerblue",color:"white"}} className="footer__items">Продавайте на olcha</li><br />
          <li className="footer__items">Сервисные центры</li><br />
          </ul>
        </div>
      </div>

      <div className="collection__four">
        <div className="collection__four__one">
          <button><img src={apelsin} alt="" /></button>&nbsp;&nbsp;
          <button><img src={uzcard} alt="" /></button>&nbsp;&nbsp;
          <button><img src={click} alt="" /></button>&nbsp;&nbsp;
        </div><br />
        <div className="collection__four__two">
        <button><img src={payme} alt="" /></button>&nbsp;&nbsp;
          <button><img src={humo} alt="" /></button>&nbsp;&nbsp;
          <button><img src={paynet} alt="" /></button>
        </div>
      </div>
    </div><hr />
    <div className="footer__wrapper__part__three">
      <div className="container uch">
        <h1>© 2017-2023. ООО "Olcha store"</h1>
        <h1>Публичная оферта</h1>
        <h1>Политика конфиденциальности</h1>
      {/* <div className="tort">
        <BiLogoFacebookCircle style={{fontSize:30,marginLeft:10}}/>
        <BiLogoInstagram  style={{fontSize:30,marginLeft:10}}/>
        <BiLogoTelegram style={{fontSize:30,marginLeft:10}}/>
      </div> */}
      </div>
    </div>
    </div>
  );
}

export default Footer;
