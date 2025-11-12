'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Error404: React.FC = () => {
  return (
    <>
      <style>{`
        .error-container {
          min-height: 100vh;
          background-color: #0f172a;
          color: #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .error-card {
          background-color: #1e293b;
          border-radius: 1rem;
          padding: 3rem 2rem;
          max-width: 500px;
          width: 100%;
          text-align: center;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .error-code {
          font-size: 6rem;
          font-weight: 800;
          background: linear-gradient(to right, #14b8a6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }
        .error-title {
          color: #f8fafc;
          font-size: 1.875rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .error-message {
          color: #94a3b8;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .btn-home {
          background: linear-gradient(to right, #14b8a6, #06b6d4);
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .btn-home:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(20, 184, 166, 0.3);
        }
        .logo-container {
          background-color: white;
          padding: 0.5rem;
          border-radius: 0.375rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
      `}</style>

      <div className="error-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="error-card"
        >
          {/* Logo */}
          <div className="logo-container">
            <img
              src="/logo.png"
              alt="Kivasec cyber Logo"
              style={{ maxHeight: '40px' }}
            />
          </div>

          {/* Error Code */}
          <div className="error-code">404</div>

          {/* Title */}
          <h1 className="error-title">Page Not Found</h1>

          {/* Message */}
          <p className="error-message">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          {/* Back to Home */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="btn-home">
              Back to Home
            </Link>
          </motion.div>

          {/* Developer Tip */}
          <div className="mt-4 text-sm text-gray-500">
            <em>Hey developer: Consider adding an ErrorBoundary for better UX!</em>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Error404;