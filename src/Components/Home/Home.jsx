import { useLoaderData } from "react-router-dom";
import bannerImg from "../../assets/books.jpg";
import Book from "../Book/Book";
const Home = () => {
    const books =useLoaderData();
  return (
    <div>
      <div className="hero bg-green-50 rounded-lg text-black py-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerImg} className="md:max-w-sm  rounded-lg shadow-2xl" />
          <div>
            <h1 className="md:text-5xl text-2xl my-5 font-bold">Books to freshen up your bookshelf</h1>
           
            <button className="btn btn-primary">View The List</button>
          </div>
        </div>
      </div>

      <div className="my-10">
        <h1 className="text-center my-5 text-3xl font-bold">Books: {books.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                books.map(book=><Book key={book.bookId} book={book}></Book>)
            }
        </div>
      </div>
    </div>
  );
};

export default Home;
