import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CustomProvider from "./components/CustomProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ItemListContainer />,
      },
      {
        path: "categories/:category",
        element: <ItemListContainer />,
      },
      {
        path: "items/:id",
        element: <ItemDetailContainer />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <CustomProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </CustomProvider>
    </>
  );
}

export default App;
