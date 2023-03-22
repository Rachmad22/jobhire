import React from "react";
import Link from "next/link";
import style from "../../styles/pages/jobStyles.module.scss"
import { BsBell, BsEnvelope } from "react-icons/bs"
import { getCookie } from "cookies-next";

export default function Navbar() {
  const profile = getCookie("profile") ? getCookie("profile") : null

  const [isLogin, setIsLogin] = React.useState(getCookie("token"))

  return (
    <nav class="navbar shadow bg-light fixed-top">
      <div class="container">
        <Link class="navbar-brand" href="/">
          <img src="/images/purple.svg" alt="Logo" className={`d-inline-block align-text-top ${style.brandNav}`} />
        </Link>
          {isLogin ? (
        <div className="d-flex align-items-center gap-5">
          <Link href="/profile/notification">
            <BsBell style={{ width: "25px", height: "25px" }} />
          </Link>
          <div>
            <BsEnvelope style={{ width: "25px", height: "25px" }} />
          </div>

            <div className="dropdown">
              <img
                src={JSON.parse(profile).photo_profile}
                alt="profile"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className={style.picture}
              />

              <ul
                className="dropdown-menu dropdown-menu-lg-end text-center"
              >
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <Link href="/auth/logout">Logout</Link>
                </li>
              </ul>
            </div>


        </div>
          ) : (
            <div className="ms-auto">
              <Link href="/auth/login">
                <button type="button" className="btn btn-light me-2">Log In</button>
              </Link>
              <Link href="/auth/signup">
                <button type="button" className="btn btn-primary">Sign Up</button>
              </Link>
            </div>
          )}
      </div>
    </nav>
  );
}

