import Sosmed from "@/components/molecules/sosmed";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/navbar";
import React from "react";
import { GrLocation } from "react-icons/gr";
import style from "../../styles/pages/companyProfile.module.scss"



function CompanyProfile() {

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

                  <p><img src="/images/mail.svg" alt="mail" className="me-3" />Louist91@gmail.com</p>
                  <p><img src="/images/instagram.svg" alt="ig" className="me-3" />@Louist91</p>
                  <p><img src="/images/github.svg" alt="github" className="me-3" />@Louistommo</p>
                  <p><img src="/images/gitlab.svg" alt="gitlab" className="me-3" />@Louistommo91</p>
                  {/* <Sosmed /> */}

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

export default CompanyProfile;