import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const [orders, setOrders] = useState([]);

    const toggleCart = () => setCartOpen(!cartOpen);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setCartOpen(true);
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const placeOrder = (shippingDetails, paymentMethod) => {
        const newOrder = {
            id: `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            date: new Date().toISOString(),
            status: 'Ordered', // Ordered, Packed, Shipped, Delivered
            items: [...cartItems],
            total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
            shipping: shippingDetails,
            payment: paymentMethod
        };
        setOrders(prev => [newOrder, ...prev]);
        setCartItems([]); // Clear cart
        return newOrder;
    };

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartOpen, setCartOpen, toggleCart, cartItems, addToCart, removeFromCart, cartCount, orders, placeOrder }}>
            {children}
        </CartContext.Provider>
    );
};
