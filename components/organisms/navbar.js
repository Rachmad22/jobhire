import React from "react";
import Link from "next/link";
import style from "../../styles/pages/jobStyles.module.scss"
import { BsBell, BsEnvelope } from "react-icons/bs"

export default function Navbar() {

  return (
    <nav class="navbar shadow bg-light fixed-top">
      <div class="container">
        <Link class="navbar-brand" href="/">
          <img src="/images/purple.svg" alt="Logo" className={`d-inline-block align-text-top ${style.brandNav}`} />
        </Link>
        <div className="d-flex align-items-center gap-5">
          <Link href="/profile/notification">
          <BsBell style={{ width: "25px", height: "25px" }} />
          </Link>
          <div>
          <BsEnvelope style={{ width: "25px", height: "25px" }} />
          </div>

          <div className="dropdown">
            <img
              src="https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg"
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
      </div>
    </nav>
  );
}

