import React from 'react'
import './admin.css'
import CreateProduct from './create-product/CreateProduct'
import ManageProduct from './manage-product/ManageProduct'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Routes, Route, NavLink, Link } from 'react-router-dom'

function admin() {
  return (
    <div className='admin'>
        <div className="admin__sidebar">
        <Link  to={"/"}>
            <button className='admin__go__to__home'><AiOutlineArrowLeft/></button>
          </Link><br /><br /><br />
          <h2>Admin Dashboard</h2>
          <ul className="admin__collection">
          <li className="admin__item">
              <NavLink className="admin__link" to={`create-product`}>Create Product</NavLink>
            </li>
            <li className="admin__item">
              <NavLink className="admin__link" to={`manage-product`}>Manage Product</NavLink>
            </li>
          </ul>
        </div>
        <div className="admin__content">
        <Routes>
          <Route path='create-product' element={<CreateProduct/>}/>
          <Route path='manage-product' element={<ManageProduct/>}/>
        </Routes>
        </div>
      </div>
  )
}

export default admin