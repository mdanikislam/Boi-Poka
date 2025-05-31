import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookId,bookName, author, image, rating, category} = book


    return (
        <Link to={`/home/${bookId}`} >
        <div>
            <div className="border-2 p-3 rounded-lg">
               <div className="rounded-lg  h-[230px] bg-green-50 flex justify-center items-center"> <img className="w-[125px] h-[166px]" src={image} alt="" /></div>
               <div className=" flex justify-between my-3">
                <button>Youg Adult</button>
                <button>Identity</button>
               </div>
               <h1 className="text-2xl font-bold my-2">{bookName}</h1>
               <p className="my-2">By : {author}</p>
               <div className="flex justify-between my-3">
                <h1>{category}</h1>
                <div className="flex gap-2">
                    <h1>{rating}</h1>
                    <button>star</button>
                </div>
               </div>

            </div>
        </div></Link>
    );
};

export default Book;