import Navbar from "@/components/organisms/navbar";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import style from "@/styles/pages/hire.module.scss"
import axios from "axios";
import { GrLocation } from "react-icons/gr";
import Footer from "@/components/organisms/Footer";
import { getCookie } from "cookies-next";
import Skill from "@/components/molecules/skillProfile";
import { useRouter } from "next/router";
import Swal from "sweetalert2";


export default function Hire(props) {
 const { profile } = props
 const router = useRouter();
 const {
  query: { id },
 } = router;

 const profileTalent = profile?.user

 // hiring form
 const [purpose, setPurpose] = React.useState("")
 const [fullname, setFullname] = React.useState("")
 const [email, setEmail] = React.useState("")
 const [phone_number, setPhone_number] = React.useState(null)
 const [description, setDescription] = React.useState("")

 const [isLoading, setIsLoading] = React.useState(false)
 const [errorMsg, setErrorMsg] = React.useState("")

 const hire = async () => {
  setIsLoading(true)
  const token = getCookie("token");

  const config = {
   headers: {
    Authorization: `Bearer ${token}`,
   },
  };

  await axios.post(
   `${process.env.NEXT_PUBLIC_API_URL}/v1/user/invitation`, {
   user_id: id,
   purpose,
   fullname,
   email,
   phone_number,
   description,
  }, config
  )
   .then((res) => {
    setIsLoading(false)
    Swal.fire({
     position: 'top-end',
     icon: 'success',
     title: res?.data?.messages,
     showConfirmButton: false,
     timer: 1500
    })
    console.log(res?.data?.messages)
   })
   .catch((err) => {
    setIsLoading(false)
    Swal.fire({
     icon: 'error',
     title: 'Oops...',
     text: 'Something went wrong!',
    })
    setErrorMsg(err?.response?.data?.message ?? err?.response?.data?.message?.purpose?.message ?? err?.response?.data?.message?.description?.message ?? err?.response?.data?.message?.fullname?.message ?? err?.response?.data?.message?.email?.message ?? err?.response?.data?.message?.phone_number?.message)
   })
 }

 return (
  <>
   <Head>
    <title>{id} | Hire Jobs</title>
   </Head>
   <Navbar />
   <div className={style.overlay}></div>
   <div className="container">
    <div className="row gap-3">
     <div className="col-md-4">
      <div className={`card shadow ${style.left}`}>
       <img src={profileTalent?.photo_profile || "https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg"} className={`card-img-top ${style.picture}`} alt="picture" />
       <div className="card-body">
        <h5 className="card-title">{profileTalent?.fullname}</h5>
        <p className="card-text">{profile?.job}</p>
        <p className={`card-text ${style.detail}`}><GrLocation /> {profile?.domicile}</p>
        <p className={`card-text ${style.detail}`}>Freelancer</p>
        <p className={`card-text ${style.detail}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
        <div>
         <h5>Skills</h5>

         <div className="d-flex gap-2 flex-wrap mt-3">
          {JSON.parse(profile?.skills).length === 0 ? <h5>No update skills</h5> : null}
          <Skill item={{ skills: JSON.parse(profile.skills) }} />

         </div>
        </div>

       </div>
      </div>
     </div>

     <div className="col-7">
      <div className="card shadow" style={{ marginTop: "100px", marginBottom: "100px", zIndex: 5 }}>
       <div className="card-header">
        <h4>Connect to Louis Tomlinson</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
       </div>

       <div className="card-body">

        {/* hiring form */}
        <form>
         <div class="form-floating mb-3">
          <input type="text" class="form-control" id="proposalmessage" placeholder="Project" onChange={(e) => setPurpose(e.target.value)} />
          <label for="proposalmessage">purpose Message</label>
         </div>

         <div class="form-floating mb-3">
          <input type="text" class="form-control" id="fullname" placeholder="fullname" onChange={(e) => setFullname(e.target.value)} />
          <label for="fullname">Full Name</label>
         </div>

         <div class="form-floating mb-3">
          <input type="email" class="form-control" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <label for="email">Email</label>
         </div>

         <div class="form-floating mb-3">
          <input type="number" class="form-control" id="handphone" placeholder="Handphone" onChange={(e) => setPhone_number(e.target.value)} />
          <label for="handphone">Handphone</label>
         </div>

         <div class="form-floating mb-5">
          <textarea type="text" class="form-control" id="desc" placeholder="Describe the job" style={{ height: "120px" }} onChange={(e) => setDescription(e.target.value)}></textarea>
          <label for="desc">Describe the job</label>
         </div>

         <div class="d-grid mb-3">
          <button class="btn btn-warning text-light fw-bold" type="submit" onClick={hire} disabled={isLoading}>{isLoading ? "Loading..." : "Hire"}</button>
         </div>

        </form>
       </div>
      </div>
     </div>

    </div>
   </div>

   <Footer />
  </>
 )
}

export async function getServerSideProps(context) {
 const {
  query: { id },
 } = context;
 const profile = await axios.get(
  `${process.env.NEXT_PUBLIC_API_URL}/v1/user/detail/${id}`
 );
 const convertData = profile?.data?.data[0];

 return {
  props: {
   profile: convertData,
  }, // will be passed to the page component as props
 };
}