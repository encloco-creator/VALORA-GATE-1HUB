import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={clsx('fixed top-0 inset-x-0 z-50 transition backdrop-blur-md border-b border-white/5', scrolled ? 'bg-black/50' : 'bg-transparent')}>
      <nav className='mx-auto max-w-6xl px-6 h-16 flex items-center justify-between text-sm'>
        <a href='/' className='font-apple text-lg tracking-wide'>VALORA</a>
        <ul className='hidden md:flex items-center gap-6 text-gray-200'>
          <li><a href='/product' className='hover:text-white'>Product</a></li>
          <li><a href='/resources' className='hover:text-white'>Resources</a></li>
          <li><a href='/pricing' className='hover:text-white'>Pricing</a></li>
          <li><a href='/customers' className='hover:text-white'>Customers</a></li>
          <li><a href='/now' className='hover:text-white'>Now</a></li>
          <li><a href='/contact' className='hover:text-white'>Contact</a></li>
        </ul>
        <div className='flex items-center gap-3'>
          <a href='/docs' className='hidden md:inline text-gray-300 hover:text-white'>Docs</a>
          <a href='/app' className='hidden md:inline text-gray-300 hover:text-white'>Open app</a>
          <a href='/login' className='text-gray-300 hover:text-white'>Log in</a>
          <a href='/signup' className='hidden md:inline px-3 py-1.5 rounded-md border border-white/10 hover:border-white/20 text-gray-100'>Sign up</a>
        </div>
      </nav>
    </header>
  );
}
