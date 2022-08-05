import axios from "axios";
import { CART_ADD_ITEM , CART_REMOVE_ITEM} from "../Constants/CartConstant";
import { CART_SAVE_SHIPPING_ADDRESS } from './../Constants/CartConstant';
export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            CountInStock: data.CountInStock,
            qty,
        }
    })

    localStorage.setItem("cartItems", JSON.stringify(getState() .cart.cartItems));
};

// REMOVE PRODUCT FROM CART
export const removefromcart = (id) => (dispatch, getState) => {
    dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// SAVE SHIPPING ADDRESS
export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS ,
    payload: data,
    });
    localStorage.setItem("shippingAddress", JSON.stringify(data));
};