import React, { useEffect, useState} from 'react'
import { db } from '../../../server'
import { collection, getDocs} from 'firebase/firestore'
import ProductWrapper from '../../../components/product-wrapper/ProductWrapper'
import Skeleton from '../../../components/skeleton/Skeleton'
import { useSelector } from 'react-redux'

function ManageProduct() {
  const [data,setData] = useState([])
  const productRef = collection(db, "products")
  const proReload = useSelector(s=>s.productreload.value)
  
  useEffect(()=>{
    const getProducts = async()=>{
      const fetchData = await getDocs(productRef)
      // console.log(fetchData)
      setData(fetchData.docs.map((item => ({id: item.id, ...item.data()}))))   
    }
    getProducts()
  }, [proReload])
  console.log(data);


  return (
    <div style={{padding:30}}>
      <h2>ManageProduct</h2>
      {
        data.length?
        <ProductWrapper admin={true} data={data}/> :
        <Skeleton/>
      }
    </div>
  )
}

export default ManageProduct