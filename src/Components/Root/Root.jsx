import { useState } from "react";
import { ListedBooksContext } from "../Context/Context";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const ListedBooksProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (book) => {
    const alreadyAdded = wishlist.find(item => item.bookId === book.bookId);
    if (!alreadyAdded) {
      setWishlist([...wishlist, book]);
    }
  };

  return (
    <ListedBooksContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </ListedBooksContext.Provider>
  );
};

const Root = () => {
  return (
    <div className="w-10/12 mx-auto">
      <ListedBooksProvider>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </ListedBooksProvider>
    </div>
  );
};

export default Root;
