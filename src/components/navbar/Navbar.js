import React from 'react'
import './Navbar.css'
import NavbarpartOne from './NavbarpartOne/NavbarpartOne'
import NavbarpartTwo from './NavbarpartTwo/NavbarpartTwo'
import { useLocation } from 'react-router-dom'

function Navbar() {

  // const [show ,setShow] = useState(false)
  // document.body.style.overflow =  show ? "hidden" : "auto"

  const { pathname } =useLocation()
  if(pathname.includes('admin')) {
    return<></>
  }
  if(pathname.includes('login')) {
    return<></>
  }
  return (
    <>
    <div>
      <NavbarpartOne/>
      <NavbarpartTwo/>
    </div>
    </>
  )
}

export default Navbar