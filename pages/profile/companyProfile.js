import Sosmed from "@/components/molecules/sosmed";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/navbar";
import React from "react";
import { GrLocation } from "react-icons/gr";
import style from "../../styles/pages/companyProfile.module.scss"



export default function CompanyProfile() {

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={`card ${style.main}`}>
          <div className={style.overlay}></div>
          <div className="card-body">
            <img src="https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg" alt="profile" className={`rounded-circle ${style.pp}`} />
            <div className="container">
              <div className={`text-center ${style.content}`}>
                <h3>PT. Martabat Jaya Abadi</h3>
                <p>Finance</p>
                <p>
                  <GrLocation /> Purwokerto, Jawa Tegah
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                <button className={`btn btn-primary ${style.push}`}>Edit Profile</button>
                <div>
                <Sosmed />

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}