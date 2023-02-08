// import axios from "axios";
import React from "react";
import style from "../styles/pages/profile.module.scss";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/Footer";
import { GrLocation } from "react-icons/gr";
import Head from "next/head";
import Portofolio from "@/components/molecules/portofolio"
import Skill from "@/components/molecules/skillProfile";
import Sosmed from "@/components/molecules/sosmed";

function Profile() {
  return (
    <>
      <Head>
        <title>Profile | Peworld</title>
      </Head>
      <main>
        <Navbar />
        <div className={style.overlay}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">

              <div className={`card ${style.left}`}>
                <img src="https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg" className={`card-img-top ${style.picture}`} alt="picture" />
                <div className="card-body">
                  <h5 className="card-title">Louis Tomlinson</h5>
                  <p className="card-text">Web Developer</p>
                  <p className={`card-text ${style.detail}`}><GrLocation /> Purwokerto, Jawa Tegah</p>
                  <p className={`card-text ${style.detail}`}>Freelancer</p>
                  <p className={`card-text ${style.detail}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                  <div className="d-grid mt-5">
                    <button className="btn btn-primary btn-lg mb-3">Hire</button>
                  </div>
                  <h5>Skill</h5>

                  <div className="d-flex gap-2 flex-wrap mt-3">
                    <Skill />

                    <div className="mt-3">
                      <Sosmed />
                    </div>
                  </div>

                </div>

              </div>
            </div>
            <div className="col-md-8">
              <div className={style.index}>
                <Portofolio />

              </div>
            </div>

          </div>
        </div>
      </main>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
