import React, { useContext, useRef } from "react";
import { BookList, StudentList } from "../store/provider";

const IssueBook = () => {
  const id = useRef();
  const sid = useRef();

  let { bookList, updateBooks } = useContext(BookList);
  let { studentList, updateStudents } = useContext(StudentList);

  const handleIssueBtn = (e) => {
    e.preventDefault();
    let currentBorrowedBook = "";
    bookList = bookList.map((book) => {
      if (book.id === id.current.value) {
        currentBorrowedBook = book.title;
        return { ...book, isAvailable: false };
      }
      return book;
    });
    updateBooks(bookList);
    studentList = studentList.map((student) => {
      if (student.sid === sid.current.value) {
        return {
          ...student,
          borrowedBook: [...student.borrowedBook, currentBorrowedBook],
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
        <h2 style={{ margin: "20px 0 0 50px" }}>Issue Book</h2>
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
                Issue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default IssueBook;
