// src/components/DynamicRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

// Example: mock allRoutes array (you can replace it with real data)

export const allRoutes = [
  { menu_id: 1, url: "/", name: "Home" },
  { menu_id: 2, url: "/about", name: "About" },
  { menu_id: 3, url: "/service", name: "Services" },
  { menu_id: 4, url: "/contact", name: "Contact" },
];



const DynamicRoutes: React.FC=()=>{
  const renderComponent=(url:any) => {
    switch (url){
      case "/":
        return <Home />;
      case "/about":
        return <About />;
      case "/contact":
        return <Contact />;
      case "/service":
        return <Services />;
      default:
        return <div className="container py-5">Page not found</div>;
    }
  };

  return (
    <Routes>
      {allRoutes.map((route) => (
        <Route
          key={route.menu_id}
          path={route.url}
          element={renderComponent(route.url)}
        />
      ))}

      {/* Fallback route */}
      <Route
        path="*"
        element={<div className="container py-5">404 Not Found</div>}
      />
    </Routes>
  );
};

export default DynamicRoutes;
