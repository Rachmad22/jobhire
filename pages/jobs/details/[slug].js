import React, { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/Footer";
import Skill from "@/components/molecules/skillProfile";
import Sosmed from "@/components/molecules/sosmed";
import style from "../../../styles/pages/profile.module.scss"
import { GrLocation } from "react-icons/gr";
import Portofolio from "@/components/molecules/portofolio";
import { getCookie } from "cookies-next";

function DetailProfile(props) {
 const { profile } = props;
 const router = useRouter();
 const {
  query: { slug },
 } = router;

 // const ski = JSON.parse(profile?.skills)
 // console.log(ski);

 const [isDisabled, setIsDisabled] = React.useState(false)

 const recruiter = JSON.parse(getCookie("profile")).recruiter_id

 useEffect(() => {
  if (recruiter === 0) {
   setIsDisabled(true)
  } else {
   setIsDisabled(false)
  }
 }, [])
 // console.log(recruiter)
 return (
  <>
   <Head>
    <title>{slug} | Detail Talent</title>
   </Head>
   <main>
    <Navbar />
    <div className={style.overlay}></div>
    <div className="container">
     <div className="row">
      <div className="col-md-4">

       <div className={`card ${style.left}`}>
        <img src={profile.user.photo_profile} className={`card-img-top ${style.picture}`} alt="picture" />
        <div className="card-body">
         <h5 className="card-title">{profile.user.fullname || "Unknown"}</h5>
         <p className="card-text">{profile.job}</p>
         <p className={`card-text ${style.detail}`}><GrLocation /> {profile.domicile}</p>
         <p className={`card-text ${style.detail}`}>{profile.company}</p>
         <p className={`card-text ${style.detail}`}>{profile.description}</p>
         <div className="d-grid mt-5">
          <Link href={!isDisabled ? `/jobs/hire/${slug}` : "#"}>
           <button className="btn btn-primary mb-3 text-white" style={{ width: "300px" }} disabled={isDisabled}>Hire</button>
          </Link>
         </div>

         <div>
          <h5>Skill</h5>

          <div className="d-flex gap-2 flex-wrap mt-3">
           {JSON.parse(profile?.skills).length === 0 ? <h5>No update skills</h5> : null}

           <Skill item={{ skills: JSON.parse(profile.skills) }} />

          </div>

          <div className="mt-3">
           <Sosmed item={{ email: profile.user.email }} />
          </div>
         </div>

        </div>

       </div>
      </div>
      <div className="col-md-8">
       <div className={style.index}>
        <Portofolio item={{
         portofolio: profile?.portfolios,
         link: profile['portofolios.link'],
         photo: profile['portfolios.photo'],
         type: profile['portfolios.type'],
         work_experience: profile?.work_experiences,
         createdAt: profile['work_experiences.createdAt'],
         position: profile['work_experiences.position'],
         company: profile['work_experiences.company'],
         description: profile['work_experiences.description'],
        }} />

       </div>
      </div>

     </div>
    </div>
   </main>
   <Footer />
  </>
 );
}

export async function getServerSideProps(context) {
 const {
  query: { slug },
 } = context;

 const profile = await axios.get(
  `${process.env.NEXT_PUBLIC_API_URL}/v1/user/detail/${slug}`
 );
 const convertData = profile?.data?.data[0];

 return {
  props: {
   profile: convertData,
  }, // will be passed to the page component as props
 }
}

export default DetailProfile;