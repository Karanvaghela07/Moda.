import React, { useRef } from 'react';
import { useMouse } from "@uidotdev/usehooks";

const ImageTrail = ({ children, images }) => {
    const [mouse, ref] = useMouse();
    const lastPosition = useRef({ x: 0, y: 0 });
    const imageIndex = useRef(0);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;

        // Calculate distance
        const distance = Math.hypot(
            clientX - lastPosition.current.x,
            clientY - lastPosition.current.y
        );

        // Threshold for spawning new image
        if (distance > 100) {
            spawnImage(clientX, clientY);
            lastPosition.current = { x: clientX, y: clientY };
        }
    };

    const spawnImage = (x, y) => {
        if (!containerRef.current) return;

        const img = document.createElement('img');
        const index = imageIndex.current % images.length;
        img.src = images[index];
        imageIndex.current += 1;

        // Random rotation and scale for "crazy" effect
        const rotation = Math.random() * 20 - 10;
        const scale = Math.random() * 0.5 + 0.8;

        img.style.position = 'fixed';
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;
        img.style.width = '200px';
        img.style.height = 'auto';
        img.style.pointerEvents = 'none';
        img.style.zIndex = '9999'; // On top of everything
        img.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease';
        img.style.opacity = '1';
        img.className = 'trail-image';

        document.body.appendChild(img);

        // Animate in
        requestAnimationFrame(() => {
            img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;
        });

        // Remove after delay
        setTimeout(() => {
            img.style.opacity = '0';
            img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale * 0.8})`;
            setTimeout(() => {
                if (img.parentNode) document.body.removeChild(img);
            }, 500);
        }, 800);
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className="image-trail-container"
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 50 }}
        >
            <div ref={containerRef}>{children}</div>
        </div>
    );
};

export default ImageTrail;
