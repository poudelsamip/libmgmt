import { useEffect, useReducer } from "react";
import { createContext } from "react";

export const BookList = createContext({
  bookList: [],
  addBook: () => {},
  updateBooks: () => {},
});

const bookReducer = (currentList, action) => {
  let newBookList = currentList;
  if (action.type === "ADD_BOOK") {
    newBookList = [...currentList, action.payload];
    localStorage.setItem("BookList", JSON.stringify(newBookList));
  } else if (action.type === "UPDATE_BOOK_LIST") {
    newBookList = action.payload.newList;
    localStorage.setItem("BookList", JSON.stringify(newBookList));
  }
  return newBookList;
};

export const StudentList = createContext({
  studentList: [],
  addStudents: () => {},
  updateStudents: () => {},
});

const studentReducer = (currentList, action) => {
  let newStudentList = currentList;
  if (action.type === "ADD_STUDENT") {
    newStudentList = [...currentList, action.payload];
    localStorage.setItem("StudentList", JSON.stringify(newStudentList));
  } else if (action.type === "UPDATE_BORROW_ARRAY") {
    newStudentList = action.payload.newList;
    localStorage.setItem("StudentList", JSON.stringify(newStudentList));
  }
  return newStudentList;
};

const MainProvider = ({ children }) => {
  const storedBooks = JSON.parse(localStorage.getItem("BookList")) || [];
  const storedStudents = JSON.parse(localStorage.getItem("StudentList")) || [];
  const [bookList, bookDispatch] = useReducer(bookReducer, storedBooks);
  const [studentList, studentDispatch] = useReducer(
    studentReducer,
    storedStudents
  );

  // useEffect(() => {
  //   localStorage.getItem;
  // }, []);

  const addStudents = (sid, name, course) => {
    studentDispatch({
      type: "ADD_STUDENT",
      payload: {
        sid,
        name,
        course,
        borrowedBook: [],
      },
    });
  };

  const updateStudents = (newList) => {
    studentDispatch({
      type: "UPDATE_BORROW_ARRAY",
      payload: {
        newList,
      },
    });
  };

  const addBook = (id, title, author) => {
    bookDispatch({
      type: "ADD_BOOK",
      payload: {
        id,
        title,
        author,
        isAvailable: true,
      },
    });
  };

  const updateBooks = (newList) => {
    bookDispatch({
      type: "UPDATE_BOOK_LIST",
      payload: {
        newList,
      },
    });
  };

  return (
    <BookList.Provider value={{ bookList, addBook, updateBooks }}>
      <StudentList.Provider
        value={{ studentList, addStudents, updateStudents }}
      >
        {children}
      </StudentList.Provider>
    </BookList.Provider>
  );
};

export default MainProvider;
