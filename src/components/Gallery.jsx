import React, { useState } from 'react';

export default function Gallery() {
const images = [
  '/images/python.png',
  '/images/django3.png',
  '/images/Audi_R8.png',
  '/images/Chevrolet.png'
];
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="text-center mt-4">
      <h2>Gallery</h2>
      <img src={images[index]} alt="Gallery" width={400} height={250} />
      <div className="mt-2">
        <button className="btn btn-secondary me-2" onClick={prevImage}>BACK</button>
        <button className="btn btn-secondary" onClick={nextImage}>NEXT</button>
      </div>
    </div>
  );
}
