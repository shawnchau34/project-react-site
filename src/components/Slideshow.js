// src/components/Slideshow.js
import React, { useEffect, useState } from 'react';
import '../css/Slideshow.css';

const images = [
    'project-react-site/images/slideshow/slideshow1.webp',
    'project-react-site/images/slideshow/slideshow2.avif',
    'project-react-site/images/slideshow/slideshow3.webp',
    'project-react-site/images/slideshow/slideshow4.cms',
    'project-react-site/images/slideshow/slideshow5.jpg',
    'project-react-site/images/slideshow/slideshow6.jpg'
];

function Slideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(intervalId); // Clean up on component unmount
    }, []);

    return (
        <div className="slideshow">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Slideshow ${index + 1}`}
                    className={index === currentImageIndex ? 'active' : ''}
                />
            ))}
        </div>
    );
}

export default Slideshow;
