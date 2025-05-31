import { useContext } from "react";
import { ListedBooksContext } from "../Context/Context";
const ListedBooks = () => {
     const { wishlist } = useContext(ListedBooksContext);
    return (
       <div>
      <h1 className="text-2xl font-bold my-5">Wishlist Books ({wishlist.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {wishlist.map(book => (
          <div key={book.bookId} className="border p-4 rounded shadow">
            <img src={book.image} alt={book.bookName} className="w-24 h-32 object-cover mx-auto" />
            <h2 className="text-xl font-semibold mt-2">{book.bookName}</h2>
            <p>Author: {book.author}</p>
            <p>Rating: {book.rating}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default ListedBooks;