import React, {useState, useEffect} from 'react';
import Skeleton from '../skeleton/Skeleton';
import './Product.css';
import ProductWrapper from '../product-wrapper/ProductWrapper';
import {PRODUCTS} from '../../static'
import { db } from '../../server'
import { collection, getDocs} from 'firebase/firestore'

function Product() {

  const [data,setData] = useState([])
  const productRef = collection(db, "products")

  useEffect(()=>{
    const getProducts = async()=>{
      const fetchData = await getDocs(productRef)
      // console.log(fetchData)
      setData(fetchData.docs.map((item => ({id: item.id, ...item.data()}))))
    }
    getProducts()
  }, [])

  return (
    <div className='container'>
      {
        data.length?
        <ProductWrapper data={data}/> :
        <Skeleton/>
      }
    </div>

  );
}

export default Product;
