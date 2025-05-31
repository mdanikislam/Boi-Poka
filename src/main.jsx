import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import ErrorPage from "./Components/Errorpage/ErrorPage.jsx";
import BookDetails from "./Components/BookDetails/BookDetails.jsx";
import ListedBooks from "./Components/ListedBooks/ListedBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("booksData.json"),
        element: <Home></Home>,
      },

      // path:'/home/:bookId',
      // element:<BookDetails></BookDetails>,
      // loader:()=>fetch('booksData.json')
      {
        path: "/home/:bookId",
        element: <BookDetails />,
        loader: async ({ params }) => {
          const res = await fetch("booksData.json");
          const data = await res.json();
          const book = data.find((b) => b.bookId === parseInt(params.bookId));
          return book;
        },
      },
      {
        path:"listedBooks",
        element:<ListedBooks></ListedBooks>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
