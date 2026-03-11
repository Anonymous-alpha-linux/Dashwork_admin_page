import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

// Dashboard
const DashboardEcommerce = lazy(() => import("../pages/DashboardEcommerce"));

// Authentication
const Login = lazy(() => import("../pages/Authentication/Login"));
const ForgetPasswordPage = lazy(
  () => import("../pages/Authentication/ForgetPassword")
);
const Logout = lazy(() => import("../pages/Authentication/Logout"));
const Register = lazy(() => import("../pages/Authentication/Register"));

// Ecommerce - Products
const EcommerceProducts = lazy(
  () => import("../pages/Ecommerce/EcommerceProducts/index")
);
const EcommerceProductDetail = lazy(
  () => import("../pages/Ecommerce/EcommerceProducts/EcommerceProductDetail")
);
const EcommerceAddProduct = lazy(
  () => import("../pages/Ecommerce/EcommerceProducts/EcommerceAddProduct")
);

// Ecommerce - Orders
const EcommerceOrders = lazy(
  () => import("../pages/Ecommerce/EcommerceOrders/index")
);
const EcommerceOrderDetail = lazy(
  () => import("../pages/Ecommerce/EcommerceOrders/EcommerceOrderDetail")
);

// Ecommerce - Others
const EcommerceCustomers = lazy(
  () => import("../pages/Ecommerce/EcommerceCustomers/index")
);
const EcommerceCart = lazy(() => import("../pages/Ecommerce/EcommerceCart"));
const EcommerceCheckout = lazy(
  () => import("../pages/Ecommerce/EcommerceCheckout")
);
const EcommerceSellers = lazy(
  () => import("../pages/Ecommerce/EcommerceSellers/index")
);
const EcommerceSellerDetail = lazy(
  () => import("../pages/Ecommerce/EcommerceSellers/EcommerceSellerDetail")
);

const authProtectedRoutes = [
  { path: "/dashboard", component: <DashboardEcommerce /> },
  { path: "/index", component: <DashboardEcommerce /> },
  // App
  { path: "/apps-ecommerce-products", component: <EcommerceProducts /> },
  {
    path: "/apps-ecommerce-product-details",
    component: <EcommerceProductDetail />
  },
  { path: "/apps-ecommerce-add-product", component: <EcommerceAddProduct /> },
  { path: "/apps-ecommerce-orders", component: <EcommerceOrders /> },
  {
    path: "/apps-ecommerce-order-details",
    component: <EcommerceOrderDetail />
  },
  { path: "/apps-ecommerce-customers", component: <EcommerceCustomers /> },
  { path: "/apps-ecommerce-cart", component: <EcommerceCart /> },
  { path: "/apps-ecommerce-checkout", component: <EcommerceCheckout /> },
  { path: "/apps-ecommerce-sellers", component: <EcommerceSellers /> },
  {
    path: "/apps-ecommerce-seller-details",
    component: <EcommerceSellerDetail />
  },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />
  },
  { path: "*", component: <Navigate to="/dashboard" /> }
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> }
];

export { authProtectedRoutes, publicRoutes };
