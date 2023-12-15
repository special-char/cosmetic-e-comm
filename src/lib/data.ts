import Facebook from "@/public/icons/facebook.svg";
import Twitter from "@/public/icons/twitter.svg";
import Instagram from "@/public/icons/instagram.svg";
import Linkedin from "@/public/icons/linkedin.svg";
import Location from "@/public/icons/location.svg";
import Email from "@/public/icons/email.svg";
import Phone from "@/public/icons/phone.svg";

//----------------------------NAVBAR----------------------------------//
export const navbarData = {
  heading1: "Bea You",
  heading2: ".",
  navLinks: [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Shop",
      url: "/products",
    },
    {
      id: 3,
      title: "About us",
      url: "/about-us",
    },
    {
      id: 4,
      title: "Contact us",
      url: "/contact-us",
    },
  ],
};

//-------------------------------HOME PAGE ------------------------------//
export const homePageBanner = {
  backgroundBannerImage: "/images/bannerImage.png",
  heading: "Less is more when it comes to skin care.",
  description: "Beautifull you",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
};

export const topProduct = {
  heading: "Crafted with excellent material.",
  description:
    "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
  actionBtn: "Explore",
};

export const whyChooseUs = {
  image: "/images/whyChooseUsImg.jpg",
  heading: "Why Choose Us",
  description:
    "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
  services: [
    {
      id: 1,
      icon: "/icons/shippingtruck.svg",
      heading: "Fast & Free Shipping",
      serviceDescription:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      id: 2,
      icon: "/icons/bag.svg",
      heading: "Easy to Shop",
      serviceDescription:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      id: 3,
      icon: "/icons/support.svg",
      heading: "24/7 support",
      serviceDescription:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      id: 4,
      icon: "/icons/return.svg",
      heading: "Hassle free return",
      serviceDescription:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
  ],
};

// export const help = {
//   image1: "",
//   image2: "",
//   image3: "",
//   heading: "We Help You Make Modern Interior Design",
//   description:
//     "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada",
//   icon: "",
//   points: [
//     {
//       id: 1,

//       pointDescription: "Donec vitae odio quis nisl dapibus malesuada",
//     },
//     {
//       id: 2,

//       pointDescription: "Donec vitae odio quis nisl dapibus malesuada",
//     },
//     {
//       id: 3,

//       pointDescription: "Donec vitae odio quis nisl dapibus malesuada",
//     },
//     {
//       id: 4,

//       pointDescription: "Donec vitae odio quis nisl dapibus malesuada",
//     },
//   ],
//   actionBtn1: "",
// };

export const testimonialData = {
  heading: "Testimonials",
  testimonialCards: [
    {
      id: 1,
      description:
        '"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."',
      image: "/images/person-1.png",
      name: "Maria Jones",
      designation: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      id: 2,
      description:
        '"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."',
      image: "/images/person-1.png",
      name: "Maria Jones",
      designation: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      id: 3,
      description:
        '"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."',
      image: "/images/person-1.png",
      name: "Maria Jones",
      designation: "CEO, Co-Founder, XYZ Inc.",
    },
  ],
};

//-------------------------------FOOTER-------------------------------//

export const footerData = {
  footerImage: "/images/footerImage.png",
  newsLetter: {
    heading: "Subscribe to Newsletter",
  },
  heading: "Furni.",
  description:
    "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant",
  socialMedia: [
    {
      id: 1,
      name: "facebook",
      icon: Facebook,
    },
    {
      id: 2,
      name: "Twitter",
      icon: Twitter,
    },
    {
      id: 3,
      name: "Instagram",
      icon: Instagram,
    },
    {
      id: 4,
      name: "Linkedin",
      icon: Linkedin,
    },
  ],
  footerLinks: [
    [
      {
        id: 1,
        title: "About us",
        url: "/",
      },
      {
        id: 2,
        title: "Service",
        url: "/",
      },

      {
        id: 3,
        title: "Contact us",
        url: "/",
      },
    ],
    [
      {
        id: 1,
        title: "Support",
        url: "/",
      },
      {
        id: 2,
        title: "Knowledge base",
        url: "/",
      },
    ],
    [
      {
        id: 1,
        title: "Jobs",
        url: "/",
      },
      {
        id: 2,
        title: "Our team",
        url: "/",
      },
      {
        id: 3,
        title: "Leadership",
        url: "/",
      },
      {
        id: 4,
        title: "Privacy Policy",
        url: "/",
      },
    ],
    [
      {
        id: 1,
        title: "Nordic Chair",
        url: "/",
      },
      {
        id: 2,
        title: "Kruzo Aero",
        url: "/",
      },
      {
        id: 3,
        title: "Ergonomic Chair",
        url: "/",
      },
    ],
  ],
  copyright: {
    description: "Copyright ©2023. All Rights Reserved.",
    links: [
      {
        id: 1,
        title: "Terms & Conditions",
        url: "/terms-and-conditions",
      },
      {
        id: 2,
        title: "Privacy Policy",
        url: "/privacy-policy",
      },
    ],
  },
};

//-----------------------------SHOP SECTION---------------------------------------------//

export const shopPageBanner = {
  backgroundBannerImage: "",
  heading: "Shop",
};

export const products = [
  {
    id: 1,
    productThumbnail: {
      id: 0,
      url: "/images/product1.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product1.png",
      },
    ],
    productName: "Nordic Chair",
    productPrice: "$50.00",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 2,
    productThumbnail: {
      id: 0,
      url: "/images/product2.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product2.png",
      },
      {
        id: 3,
        url: "/images/product2.png",
      },
    ],
    productName: "Kurzo Aero Chair",
    productPrice: "$78.00",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 3,
    productThumbnail: {
      id: 0,
      url: "/images/product3.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product3.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product3.png",
      },
    ],
    productName: "Ergonomic Chair",
    productPrice: "$43.00",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 4,
    productThumbnail: {
      id: 0,
      url: "/images/product1.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product1.png",
      },
      {
        id: 2,
        url: "/images/product1.png",
      },
      {
        id: 3,
        url: "/images/product1.png",
      },
    ],
    productName: "Ergonomic Chair",
    productPrice: "$43.00",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 5,
    productThumbnail: {
      id: 0,
      url: "/images/product2.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product2.png",
      },
      {
        id: 3,
        url: "/images/product2.png",
      },
    ],
    productName: "Ergonomic Chair",
    productPrice: "$43.00",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 6,
    productThumbnail: {
      id: 0,
      url: "/images/product3.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product3.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product3.png",
      },
    ],
    productName: "Ergonomic Chair",
    productPrice: "$43.00",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 7,
    productThumbnail: {
      id: 0,
      url: "/images/product1.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product1.png",
      },
      {
        id: 2,
        url: "/images/product1.png",
      },
      {
        id: 3,
        url: "/images/product1.png",
      },
    ],
    productName: "Ergonomic Chair",
    productPrice: "$43.00",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 8,
    productThumbnail: {
      id: 0,
      url: "/images/product2.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product2.png",
      },
      {
        id: 2,
        url: "/images/product2.png",
      },
      {
        id: 3,
        url: "/images/product2.png",
      },
    ],
    productName: "Ergonomic Chair",
    productPrice: "$43.00",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
  {
    id: 9,
    productThumbnail: {
      id: 0,
      url: "/images/product3.png",
    },
    productImages: [
      {
        id: 1,
        url: "/images/product3.png",
      },
      {
        id: 2,
        url: "/images/product3.png",
      },
      {
        id: 3,
        url: "/images/product3.png",
      },
    ],
    productName: "Ergonomic Chair",
    productPrice: "$43.00",
    productDescription:
      "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    reviewCount: 55,
    rating: 3,
  },
];
//-------------------------------------ABOUT US -------------------------------------------//

