import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

const NavBar = () => {
  const navigate = useNavigate();
  const [useData, setUserData] = useState(null);
  // const [profileSrc, setProfileSrc] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setUserData(user);

    if (user?._id) {
      fetchData(user._id);
    }
    // const profile = localStorage.getItem('profilePic');
    // if (profile) setProfileSrc(profile);
  }, []);

  // const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (userId) => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/admin-user-list"
      );

      if (response?.data?.code === 200) {
        const users = response.data.data;
        const loggedInUser = users.find((u) => u._id === userId);

        if (loggedInUser) {
          setProfile(loggedInUser.profile);
        }
      }
      // const profile = response.data.data[0];
      // console.log(profile)

      // if(response?.data?.code == 200){
      //   setData(response?.data?.data)
      //   setProfile(response.data.data[0].profile);

      // }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    // localStorage.removeItem("profilePic");
    navigate("/login");
  };

  const ProfileImage = () => {
    <img
      src={`http://localhost:9000/uploads/${profile}`}
      alt="Profile"
      className="img-fluid rounded-circle"
      style={{ width: "40px", height: "40px", objectFit:"cover"}}
    />;
  };

  if (useData?.userType == "admin") {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
          <div className="container">
            <div className="navbar-brand text-danger fw-bold d-flex align-items-center">
              <img src="/img/favicon.png" alt="Logo" /> &nbsp;
              <b className="font text-center">QUIREX</b>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="mx-5 collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/admin-add">
                    Add
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/admin-list">
                    List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/admin-sold">
                    Sold
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/admin-user">
                    User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark fw-bold"
                    to="/admin-profile"
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark fw-bold"
                    to="/admin-contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div
                className="d-flex align-items-center gap-3"
                onClick={handleLogout}
              >
                {profile? (<img
                  src={`http://localhost:9000/uploads/${profile}`}
                    alt="<FaUserCircle/>"
                  className="img-fluid rounded-circle"
                  style={{ width: "40px", height: "40px", objectFit:"cover"}}
                />):(<FaUserCircle size={40} className="text-secondary" />)}

                <Link>
                  {" "}
                  <button className=" btn1  px-4 py-2 ">LogOut</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  } else if (useData?.userType == "user") {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
          <div className="container">
            <div className="navbar-brand text-danger fw-bold d-flex align-items-center">
              <img src="/img/favicon.png" alt="Logo" /> &nbsp;
              <b className="font text-center">QUIREX</b>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="mx-5 collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark fw-bold"
                    to="/user-property"
                  >
                    Property
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark fw-bold"
                    to="/user-bought"
                  >
                    Bought
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark fw-bold"
                    to="/user-profile"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
              <div
                className="d-flex align-items-center gap-3"
                 onClick={handleLogout}
              >
                {profile? (<img
                  src={`http://localhost:9000/uploads/${profile}`}
                  alt="<FaUserCircle/>"
                  className="img-fluid rounded-circle"
                  style={{ width: "40px", height: "40px", objectFit:"cover" }}
                />):(<FaUserCircle size={40} className="text-secondary" />)}

                <Link>
                  {" "}
                  <button className=" btn1  px-4 py-2 ">LogOut</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-white border-bottom shadow-sm sticky-top">
          <div className="container">
            <div className="navbar-brand text-danger fw-bold d-flex align-items-center">
              <img src="/img/favicon.png" alt="Logo" /> &nbsp;
              <b className="font text-center">QUIREX</b>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="mx-5 collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/properties">
                    Property
                  </Link>
                </li>
              </ul>
              <div className="d-flex align-items-center gap-3">
                <Link to="/register">
                  {" "}
                  <button className=" btn1 px-4 py-2  ">Registration</button>
                </Link>
                <Link to="/login">
                  {" "}
                  <button className=" btn1  px-4 py-2 ">Login</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
};

export default NavBar;
