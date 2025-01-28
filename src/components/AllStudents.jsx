import React, { useContext, useState } from "react";
import { StudentList } from "../store/provider";
import Student from "./Student";
import NewStudent from "./NewStudent";
import Empty from "./Empty";
import StudentTable from "./StudentTable";

const AllStudents = () => {
  const { studentList } = useContext(StudentList);
  const [popup, setPopup] = useState(false);
  const handleAddBtn = () => {
    setPopup(!popup);
  };
  return (
    <>
      {popup && <NewStudent setPopup={setPopup} />}
      {!popup && (
        <div className="forBorder">
          <center style={{ marginTop: "10px" }}>
            <h2>Students List</h2>
          </center>
          <div className="buttonContainer">
            <button
              id="addToTable"
              className="btn btn-primary"
              onClick={handleAddBtn}
            >
              Add new student
            </button>
          </div>
          {studentList.length === 0 && <Empty name={"Student"} />}
          {studentList.length !== 0 && <StudentTable />}
        </div>
      )}
    </>
  );
};

export default AllStudents;
