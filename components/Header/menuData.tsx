import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Products",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Services",
    newTab: false,
    path: "/featuresTab",
  },
  {
    id: 2.2,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

];

export default menuData;
