import React, { createContext, useContext, useState } from 'react';
import { saveOrder, formatOrderDate, getEtaDate } from '../utils/orderStorage';
import { getStoredUser } from '../utils/csvStorage';

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
        const now = new Date().toISOString();

        // Build a rich order object that matches what OrderDetails/OrderHistory expect
        const newOrder = {
            id: `ORD-${Math.floor(Math.random() * 90000) + 10000}`,   // e.g. ORD-47382
            date: formatOrderDate(now),
            rawDate: now,
            eta: getEtaDate(now),
            etaShort: 'Estimated in 5 days',
            status: 'Ordered',
            address: [
                shippingDetails.address,
                shippingDetails.city,
                shippingDetails.zip,
                shippingDetails.country
            ].filter(Boolean).join(', '),
            payment: paymentMethod || 'Credit Card',
            total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
            items: cartItems.map((item, idx) => ({
                id: item.id ?? idx,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                size: item.selectedSize || item.size || 'M',
                color: item.color || 'Default',
                img: item.image1 || item.img || ''
            })),
            shipping: shippingDetails,
        };

        // Persist to localStorage keyed by the logged-in user's email
        const currentUser = getStoredUser();
        if (currentUser?.email) {
            saveOrder(currentUser.email, newOrder);
        }

        // Also keep in-session React state (for immediate display on OrderSuccess)
        setOrders(prev => [newOrder, ...prev]);
        setCartItems([]);   // clear cart
        return newOrder;
    };

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartOpen, setCartOpen, toggleCart,
            cartItems, addToCart, removeFromCart,
            cartCount, orders, placeOrder
        }}>
            {children}
        </CartContext.Provider>
    );
};
