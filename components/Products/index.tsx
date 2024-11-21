"use client";
import React from "react";
import featuresData from "./productsData";
import SingleProduct from "./SingleProduct";
import SectionHeader from "../Common/SectionHeader";

const Product = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-10 lg:py-15 xl:py-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Our Products",
              subtitle: "Streamlining Your Workflow with Powerful Solutions",
              description: `A team of passionate professionals delivering cutting-edge products designed to elevate your business and streamline operations.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleProduct feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Product;
