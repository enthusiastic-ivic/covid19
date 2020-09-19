import React from "react";
import "./with-spinner.styles.scss";

const WithSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading, ...props }) => {
    return isLoading ? (
      <WrappedComponent {...props} />
    ) : (
      <div className="loader"></div>
    );
  };
  return spinner;
};

export default WithSpinner;
