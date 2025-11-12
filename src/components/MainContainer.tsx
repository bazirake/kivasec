// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';

interface MainContainerProps {
  children?: ReactNode; // optional, since Outlet will handle content
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100 w-100" style={{ margin: 0, padding: 0 }}>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow-1 w-100" style={{ margin: 0, padding: 0 }}>
        {children || <Outlet />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainContainer;
