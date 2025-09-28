import React from "react";
import Button from "./animated/Buttons";
const PriceCard = ({ title, description, price, period, features }) => {
  return (
    <div>
    <div className="mt-20 bg-gradient-to-b from-[#7f0101] to-[#010149] text-white p-8 rounded-2xl shadow-lg w-[320px]">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-300 mb-6">{description}</p>

      {/* Price */}
      <div className="mb-6">
        <span className="text-4xl font-extrabold">${price}</span>
        <span className="text-gray-400">/{period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-3 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-blue-400">➜</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
       <Button/>
    </div>
    </div>
  );
};

export default PriceCard;
