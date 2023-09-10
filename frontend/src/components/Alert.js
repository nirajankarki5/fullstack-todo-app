import React, { useEffect } from "react";

const Alert = ({ alert, setAlert }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ show: false });
    }, 3000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className={`alert-container ${alert.type}`}>
      <p>{alert.msg}</p>
    </div>
  );
};

export default Alert;
