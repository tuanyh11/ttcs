import {
  About,
  Account,
  Blog,
  BlogDetail,
  BlogList,
  Cate,
  Checkout,
  Contact,
  Home,
  ProductDetail,
  Shop,
  CateDetail,
  Cart,
  Wishlist,
  ResetPassword,
  Auth,
} from "../Pages";
import NotFound from "../Pages/NotFound";

export default [
  {
    path: "/home",
    name: "home",
    component: Home,
    index: false,
    children: [],
  },
  {
    path: "/about",
    name: "about",
    component: About,
    index: false,
    children: [],
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
    index: false,
    children: [],
  },
  {
    path: "/Categories",
    name: "Categories",
    component: Cate,
    index: false,
    children: [],
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
    index: false,
    children: [
      {
        path: "/blog",
        name: "blog",
        component: BlogList,
        index: false,
      },
      {
        path: ":slug",
        name: "blog",
        component: BlogDetail,
        index: false,
        children: [],
      },
    ],
  },

  {
    path: "/contact-us",
    name: "contact us",
    component: Contact,
    index: false,
    children: [],
  },
  {
    path: "/wishlist",
    name: "wish list",
    component: Wishlist,
    index: false,
    children: [],
  },
  {
    path: "/checkout",
    component: Checkout,
    index: false,
    children: [],
  },
  {
    path: "/categories",
    component: Cate,
    index: false,
    children: [],
  },
  {
    path: "/my-account",
    component: Account,
    index: false,
    children: [
      {
        path: "/my-account",
        component: Auth,
        index: true,
      },
      {
        path: "lost-password",
        component: ResetPassword,
        index: false,
      }
    ],
  },
  {
    path: "/product/:slug",
    component: ProductDetail,
    index: false,
    children: [],
  },
  {
    path: "/categories/:slug",
    name: "categories",
    component: CateDetail,
    index: false,
    children: [],
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    index: false,
    children: [],
  },
  {
    path: "*",
    name: "notfound",
    component: NotFound,
    index: false,
    children: [],
  },
];
