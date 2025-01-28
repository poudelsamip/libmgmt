import { useContext } from "react";
import Book from "./Book";
import { BookList } from "../store/provider";

const BookTable = () => {
  const { bookList } = useContext(BookList);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Book ID</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Available</th>
        </tr>
      </thead>
      <tbody>
        {bookList.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
