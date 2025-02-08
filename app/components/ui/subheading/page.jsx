import React from "react";

const Subheading = ({ children }) => {
  return (
    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
      {children}
    </h2>
  );
};

export default Subheading;