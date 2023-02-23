import { createSlice } from '@reduxjs/toolkit';
import data from '../data';

const initialState = {
  product: data,
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  // relatedProduct : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartItem: (state, action) => {
      const find = state.cart.findIndex((item) => item.id === action.payload.id)
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    removeCartItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },

    totalQuantity: (state, action) => {
      state.totalQuantity = action.payload;
    },
    increment: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item;
      })
    },
    decrement: (state, action) => {
      state.cart = state.cart.map((item) => {
        if(item.quantity == 1){
          return item;
        }
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item;
      })
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce((cartTotal, product) => {
        const { quantity, price } = product;
        const itemTotal = price * quantity;
        cartTotal.totalPrice += itemTotal;

        cartTotal.totalQuantity += quantity;
        return cartTotal;
      },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      )
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    // relatedProduct: (state,action) =>{
    //   state.relatedProduct = state.relatedProduct.push(action.payload);
    // }
  },
})

export const { cartItem, removeCartItem, totalQuantity, increment, decrement, getCartTotal, relatedProduct } = cartSlice.actions
export default cartSlice.reducer