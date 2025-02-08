import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const BulletPoint = ({ children }) => {
  return (
    <div className="flex items-start space-x-3 text-gray-800 dark:text-gray-200">
      <FaCheckCircle className="text-green-500 mt-1" />
      <p className="text-lg">{children}</p>
    </div>
  );
};

export default BulletPoint;