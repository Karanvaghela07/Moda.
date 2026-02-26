import React from 'react';

const BrandLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150">
        {/* Ghost Icon (Scaled to fit left side) */}
        <path d="M45 125C45 125 45 110 55 110C65 110 75 125 85 125C95 125 95 15 95 15C95 15 45 15 45 15C45 15 45 125 45 125Z" fill="none" stroke="#e11b23" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="60" cy="55" r="8" fill="#e11b23" />
        <circle cx="80" cy="55" r="8" fill="#e11b23" />

        {/* Text Group */}
        <g fill="none" stroke="#e11b23" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            {/* "The" */}
            <path d="M120 20 L135 20 M127 20 L127 45" /> {/* T */}
            <path d="M140 20 L140 45 M140 32 L150 32 M150 20 L150 45" /> {/* h */}
            <path d="M155 32 L165 32 L165 25 L155 25 L155 45 L165 45" /> {/* e */}

            {/* "Indie" */}
            <path d="M120 85 L120 55" /> {/* I */}
            <path d="M130 85 L130 65 L140 65 L140 85" /> {/* n */}
            <path d="M145 85 L145 55 L155 55 L155 85 L145 85" /> {/* d */}
            <path d="M160 85 L160 65" /> {/* i */}
            <path d="M160 60 L160 58" /> {/* i dot */}
            <path d="M165 75 L175 75 L175 68 L165 68 L165 85 L175 85" /> {/* e */}

            {/* "Store" --> */}
            <path d="M120 115 L130 115 L130 120 L120 120 L120 125 L130 125" /> {/* S */}
            <path d="M135 110 L135 125 M132 110 L138 110" /> {/* t */}
            <path d="M142 125 L142 115 L152 115 L152 125 L142 125" /> {/* o */}
            <path d="M155 125 L155 115 L165 115 L165 120 L155 120 L165 125" /> {/* r */}
            <path d="M168 120 L178 120 L178 115 L168 115 L168 125 L178 125" /> {/* e */}

            {/* Underline */}
            <path d="M115 135 Q200 145 280 130" strokeWidth="6" />
        </g>
    </svg>
);

export default BrandLogo;
