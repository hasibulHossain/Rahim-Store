import React from 'react';
import Navbar from '../Navbar/Navbar';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="bg-gradient-to-br from-teal-400 to-cyan-500 h-screen">
                { children }
            </main>
        </>
    )
}

export default Layout