export const aboutUsPageBanner = {
  backgroundBannerImage: "/images/bannerImage.png",
  heading: "About Us",
  description:
    "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
};

// export const ourTeamData = {
//   title: "Our Team",
//   teamMember: [
//     {
//       id: 1,
//       image: "",
//       name: "Lawson Arnold",
//       designation: "CEO, Founder, Atty.",
//       description:
//         " in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
//       btnText: "Learn More",
//     },
//     {
//       id: 2,
//       image: "",
//       name: "Jeremy Walker",
//       designation: "CEO, Founder, Atty.",
//       description:
//         "in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
//       btnText: "Learn More",
//     },
//     {
//       id: 3,
//       image: "",
//       name: "Patrik White",
//       designation: "CEO, Founder, Atty.",
//       description:
//         "in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
//       btnText: "Learn More",
//     },
//     {
//       id: 4,
//       image: "",
//       name: "Kathryn Ryan",
//       designation: "CEO, Founder, Atty.",
//       description:
//         "in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
//       btnText: "Learn More",
//     },
//   ],
// };

//----------------------------SERVICES------------------------//

export const servicePageBanner = {
  backgroundBannerImage: "",
  heading: "About Us",
  description:
    "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
};

//-----------------------------CONTACT-US--------------------------//

export const contactUsPageBanner = {
  backgroundBannerImage: "/images/bannerImage.png",
  heading: "Contact Us",
  description:
    "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
};

