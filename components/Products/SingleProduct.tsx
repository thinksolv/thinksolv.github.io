import React from "react";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

const SingleProduct = ({ feature }: { feature: Feature }) => {
  const { icon: Icon, title, description, url } = feature; // Include `url`

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary text-white">
        <Icon className="text-3xl" />
      </div>
      <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
        {title}
      </h3>
      <p>{description}</p>

      {/* Know More Button */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -20,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_left md:w-2/5 lg:w-1/2 mt-4"
      >
        <a
          href={url} target="_blank" // Dynamically set the URL
          className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300 group-hover:pr-2">Know More</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default SingleProduct;
