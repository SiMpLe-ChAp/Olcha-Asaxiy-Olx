import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: JSON.parse(localStorage.getItem("uzum-cart")) ||[]
}
const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart : (state,action)=>{
            let index = state.value.findIndex(i => i.id === action.payload.id)
            if(index < 0){
                state.value = [...state.value, {...action.payload, quantity: 1}]
                localStorage.setItem("uzum-cart",JSON.stringify(state.value))
            }
            else{
                state.value = state.value.map((item, inx)=> inx === index ? {...item,   quantity: item.quantity +1}:  item)
            }
        },
        removeFromCart : (state,action)=>{
            state.value = state.value.filter((item) => item.id !== action.payload);
        },
        decrementCart: (state ,action)=>{
            let index = state.value.findIndex(i => i.id === action.payload.id)
            state.value = state.value.map((item, inx)=> inx === index ? {...item,   quantity: item.quantity -1}:  item)
        }
    }
})
export const { addToCart, removeFromCart , decrementCart } = CartSlice.actions
export default CartSlice.reducer