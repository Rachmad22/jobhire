import React from "react";
import style from "../styles/pages/jobStyles.module.scss";
import Head from "next/head";
import { GrLocation } from "react-icons/gr"

function Job() {
  return (
    <>
      <Head>
        <title>Job List | Peworld</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Pacifico&family=Poppins:wght@300;500&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <div className="container py-5">
          <div className={`card border-0 shadow ${style.cardStyle}`}>
            <div className="row align-items-center">
              <div className="col-md-1">
                <img src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-set-avatar-image-vector-icon-stock-vector-design-avatar-dummy-sign-137159692.jpg" alt="profile" className={style.image} />
              </div>
              <div className={`col-md-8 ${style.profileContent}`}>
                <h2>Louis Tomlinson</h2>
                <p>Web Developer</p>
                <div className="d-flex align-items-center gap-2">
                  <GrLocation />
                  <p>Lorem ipsum</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  {/* {[1, 2, 3].map((item) => {
                    <span className={`badge text-bg-warning ${style.skillBadge}`} key={item}>html</span>
                  })} */}
                  <span className={`badge text-bg-warning ${style.skillBadge}`} >html</span>
                  <span className={`badge text-bg-warning ${style.skillBadge}`} >CSS</span>
                  <span className={`badge text-bg-warning ${style.skillBadge}`} >Javascript</span>
                </div>
              </div>
              <div className="col-md-2">
                <button type="button" className="btn btn-primary btn-lg">Lihat Profile</button>
              </div>
            </div>
          </div>
        </div>
      </main>
        {/* <!-- footer --> */}
        <footer id="foot">
        <div className={style.footer}>
          <h2>Eat, Cook, Repeat</h2>
          <p>Share your best recipe by uploading here !</p>
          <div className={style.footerLink}>
            <p>
              &copy Copyright 2022 by RNH. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* end-footer */}
    </>
  )
}

export default Job;

