import React, { useContext, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { BookList } from "../store/provider";

const NewBook = ({ setPopup }) => {
  const { addBook } = useContext(BookList);

  const id = useRef();
  const title = useRef();
  const author = useRef();

  const handleNewBook = (e) => {
    e.preventDefault();
    addBook(id.current.value, title.current.value, author.current.value);
    setPopup(false);
  };

  return (
    <div className="forCard">
      <div className="insideCard">
        <h2 style={{ marginBottom: "10px" }}>
          Add New Book
          <IoIosCloseCircle
            size={35}
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => {
              setPopup(false);
            }}
          />
        </h2>
        <div className="cardInside">
          <form>
            <div className="form-container">
              <div className="mb-3">
                <label htmlFor="studentid" className="form-label">
                  Book ID:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="studentid"
                  placeholder="Enter Book ID"
                  ref={id}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bookTitle" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bookTitle"
                  placeholder="Enter Title"
                  ref={title}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bookAuthor" className="form-label">
                  Author:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bookAuthor"
                  placeholder="Enter Author"
                  ref={author}
                />
              </div>

              {/* 
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date:
                  </label>
                  <input type="date" className="form-control" id="date" />
                </div> 
              */}

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleNewBook}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBook;
