import { useContext } from "react";
import Student from "./Student";
import { StudentList } from "../store/provider";

const StudentTable = ({ searchValue }) => {
  const { studentList } = useContext(StudentList);
  const filteredStudentList = searchValue
    ? studentList.filter((student) =>
        student.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    : studentList;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">SID</th>
          <th scope="col">Name</th>
          <th scope="col">Course</th>
          <th scope="col">Borrowed Books</th>
        </tr>
      </thead>
      <tbody>
        {filteredStudentList.map((student) => (
          <Student key={student.sid} student={student} />
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
