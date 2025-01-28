const Student = ({ student }) => {
  return (
    <tr>
      <th scope="row">{student.sid}</th>
      <td>{student.name}</td>
      <td>{student.course}</td>
      <td>
        {student.borrowedBook.map((book, index) => (
          <span key={index}>
            {book}
            <br />
          </span>
        ))}
      </td>
    </tr>
  );
};

export default Student;
