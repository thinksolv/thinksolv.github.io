'use client';
import React, { useEffect, useRef } from "react";
import { Service } from "@/types/service";
import gsap from "gsap";
import { useTheme } from "next-themes"; // import the useTheme hook

const SingleService = ({ service }: { service: Service }) => {
  const { image, title, description, url } = service;

  // Create references for the elements to animate
  const serviceRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Get the current theme
  const { theme } = useTheme();

  useEffect(() => {
    if (serviceRef.current) {
      gsap.from(serviceRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.5,
      });
    }

    if (buttonRef.current) {
      gsap.from(buttonRef.current, {
        opacity: 0,
        x: -20,
        duration: 1,
        delay: 0.1,
      });
    }
  }, []); // This ensures animations run on initial render

  return (
    <div
      ref={serviceRef}
      className={`bg-white shadow-lg rounded-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl ${
        theme === "dark" ? "bg-blacksection text-white" : "bg-white text-black"
      }`} // Apply different classes for dark/light mode
    >
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-t-xl transition-all transform hover:scale-110" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-3">{description}</p>

        {/* Learn More Button */}
        <a
          href={url} target="_blank" // Dynamically set the URL
          className="group mt-7.5 inline-flex items-center gap-2.5 text-primary hover:text-black dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300 group-hover:pr-2">Explore</span>
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
      </div>
    </div>
  );
};

export default SingleService;
