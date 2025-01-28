import React from "react";

const Book = ({ book }) => {
  return (
    <tr>
      <th scope="row">{book.id}</th>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.isAvailable ? "Yes" : "No"}</td>
    </tr>
  );
};

export default Book;
