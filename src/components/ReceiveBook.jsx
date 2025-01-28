import React, { useContext, useRef } from "react";
import { BookList, StudentList } from "../store/provider";

const ReceiveBook = () => {
  const id = useRef();
  const sid = useRef();

  let { bookList, updateBooks } = useContext(BookList);
  let { studentList, updateStudents } = useContext(StudentList);

  const handleIssueBtn = (e) => {
    e.preventDefault();
    let currentBook = "";
    bookList = bookList.map((book) => {
      if (book.id === id.current.value) {
        currentBook = book.title;
        return { ...book, isAvailable: true };
      }
      return book;
    });
    updateBooks(bookList);
    studentList = studentList.map((student) => {
      if (student.sid === sid.current.value) {
        let newBorrowedBooksList = student.borrowedBook.filter(
          (book) => book !== currentBook
        );
        return {
          ...student,
          borrowedBook: newBorrowedBooksList,
        };
      }
      return student;
    });
    updateStudents(studentList);
    id.current.value = "";
    sid.current.value = "";
  };

  return (
    <>
      <div className="forBorder">
        <h2 style={{ margin: "20px 0 0 50px" }}>Receive Book</h2>
        <div className="formDiv">
          <form>
            <div className="form-container">
              <div className="mb-3">
                <label htmlFor="bookID" className="form-label">
                  Book ID:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bookID"
                  placeholder="Enter Book ID"
                  ref={id}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="student" className="form-label">
                  Student ID:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="student"
                  placeholder="Enter Students Name"
                  ref={sid}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleIssueBtn}
              >
                Receive
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReceiveBook;
