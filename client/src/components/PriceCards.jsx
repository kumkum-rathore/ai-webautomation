import React from "react";
import PriceCard from "./PriceCard";

const PriceCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-16 ">
    
      <PriceCard
        title="Starter"
        description="Choose the plan that best fits your needs. All plans come with enterprise-grade security."
        price="529"
        period="per month"
        features={[
          "Access to core AI tools",
          "Up to 5,000 API calls/month",
          "Basic analytics dashboard",
          "Advanced analytics and reporting",
        ]}
      />

  
      <PriceCard
        title="Professional"
        description="Choose the plan that best fits your needs. All plans come with enterprise-grade security."
        price="729"
        period="per month"
        features={[
          "Everything in Starter",
          "Up to 50,000 API calls/month",
          "Advanced analytics and reporting",
        ]}
      />

      <PriceCard
        title="Enterprise"
        description="Choose the plan that best fits your needs. All plans come with enterprise-grade security."
        price="929"
        period="per month"
        features={[
          "Everything in Professional",
          "Unlimited API calls",
          "Dedicated account manager",
          "Custom integrations and SLA",
        ]}
      />
    </div>
  );
};

export default PriceCards;
