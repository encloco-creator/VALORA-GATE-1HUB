import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=1200&auto=format&fit=crop',
];

export default function ImageSlider() {
  const [i, setI] = useState(0);
  const next = () => setI(p => (p === images.length - 1 ? 0 : p + 1));
  const prev = () => setI(p => (p === 0 ? images.length - 1 : p - 1));
  return (
    <div className='relative w-full max-w-4xl mx-auto h-72 md:h-96 rounded-lg overflow-hidden'>
      <AnimatePresence mode='wait'>
        <motion.img
          key={i}
          src={images[i]}
          alt={}
          className='absolute inset-0 w-full h-full object-cover'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        />
      </AnimatePresence>
      <button onClick={prev} className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70'>←</button>
      <button onClick={next} className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70'>→</button>
    </div>
  );
}
