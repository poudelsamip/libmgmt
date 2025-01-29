import { useContext } from "react";
import Book from "./Book";
import { BookList } from "../store/provider";

const BookTable = ({ searchValue }) => {
  const { bookList } = useContext(BookList);

  const filteredBookList = searchValue
    ? bookList.filter((book) =>
        book.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : bookList;

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
        {filteredBookList.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
