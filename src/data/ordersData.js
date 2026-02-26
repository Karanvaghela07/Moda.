/**
 * ordersData.js
 * Single source of truth for orders.
 *
 * getUserOrders(email) returns:
 *   1. Real orders the user placed (from localStorage via orderStorage.js)   ← newest first
 *   2. Demo/sample orders assigned to that email (for demo accounts only)
 *
 * findOrderById(id, email) checks real orders first, then demo orders.
 */

import { getSavedOrders, findSavedOrder } from '../utils/orderStorage';

/* ─── Demo orders (only visible to the specific demo email accounts) ───── */
const DEMO_ORDERS = [
    {
        id: 'ORD-8821',
        userEmail: 'vaghelakaran8599@gmail.com',
        date: 'Aug 24, 2026',
        eta: 'Aug 27, 2026',
        etaShort: 'Delivered',
        total: 3200,
        status: 'Delivered',
        address: '12, Shanti Nagar, Ahmedabad, Gujarat 380001',
        payment: 'Visa •••• 4242',
        items: [
            {
                id: 101, name: 'Oversized Silk Shirt', price: 2200, quantity: 1, size: 'M', color: 'Ivory',
                img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=400&auto=format&fit=crop'
            },
            {
                id: 102, name: 'Classic Chinos', price: 1000, quantity: 1, size: 'M', color: 'Khaki',
                img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=400&auto=format&fit=crop'
            }
        ]
    },
    {
        id: 'ORD-7714',
        userEmail: 'vaghelakaran8599@gmail.com',
        date: 'July 10, 2026',
        eta: 'July 13, 2026',
        etaShort: 'Delivered',
        total: 1450,
        status: 'Delivered',
        address: '12, Shanti Nagar, Ahmedabad, Gujarat 380001',
        payment: 'Visa •••• 4242',
        items: [
            {
                id: 201, name: 'Striped Cotton Tee', price: 1450, quantity: 1, size: 'L', color: 'Navy Blue',
                img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=400&auto=format&fit=crop'
            }
        ]
    },
    {
        id: 'ORD-6639',
        userEmail: 'dev@gmail.com',
        date: 'May 15, 2026',
        eta: 'May 18, 2026',
        etaShort: 'Estimated May 18',
        total: 5800,
        status: 'Processing',
        address: '403, Business Hub, Surat, Gujarat 395001',
        payment: 'Mastercard •••• 5555',
        items: [
            {
                id: 301, name: 'Denim Jacket', price: 2800, quantity: 1, size: 'M', color: 'Washed Blue',
                img: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&w=400&auto=format&fit=crop'
            },
            {
                id: 302, name: 'Cargo Pants', price: 1800, quantity: 1, size: 'L', color: 'Olive',
                img: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=400&auto=format&fit=crop'
            },
            {
                id: 303, name: 'Floral Summer Dress', price: 1200, quantity: 1, size: 'S', color: 'Floral Print',
                img: 'https://images.unsplash.com/photo-1519238263496-63439708bc16?q=80&w=400&auto=format&fit=crop'
            }
        ]
    },
    {
        id: 'ORD-5520',
        userEmail: 'sahil@gmail.com',
        date: 'April 02, 2026',
        eta: 'April 05, 2026',
        etaShort: 'Delivered',
        total: 999,
        status: 'Delivered',
        address: '7, Residency Road, Pune, MH 411001',
        payment: 'Visa •••• 1111',
        items: [
            {
                id: 501, name: 'Basic White Tee', price: 999, quantity: 1, size: 'M', color: 'White',
                img: 'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=400&auto=format&fit=crop'
            }
        ]
    },
    {
        id: 'ORD-3310',
        userEmail: 'sahil@gmail.com',
        date: 'February 18, 2026',
        eta: 'February 22, 2026',
        etaShort: 'Shipped',
        total: 3750,
        status: 'Shipped',
        address: '7, Residency Road, Pune, MH 411001',
        payment: 'Visa •••• 1111',
        items: [
            {
                id: 601, name: 'Leather Sneakers', price: 2250, quantity: 1, size: '42', color: 'All White',
                img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop'
            },
            {
                id: 602, name: 'Slim-Fit Jeans', price: 1500, quantity: 1, size: '32', color: 'Dark Indigo',
                img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=400&auto=format&fit=crop'
            }
        ]
    },
];

/**
 * Normalise a real (localStorage) order so it matches the demo order shape
 * expected by OrderDetails, OrderHistory, and UserProfile.
 */
function normaliseRealOrder(o, userEmail) {
    return {
        ...o,
        userEmail,
        // Ensure total is always a number
        total: typeof o.total === 'string' ? parseFloat(o.total.replace(/,/g, '')) : o.total,
        // Ensure each item has an img field (CartContext saves image1 as img)
        items: (o.items || []).map(item => ({
            ...item,
            img: item.img || item.image1 || ''
        }))
    };
}

/**
 * Get all orders for a user: real placed orders (newest first) + demo orders.
 * Returns [] for brand-new users who haven't placed any orders.
 */
export function getUserOrders(email) {
    if (!email) return [];
    const lower = email.trim().toLowerCase();

    // Real orders from localStorage (most recent purchase at top)
    const realOrders = getSavedOrders(email).map(o => normaliseRealOrder(o, lower));

    // Demo orders for known demo accounts only
    const demoOrders = DEMO_ORDERS.filter(o => o.userEmail.toLowerCase() === lower);

    // Real first, then demo (avoids showing demo to new real users)
    return [...realOrders, ...demoOrders];
}

/**
 * Find a single order by ID that belongs to the given user.
 * Returns null if not found or belongs to a different user.
 */
export function findOrderById(rawId, userEmail) {
    const normalised = rawId.replace(/^#/, '');

    // Check real orders first
    if (userEmail) {
        const realOrder = findSavedOrder(userEmail, normalised);
        if (realOrder) return normaliseRealOrder(realOrder, userEmail);
    }

    // Fall back to demo orders (also enforce ownership)
    const demo = DEMO_ORDERS.find(o => o.id === normalised);
    if (!demo) return null;
    if (userEmail && demo.userEmail.toLowerCase() !== userEmail.trim().toLowerCase()) return null;
    return demo;
}

/**
 * Map a status string to the 5-step timeline index.
 */
export const STATUS_INDEX = {
    'Ordered': 0,
    'Processing': 0,
    'Packed': 1,
    'Shipped': 2,
    'Out for Delivery': 3,
    'Delivered': 4,
};
