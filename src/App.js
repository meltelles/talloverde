import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

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
        path: "category/:id",
        element: <CategoryPage />
      }
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
