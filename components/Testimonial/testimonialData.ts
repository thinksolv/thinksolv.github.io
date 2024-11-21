import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "David Smith",
    designation: "Founder & CEO @Soft Tech",
    image: image1,
    content:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
  },
  {
    id: 2,
    name: "John Abraham",
    designation: "Founder @Tech Innovators",
    image: image2,
    content:
      "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    designation: "Director of Operations @Global Enterprises",
    image: image1,
    content:
      "Their solutions have saved us time, reduced costs, and increased operational efficiency.",
  },
  {
    id: 4,
    name: "Michael Brown",
    designation: "Product Manager @Innovative Solutions",
    image: image2,
    content:
      "Their team understood our unique challenges and developed a solution that met all of our requirements.",
  },
];
