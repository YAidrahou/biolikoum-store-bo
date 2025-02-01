'use client';
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ConfigurationLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex h-full">
        {/* Sidebar - Always visible on md+ screens, hidden on mobile until opened */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary text-white p-4 transition-transform md:relative md:translate-x-0 md:flex ${
            isOpen ? "translate-x-0" : "-translate-x-64"
          }`}
        >
          {/* Sidebar Close Button (Only for Mobile) */}
          <div className="md:hidden flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
  
          <nav className="mt-4 space-y-4 w-full">
            <h1 className="block text-white font-bold text-md lg:text-2xl text-center uppercase">configuration</h1>
            <Link href="/configuration/categories" className="block px-4 py-2 rounded hover:bg-primary-500 w-full" >Categories</Link>
            <Link href="/configuration/sizes" className="block px-4 py-2 rounded hover:bg-primary-500" >Sizes</Link>
          </nav>
        </aside>
  
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Navbar (Only for Mobile) */}
          <header className="bg-primary text-white p-4 flex items-center md:hidden">
            <button onClick={() => setIsOpen(true)} className="mr-4">
              <Menu className="w-6 h-6" />
            </button>
            <span className="text-lg font-bold uppercase">configuration</span>
          </header>
  
          {/* Page Content */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    );
};

export default ConfigurationLayout;