import { useContext } from "react";
import Student from "./Student";
import { StudentList } from "../store/provider";

const StudentTable = () => {
  const { studentList } = useContext(StudentList);
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
        {studentList.map((student) => (
          <Student key={student.sid} student={student} />
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
