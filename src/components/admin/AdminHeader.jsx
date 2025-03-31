import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header id="header" className="fixed-top navnav">
      <div className="container d-flex align-items-start" style={{ marginLeft: "0px" }}>
        <Link to="/" className="logo">
          <img src="assets/img/hhasnip.png" alt="" className="img-fluid" />
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link className="nav-link scrollto" to="/admin/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/admin/job_list">
                Jobs
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/admin/post_list">
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;