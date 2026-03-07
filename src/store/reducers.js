import { combineReducers } from "redux";

// Layout
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";

// Dashboard Ecommerce
import DashboardEcommerce from "./dashboardEcommerce/reducer";

const rootReducer = combineReducers({
  // public
  Login,
  Account,
  ForgetPassword,
  Profile,
  DashboardEcommerce,
  Layout
});

export default rootReducer;
