import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ( {children} ) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if(checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;

            setCartItems([...cartItems, { ...product }]);
        }

        toast.success(`${product.name} x${qty} added to your cart.`, {style: {fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}});
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
    
        setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
    }

    const toggleCartItemQuantity = (id, value) => {
        setCartItems((prevCartItems) => {
            return prevCartItems.map((item) => {
                if (item._id !== id) return item; // Return other items unchanged
    
                let newQuantity = item.quantity;
                if (value === 'inc') {
                    newQuantity += 1;
                    setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
                    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
                } else if (value === 'dec' && item.quantity > 1) {
                    newQuantity -= 1;
                    setTotalPrice((prevTotalPrice) => prevTotalPrice - item.price);
                    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
                }
    
                return { ...item, quantity: newQuantity }; // Return updated item
            });
        });
    };    

    const resetQuantity = () => {
        setQty(1);
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1); 
    }
    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;

            return prevQty - 1
        }); 
    }

    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                resetQuantity,
                incQty,
                decQty,
                onAdd,
                setShowCart,
                toggleCartItemQuantity,
                onRemove,
                setCartItems,
                setTotalPrice,
                setTotalQuantities,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);