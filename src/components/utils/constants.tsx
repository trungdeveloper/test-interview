export const NavItem = {
  aboutUs: {
    title: "About Us",
    href: "#aboutus",
    id: "aboutus",
  },
  games: {
    title: "Games",
    href: "#games",
    id: "games",
  },
  partners: {
    title: "Partners",
    href: "#partners",
    id: "partners",
  },
  contactUs: {
    title: "Contact Us",
    href: "#contactus",
    id: "contactus",
  },
};

export const NAVS = Object.values(NavItem).map((item) => item);
