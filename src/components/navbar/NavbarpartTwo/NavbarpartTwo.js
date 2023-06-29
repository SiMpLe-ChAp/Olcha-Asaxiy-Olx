import React,{useState} from 'react'
import {AiOutlineSearch , AiOutlineUser , AiOutlineHeart , AiOutlineShoppingCart , AiOutlineMenu , AiOutlineHome} from 'react-icons/ai'
import {BsBarChartLine} from 'react-icons/bs'
import Sidebar from '../../../components/sidebar/Sidebar'
import {Link} from 'react-router-dom'
function NavbarpartTwo() {
    const [show ,setShow] = useState(false)
    document.body.style.overflow =  show ? "hidden" : "auto"
  return (
    <>
    <div className='navbar__main container'> 
    <Link to={"/"}>
      <h1  className="nav__logo" >olcha</h1>
    </Link>
    <button className='nav__btn'  onClick={()=>setShow(true)}>
      <AiOutlineMenu/>
      <span>Katalog</span></button>
    <div className="nav__search">
      <input type="text"placeholder='Qidirish...' />
      <button><AiOutlineSearch/></button>
    </div>
    <ul className="nav__collection">

      <Link to={"/"} className='nav__item'>
        <AiOutlineHome/>
        <span>Bosh Sahifa</span>
      </Link>
 
  <Link to={"/login"} className='nav__item'>&nbsp;&nbsp;
        <AiOutlineUser/><br />
        <span>Kirish</span>
  </Link>
  <li className='nav__item'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <BsBarChartLine/><br />
        <span>Taqqoslash</span>
  </li>
  <Link to={"/Qualified "}  className='nav__item'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AiOutlineHeart/><br />
        <span>Saralangan</span>
 </Link>

 <Link to={"/Cart"} className='nav__item'>&nbsp;&nbsp;&nbsp;
        <AiOutlineShoppingCart/><br />
        <span>Savatcha</span>
 </Link>
    </ul>
  </div>
  <Sidebar show={show} setShow={setShow}/>
  </>
  )
}

export default NavbarpartTwo