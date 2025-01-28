import React, { useContext, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { StudentList } from "../store/provider";

const NewStudent = ({ setPopup }) => {
  const { addStudents } = useContext(StudentList);

  const sid = useRef();
  const name = useRef();
  const course = useRef();

  const handleAddButton = (e) => {
    e.preventDefault();
    addStudents(sid.current.value, name.current.value, course.current.value);
    setPopup(false);
  };
  return (
    <div className="forCard">
      <div className="insideCard">
        <h2 style={{ marginBottom: "10px" }}>
          Add New Student
          <IoIosCloseCircle
            size={35}
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => {
              setPopup(false);
            }}
          />
        </h2>
        <div className="cardInside">
          <form>
            <div className="form-container">
              <div className="mb-3">
                <label htmlFor="studentid" className="form-label">
                  Student ID:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="studentid"
                  placeholder="Enter Student ID"
                  ref={sid}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fName" className="form-label">
                  Full Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fName"
                  placeholder="Enter Student's Name"
                  ref={name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="course" className="form-label">
                  Course:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="course"
                  placeholder="Enter Course"
                  ref={course}
                />
              </div>

              {/* 
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date:
                  </label>
                  <input type="date" className="form-control" id="date" />
                </div> 
              */}

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleAddButton}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewStudent;
