import { cartSlice } from "../features/cart/cartSlice";
import { productSlice } from "../features/products/productSlice";
import {configureStore} from "@reduxjs/toolkit"





export const store  =  configureStore({
    reducer:{
        product: productSlice.reducer,
        cart:cartSlice.reducer,
    }
})