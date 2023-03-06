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
  Dashboard,
  OrderPage,
  IndexPage,
  DownloadPage,
  AddressPage,
  AccountDetail
} from "../Pages";
import NotFound from "../Pages/NotFound";
import {ProtectedRouter} from "../Components"

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
        path: "",
        name: "blog",
        component: BlogList,
        index: true,
        children: [],
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
        path: "",
        component:  ProtectedRouter((user, Nav) => user? <Dashboard/> : <Nav to="/my-account/auth"/> ) ,
        index: true,
        children : [
          {
            path: "",
            component: IndexPage,
            index: true,
          },
          {
            path: "orders",
            component: OrderPage,
            index: true,
          },
          {
            path: "downloads",
            component: DownloadPage,
            index: true,
          },
          {
            path: "addresses",
            component: AddressPage,
            index: true,
          },
          {
            path: "account-details",
            component: AccountDetail,
            index: true,
          }
        ],
      },
      {
        path: "auth",
        component: ProtectedRouter((user, Nav) => !user? <Auth/> : <Nav to="/my-account/"/> ),
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
