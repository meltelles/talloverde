import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "products",
        element: <ProductsPage />
      },
      {
        path: "products/:id",
        element: <ProductPage />
      },
    ]
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
