import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 p-4 text-center">
      <p className="text-gray-600">
        © {new Date().getFullYear()} Constitute. All rights reserved.
      </p>
    </footer>
  );
};