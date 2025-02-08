// components/ui/Heading.jsx
import React from "react";

const Heading = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold text-gray-900 text-black mb-4">
      {children}
    </h1>
  );
};

export default Heading;