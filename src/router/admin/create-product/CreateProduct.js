import React, { useRef, useState } from 'react';
import './CreateProduct.css';
import { db } from '../../../server'
import { collection, addDoc} from 'firebase/firestore'
import { toast } from 'react-toastify';
function CreateProduct() {
  // controlled form | componenet
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState('')
  // uncontrolled form | component
  const price = useRef();
  const url = useRef();
// collectoin = array
// datbase da kotta array ochdik yani collection arra demakdir 
 
  const productRef = collection(db, "products")


  const handleSubmit =  async (e) => {
    e.preventDefault();
    setLoading(true)
    let newProduct = {
      title,
      price: +price.current.value,
      url: url.current.value,
    };

    await addDoc(productRef, newProduct)
    .then(res => {
      console.log(res)
      setTitle("")
      price.current.value = ""
      url.current.value = ""
      toast.success('Muaffaqiyatli mahsulot qushildi')
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  };

  return (
    <div className="create">
      <div className="creaate">
        <h2>Create product</h2>
        <form action="" onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            type="text"
            placeholder="title"
          />
          <input ref={price} required type="number" placeholder="price" />
          <input ref={url} required type="text" placeholder="url" />
          <button disabled={loading}>{loading ? "Loading...":"Submit"}</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
