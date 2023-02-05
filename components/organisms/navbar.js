import React from "react";
import Link from "next/link";
import style from "../../styles/pages/jobStyles.module.scss"
import axios from "axios";
import {BsBell, BsEnvelope} from "react-icons/Bs"

export default function Navbar({ item }) {


  return (
    <nav class="navbar bg-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="/images/purple.svg" alt="Logo" className={`d-inline-block align-text-top ${style.brandNav}`}/>
        </a>
        <div className="d-flex align-items-center gap-5">
        <BsBell style={{ width: "25px", height: "25px" }} />
        <BsEnvelope style={{ width: "25px", height: "25px" }} />

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
                  <a href="/">Profile</a>
                </li>
                <li>
                  <a href="/">Logout</a>
                </li>
              </ul>
            </div>

        </div>
      </div>
    </nav>
  );
}

