import { FaDribbble, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot, FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <>
      <div className="row mycolor sticky-top">
        <div className="col-sm-6 py-1 mycolor">
          <div className="row">
            <div className="col-6 py-1 text-end">
              <p className="text-light m-0 p-0 topnav">
                <FaRegEnvelope className="btncolor" /> Info@webmail.com
              </p>
            </div>
            <div className="col-6 py-1">
              <p className="text-light m-0 p-0 topnav">
                <FaLocationDot className="btncolor" /> 15/A, NestTower,NYC
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 py-1 text-center mx-auto ps-5">
          <div className="flex justify-center gap-3">
            <Link
              className="text-light mx-2"
              to="https://www.facebook.com/"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="text-light mx-2"
              to="https://x.com/i/flow/login?lang=en"
              target="_blank"
            >
              <FaTwitter />
            </Link>
            <Link
              className="text-light mx-2"
              to="https://www.instagram.com/accounts/login/?hl=en"
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link className="text-light mx-2">
              <FaDribbble />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
