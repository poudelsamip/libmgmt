import React, { useContext, useState } from "react";
import { BookList } from "../store/provider";
import Book from "./Book";
import NewBook from "./NewBook";
import BookTable from "./BookTable";
import Empty from "./Empty";

const AllBooks = () => {
  const { bookList } = useContext(BookList);
  const [popup, setPopup] = useState(false);
  const handleClick = () => {
    setPopup(!popup);
  };
  return (
    <>
      {popup && <NewBook setPopup={setPopup} />}
      {!popup && (
        <div className="forBorder">
          <center style={{ marginTop: "10px" }}>
            <h2>Book List</h2>
          </center>
          <div className="buttonContainer">
            <button
              id="addToTable"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Add new book
            </button>
          </div>
          {bookList.length === 0 && <Empty name={"Book"} />}
          {bookList.length !== 0 && <BookTable />}
        </div>
      )}
    </>
  );
};

export default AllBooks;
