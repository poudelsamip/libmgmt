import React, { useContext, useRef, useState } from "react";
import { BookList, StudentList } from "../store/Provider";
import IssueToast from "./IssueToast";

const ReceiveBook = () => {
  const id = useRef();
  const sid = useRef();

  const [toastVisible, setToastVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  let { bookList, updateBooks } = useContext(BookList);
  let { studentList, updateStudents } = useContext(StudentList);

  const handleIssueBtn = (e) => {
    e.preventDefault();
    let newBookID = id.current.value;
    let newStudentID = sid.current.value;
    let bookFound = false;
    let studentFound = false;
    let currentBorrowedBook = "";
    let currentBorrowerStudent = "";
    let borrowed = true;
    bookList = bookList.map((book) => {
      if (book.id === newBookID) {
        currentBorrowedBook = book.title;
        bookFound = true;
        if (book.isAvailable) {
          borrowed = false;
          return book;
        } else return { ...book, isAvailable: true };
      }
      return book;
    });
    studentList = studentList.map((student) => {
      if (student.sid === newStudentID) {
        studentFound = true;
        currentBorrowerStudent = student.name;
        let newBorrowedBooksList = student.borrowedBook.filter(
          (book) => book !== currentBorrowedBook
        );
        return {
          ...student,
          borrowedBook: newBorrowedBooksList,
        };
      }
      return student;
    });
    let alertMsg = "";
    if (!borrowed) {
      alertMsg = `${currentBorrowedBook} can not be returned (Not Borrowed by anyone)`;
    } else if (bookFound && studentFound) {
      updateBooks(bookList);
      updateStudents(studentList);
      alertMsg = `${currentBorrowedBook} received from ${currentBorrowerStudent}`;
    } else if (!bookFound && !studentFound) {
      alertMsg = `Book id: ${newBookID} and Student id: ${newStudentID} do not exit in the database`;
    } else if (!bookFound) {
      alertMsg = `Book id: ${newBookID} does not exist in the database`;
    } else {
      alertMsg = `Student id: ${newStudentID} does not exist in the database`;
    }
    id.current.value = "";
    sid.current.value = "";

    setAlertMessage(alertMsg);
    setToastVisible(true);
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
        {toastVisible && (
          <div className="toast-container position-fixed top-0 end-0 p-3">
            <IssueToast
              message={alertMessage}
              setToastVisible={setToastVisible}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ReceiveBook;
