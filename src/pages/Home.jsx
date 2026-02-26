import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AjioBankOffers from '../components/AjioBankOffers';
import CategoryCircles from '../components/CategoryCircles';
import BannerStrip from '../components/BannerStrip';
import AjioDealGrid from '../components/AjioDealGrid';
import AjioBrandSpotlight from '../components/AjioBrandSpotlight';
import HorizontalProductScroll from '../components/HorizontalProductScroll';
import { products } from '../data/products';
import '../styles/home.css';

const Home = () => {
    // Slicing products for different sections to simulate massive inventory
    const newArrivals = products.slice(0, 8);
    const trendingNow = products.slice(4, 12);
    const bestSellers = products.slice(8, 16);

    return (
        <div className="commercial-home" style={{ backgroundColor: '#f0f2f5' }}>
            {/* 1. HERO SLIDER */}
            <HeroSlider />

            {/* 2. BANK OFFERS STRIP (Ajio style) */}
            <AjioBankOffers />

            {/* 3. CATEGORY CIRCLES */}
            <CategoryCircles />

            {/* 4. MEGA BLOCKBUSTER DEALS GRID */}
            <AjioDealGrid />

            {/* 5. TOP BRANDS SPOTLIGHT */}
            <AjioBrandSpotlight />

            {/* 6. BANNER STRIP (Marquee) */}
            <BannerStrip />

            {/* 7. HORIZONTAL SCROLL: NEW ARRIVALS */}
            <HorizontalProductScroll
                title="TRENDING NEW DROPS"
                products={newArrivals}
            />

            {/* 8. SHOP BY COLLECTION BANNER (Luxury Mid Banner adapted) */}
            <section className="commercial-banner-mid" style={{ width: '100%', borderRadius: 0, margin: '2rem 0' }}>
                <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670" alt="Collection" loading="lazy" />
                <div className="banner-content-mid">
                    <h3>THE DENIM<br />EDIT</h3>
                    <button style={{ backgroundColor: '#e11b23', color: '#fff', border: 'none' }}>SHOP MIN 40% OFF</button>
                </div>
            </section>

            {/* 9. HORIZONTAL SCROLL: TRENDING NOW */}
            <HorizontalProductScroll
                title="STEAL DEALS"
                products={trendingNow}
            />

            {/* 10. HORIZONTAL SCROLL: BEST SELLERS */}
            <HorizontalProductScroll
                title="MOST LOVED"
                products={bestSellers}
            />

            {/* 11. MEMBERSHIP IMPACT BANNER */}
            <section className="commercial-banner-mid member-banner" style={{ height: '40vh', minHeight: '300px', marginBottom: '80px', width: '100%', borderRadius: 0 }}>
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670" alt="Members" loading="lazy" style={{ filter: 'brightness(0.6)' }} />
                <div className="banner-content-mid" style={{ left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
                    <h3 style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}>UNLOCK EXTRA 10% OFF</h3>
                    <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '1.5rem', fontFamily: 'Inter, sans-serif' }}>Join the club for member-only pricing and free delivery.</p>
                    <a href="/account" className="promo-btn" style={{ textDecoration: 'none', display: 'inline-block', opacity: 1, transform: 'none', backgroundColor: '#e11b23', color: '#fff', padding: '0.8rem 2rem' }}>SIGN UP NOW</a>
                </div>
            </section>

        </div>
    );
};

export default Home;
