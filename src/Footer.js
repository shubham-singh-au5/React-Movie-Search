import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <div className="navbar fixed-bottom navbar-dark bg-dark justify-content-center">
        <div className = "row">
          <button className='btn btn-light'> Previous  </button>
          <button className='btn btn-light ml-2'> Next  </button>
        </div>
      </div>
    </>
  );
};
export default Footer;
