import "./App.css";
import ProductList from "./features/product-list/components/ProductList";
import Home from "./pages/Home";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { CartPage } from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Product from "./features/product-list/components/ProductDetail";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "product-detail",
    element: <ProductDetailPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
