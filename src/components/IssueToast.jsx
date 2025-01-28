import React from "react";

const IssueToast = ({ message, setToastVisible }) => {
  return (
    <div
      className="toast align-items-center show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">{message}</div>
        <button
          type="button"
          className="btn-close me-2 m-auto"
          aria-label="Close"
          onClick={() => setToastVisible(false)}
        ></button>
      </div>
    </div>
  );
};

export default IssueToast;
