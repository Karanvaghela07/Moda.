import React from 'react';
import '../styles/ajio-promos.css';

const AjioBankOffers = () => {
    return (
        <div className="ajio-bank-offers-strip">
            <div className="offer-item">
                <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=100&auto=format&fit=crop" alt="HDFC" className="bank-logo" />
                <span><strong className="offer-highlight">10% Instant Discount</strong> on HDFC Bank Credit Cards. Min. Spend 2,999</span>
            </div>
            <div className="offer-divider"></div>
            <div className="offer-item">
                <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=100&auto=format&fit=crop" alt="SBI" className="bank-logo" />
                <span><strong className="offer-highlight">Flat ₹500 Cashback</strong> on SBI Credit Card EMI. T&C Apply</span>
            </div>
            <div className="offer-divider"></div>
            <div className="offer-item">
                <span className="coupon-code">VIBE500</span>
                <span>Get Extra ₹500 Off on your first order. Use Code at checkout.</span>
            </div>
        </div>
    );
};

export default AjioBankOffers;
