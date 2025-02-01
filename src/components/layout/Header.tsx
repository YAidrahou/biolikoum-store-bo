import React from 'react';
import '../../styles/globals.css';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="h-20 w-full flex bg-white text-secondary dark:bg-background dark:text-primary font-init border-b border-primary dark:border-white shodow-md">
            <div className="logo ">
            <Link href="/">
                <img src="/path-to-your-logo.png" alt="Logo" />
            </Link>
            </div>
            <nav className="nav-bar flex-grow flex justify-center items-center">
            <ul className="flex space-x-4 text-2xl font-semibold">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/products">Products</Link></li>
                <li><Link href="/stock">Stock</Link></li>
                <li><Link href="/sales">Sales</Link></li>
                <li><Link href="/configuration">Configuration</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            </nav>
        </header>
    );
};

export default Header;