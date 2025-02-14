import React from "react";

const Statistics = ({ value, caption }) => {
  return (
    <div data-aos="fade-up" className="me-4 text-center lg:me-10">
      <h2 className="font-noto text-2xl text-[#22B84C] md:text-4xl">{value}</h2>
      <h3 className="font-noto text-sm text-white">{caption}</h3>
    </div>
  );
};

export default Statistics;
