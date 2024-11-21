import React from "react";
import servicesData from "./servicesData";
import SingleService from "./SingleService";
import SectionHeader from "../Common/SectionHeader";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-alabaster dark:bg-blacksection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          headerInfo={{
            title: "Our Services",
            subtitle: "Empowering Your Business with Cutting-Edge Solutions",
            description:
              "We provide a range of innovative services designed to streamline your business processes and enhance productivity.",
          }}
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <SingleService key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