export const contactDetails = [
  {
    id: 1,
    name: "Address",
    icon: Location,
    description: "43 Raymouth Rd. Baltemoer, London 3910",
  },
  {
    id: 2,
    name: "Email",
    icon: Email,
    description: "info@yourdomain.com",
  },
  {
    id: 3,
    name: "Phone-number",
    icon: Phone,
    description: "+1 294 3925 3939",
  },
];

// export const contactForm = {
//   name1: "First name",
//   name1: "Last name",
//   email: "Email Address",
//   message: "Message",
// };

//-----------------------------CART-------------------------------------//

export const cartPageBanner = {
  backgroundBannerImage: "",
  heading: "Cart",
};

export const cartPage = {
  cartHeaderList: [
    {
      id: 1,
      name: "Image",
    },
    {
      id: 2,
      name: "Product",
    },
    {
      id: 3,
      name: "Price",
    },
    {
      id: 4,
      name: "Quantity",
    },
    {
      id: 5,
      name: "Total",
    },
    {
      id: 6,
      name: "Remove",
    },
  ],
  cartProductList: [
    {
      id: 1,
      productImage: "/images/product1.png",
      productName: "Chair",
      productPrice: "$50.00",
    },
    {
      id: 2,
      productImage: "/images/product2.png",
      productName: "Chair",
      productPrice: "$50.00",
    },
    {
      id: 3,
      productImage: "/images/product3.png",
      productName: "Chair",
      productPrice: "$50.00",
    },
    {
      id: 4,
      productImage: "/images/product1.png",
      productName: "Chair",
      productPrice: "$50.00",
    },
    {
      id: 5,
      productImage: "/images/product2.png",
      productName: "Chair",
      productPrice: "$50.00",
    },
    {
      id: 6,
      productImage: "/images/product3.png",
      productName: "Chair",
      productPrice: "$50.00",
    },
  ],
  cartActionBtn1: "Update Cart",
  cartActionBtn2: "Continue shopping",
};

export const coupon = {
  heading: "Coupon",
  description: "Lorem a src jkuyyhur",
  CouponActionBtn: "Apply Code",
};

export const cartTotal = {
  heading: "Cart Totals ",
  subtotal: "Subtotal",
  total: "Total",
  checkoutActionBtn: "Proceed To Checkout",
};
//-----------------------------CHECKOUT FORM--------------------------//
