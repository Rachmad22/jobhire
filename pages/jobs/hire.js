import Navbar from "@/components/organisms/navbar";
import React from "react";
import style from "../../styles/pages/hire.module.scss"
import axios from "axios";
import { GrLocation } from "react-icons/gr";

export default function Hire() {

  return (
    <>
      <Navbar />
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

                <h5>Skill</h5>

                <div className="d-flex gap-2 flex-wrap mt-3">
                  {/* <Skill item={{ skills: JSON.parse(profile.skills) }} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// export async function getServerSideProps(context) {

//   const hire = await axios.post(
//     `${process.env.NEXT_PUBLIC_API_URL}/v1/user/invitation`
//   );
//   console.log(hire)
//   // const convertData = hire.data.data[0];

//   return {
//     props: {
//       hire: convertData,
//     }, // will be passed to the page component as props
//   };
// }