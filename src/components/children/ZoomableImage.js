import React, { useState, useEffect } from 'react';

const ZoomableImage = ({ src, loading }) => {
    const [isHovered, setIsHovered] = useState(0);
    const [isBigScreen, setIsBigScreen] = useState(window.innerWidth > 768); // Set your desired screen width threshold

    useEffect(() => {
        setIsHovered(0);
    }, [loading]);

    useEffect(() => {
        const handleResize = () => {
            setIsBigScreen(window.innerWidth > 768); // Update the threshold as needed
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getScale = () => {
        if (isHovered === 1) {
            return isBigScreen ? 'scale-150 z-20 cursor-zoom-in' : '';
        } else if (isHovered === 2) {
            return isBigScreen ? 'scale-[2] z-20 cursor-zoom-out' : '';
        }
        return 'cursor-zoom-in';
    };

    const handleClick = () => {
        if (isHovered === 0) {
            setIsHovered(1);
            window.scroll(0,0)
        } else if (isHovered === 1) {
            setIsHovered(2);
            window.scroll(0,0)
        } else {
            setIsHovered(0);
        }
    };

    return (
        <div className={`h-full w-full flex justify-center`}>
            <img
                src={src}
                alt={'celebrity'}
                className={`h-full object-contain relative overflow-hidden transition-transform transform ${getScale()}`}
                onClick={isBigScreen ? handleClick : undefined}
            />
        </div>
    );
};

export default ZoomableImage;
