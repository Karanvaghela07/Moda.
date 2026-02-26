/**
 * orderStorage.js
 * Persists orders to localStorage, keyed per user email.
 * This is the single source of truth for real placed orders.
 *
 * Storage key pattern:  moda_orders_<email>
 * Each value: JSON array of order objects
 */

const keyFor = (email) => `moda_orders_${email.trim().toLowerCase()}`;

/**
 * Get all saved orders for a user (newest first).
 */
export function getSavedOrders(email) {
    if (!email) return [];
    try {
        const raw = localStorage.getItem(keyFor(email));
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

/**
 * Save a new order for a user.
 * Returns the saved order object.
 */
export function saveOrder(email, order) {
    if (!email) return order;
    try {
        const existing = getSavedOrders(email);
        const updated = [order, ...existing];
        localStorage.setItem(keyFor(email), JSON.stringify(updated));
    } catch (e) {
        console.error('Failed to save order:', e);
    }
    return order;
}

/**
 * Find a single order by ID for a given user.
 * Returns null if not found or wrong user.
 */
export function findSavedOrder(email, orderId) {
    const normalised = orderId.replace(/^#/, '');
    const orders = getSavedOrders(email);
    return orders.find(o => o.id === normalised) || null;
}

/**
 * Format a Date object as a human-readable string: "Feb 26, 2026"
 */
export function formatOrderDate(dateStr) {
    try {
        return new Date(dateStr).toLocaleDateString('en-IN', {
            day: 'numeric', month: 'short', year: 'numeric'
        });
    } catch {
        return dateStr;
    }
}

/**
 * Calculate estimated delivery date (5 days from order date).
 */
export function getEtaDate(dateStr) {
    try {
        const d = new Date(dateStr);
        d.setDate(d.getDate() + 5);
        return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
        return '';
    }
}
