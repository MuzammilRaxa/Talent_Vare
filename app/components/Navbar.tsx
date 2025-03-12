"use client"
import React, { useState } from 'react'
import Logo from '../Assets/Logo.png';
import Picture from '../Assets/profile.png';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    
    const pages = ['Top Companies', 'Job Tracker', 'My Calendar', 'Documents', 'Messages', 'Notification'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    
        const [navOpen, setNavOpen] = useState(false);
        const [userMenuOpen, setUserMenuOpen] = useState(false);
    
  return (
    <div>       
        <nav className="bg-white text-grey shadow-md sticky top-0 z-50">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <Link href="/">
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <Image src={Logo} alt="Logo" width={42} height={38} />
                            <span className="font-bold "  style={{ color: '#0154AA', fontSize:'20px' }}>Find Jobs</span>
                        </div>
                    </Link>
                    <div className="hidden lg:flex justify-left items-center space-x-6">
                        <div className='text-gray-500 space-x-6 pe-5'>
                        {pages.map((page) => (
                            <Link key={page} href={`/${page.toLowerCase().replace(/\s/g, '-')}`}>
                                <button className="hover:text-gray-500 transition-colors">{page}</button>
                            </Link>
                        ))}
                        </div>
                        <div className="hidden lg:flex items-center px-4" style={{ backgroundColor: '#f6f9ff', fontSize: '16px', borderRadius: '10px' }}>
                            <i className='bx bx-search-alt-2' style={{ color: '#737a91', fontSize: '24px', marginTop: '4px' }}></i>
                            <input type="text" placeholder="Search" className="p-2 rounded-md w-40" />
                        </div>
                        <button className="bg-blue-600 display-block text-white p-2 rounded transition-colors hover:bg-blue-700" style={{ maxWidth:'140px', fontSize:'12px', backgroundColor: '#0154AA', borderRadius: '10px' }}>Resume Builder</button>
                        <button className="focus:outline-none" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                            <Image src={Picture} alt="User Avatar" width={38} height={38} className="rounded-full" />
                        </button>
                        {userMenuOpen && (
                            <div className="absolute right-4 mt-12 bg-white text-black rounded-lg shadow-lg w-48">
                                {settings.map((setting) => (
                                    <button key={setting} className="w-full text-left px-4 py-2 hover:bg-gray-200">
                                        {setting}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setNavOpen(!navOpen)} className="focus:outline-none">
                            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
                {navOpen && (
                    <div className="lg:hidden bg-blue-700 p-4 text-white">
                        {pages.map((page) => (
                            <Link key={page} href={`/${page.toLowerCase().replace(/\s/g, '-')}`}>
                                <button className="block w-full text-left py-2 hover:bg-blue-800">{page}</button>
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
    </div>
  )
}

export default Navbar