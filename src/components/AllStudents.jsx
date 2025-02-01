import React, { useContext, useState } from "react";
import { StudentList } from "../store/provider";
import NewStudent from "./NewStudent";
import Empty from "./Empty";
import StudentTable from "./StudentTable";

const AllStudents = () => {
  const { studentList } = useContext(StudentList);
  const [popup, setPopup] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

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
            {studentList.length !== 0 && (
              <input
                type="search"
                className="searchBox"
                value={searchValue}
                onChange={onChange}
                placeholder="Search Student"
              />
            )}
            <button
              id="addToTable"
              className="btn btn-primary"
              onClick={handleAddBtn}
            >
              Add Student
            </button>
          </div>
          {studentList.length === 0 && <Empty name={"Student"} />}
          {studentList.length !== 0 && (
            <StudentTable searchValue={searchValue} />
          )}
        </div>
      )}
    </>
  );
};

export default AllStudents;
