import { useContext } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import { ListedBooksContext } from "../Context/Context";
const BookDetails = () => {
    const navigate = useNavigate()
     const { addToWishlist } = useContext(ListedBooksContext);

       const handleAddToWishlist = () => {
    addToWishlist(book);
  };

  const book = useLoaderData(); // Now contains just one book

  if (!book) return <h1 className="text-center text-2xl mt-10">Book not found!</h1>;

  const {bookId, bookName, image, author, category, rating,review,tags,totalPages,publisher,yearOfPublishing } = book;

    const handleBack =()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1>Book Detials: {bookId}</h1>
           <div className="md:flex justify-between gap-5 mt-5">
           <div className="rounded-lg w-1/2  h-[650px] bg-green-50 flex justify-center items-center"> <img className="w-[425px] h-[564px] rounded-lg" src={image} alt="" /></div>
            <div className="w-1/2">
                <h1 className="text-2xl md:text-4xl font-bold">{bookName}</h1>
                <h1 className="my-3">By : {author}</h1>
                <hr className="my-3" />
                <h1>{category}</h1>
                <hr className="my-3" />
            <p className="my-3"><span className="font-bold">Review: </span>{review}</p>
                <div className="flex gap-7"><h1 className="font-bold">Tags : </h1>
                    <h1>{tags[0]}</h1>
                    <h1>{tags[1]}</h1>
                </div>
                <hr className="my-2" />
                <div className="flex gap-10">
                    <div className="space-y-2">
                        <h1>Number of Pages </h1>
                        <h1>Publisher  </h1>
                        <h1>Year of Publish  </h1>
                        <h1>Rating  </h1>
                    </div>

                    <div className="space-y-2">
                        <h1>: {totalPages}</h1>
                        <h1>: {publisher}</h1>
                        <h1>: {yearOfPublishing}</h1>
                        <h1>: {rating}</h1>
                    </div>
                </div>
                <div className="flex gap-10 mt-8">
                    <button className="btn">Read</button>
                    <button onClick={handleAddToWishlist} className="btn">Wishlish</button>
                </div>
            </div>
           </div>
            
            <button className="btn my-10" onClick={handleBack}>Back</button>
        </div>
    );
};

export default BookDetails;