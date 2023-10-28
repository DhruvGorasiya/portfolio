import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return <div className="w-full py-6 lg:py-24 mt-24 flex items-center justify-center flex-wrap gap-8">
    <ServiceCard count={"pachi"} text={"karis"}/>
    <ServiceCard count={"pachi"} text={"karis"}/>
    <ServiceCard count={"pachi"} text={"karis"}/>
    <ServiceCard count={"pachi"} text={"karis serviceCount.jsx"}/>

    </div>;
};

export default ServiceCount;
