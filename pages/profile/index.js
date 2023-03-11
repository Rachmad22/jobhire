import React from "react";
import style from "../../styles/pages/profile.module.scss";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/Footer";
import { GrLocation, GrUpdate } from "react-icons/gr";
import Head from "next/head";
import Portofolio from "@/components/molecules/portofolio";
import Skill from "@/components/molecules/skillProfile";
import Sosmed from "@/components/molecules/sosmed";
import axios from "axios";
import { getCookie } from "cookies-next";
import Swal from "sweetalert2";

function Profile(props) {
 const { detailProfile } = props
 // console.log(detailProfile?.data?.[0])

 const userDetail = detailProfile?.data?.[0]
 const user = detailProfile?.data?.[0]?.user

 const [isLoading, setIsLoading] = React.useState(false)
 const [error, setError] = React.useState("")

 const [fullname, setFullname] = React.useState("")
 const [jobdesc, setJobdesc] = React.useState("")
 const [domicile, setDomicile] = React.useState("")
 const [workplace, setWorkplace] = React.useState("")
 const [desc, setDesc] = React.useState("")

 const [skillsEntered, setSkillsEntered] = React.useState([]);
 const [skillsValue, setSkillsValue] = React.useState("");
 // const [skills, setSkills] = React.useState([])
 // console.log(skillsEntered);

 const [position, setPosition] = React.useState("")
 const [company, setCompany] = React.useState("")
 const [year, setYear] = React.useState("")
 const [description, setDescription] = React.useState("")

 // get data from cookie
 const token = getCookie("token");

 const config = {
  headers: {
   Authorization: `Bearer ${token}`,
  },
 }

 const updateProfile = async () => {
  setIsLoading(true)
  await axios.patch(
   `${process.env.NEXT_PUBLIC_API_URL}/v1/user/profile`, {
   fullname,
   job: jobdesc,
   domicile,
   company: workplace,
   description: desc || userDetail?.description
  }, config
  )
   .then((res) => {
    setIsLoading(false)
    console.log(res?.data?.messages)
    Swal.fire(
     'Good job!',
     'You updated the biodata!',
     'success'
    )
   })
   .catch((err) => {
    setIsLoading(false)
    setError(err?.response?.data?.message ?? err?.response?.data?.message?.fullname?.message ?? err?.response?.data?.message?.description?.message)
    console.log(err?.response?.data?.message)
   })
 }

 const editSkill = async () => {
  setIsLoading(true)
  await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/skills`, {
   skills: skillsEntered
  }, config)
   .then((res) => {
    setIsLoading(false)
    Swal.fire(
     'Good job!',
     'You updated the skills!',
     'success'
    )
   })
   .catch((err) => {
    setIsLoading(false)
    console.log(err?.response?.data?.message)
   })
 }


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

       <div className={`card shadow ${style.left}`}>
        <img src={user?.photo_profile || "https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59095493-stock-illustration-profile-icon-male-avatar.jpg"} className={`card-img-top ${style.picture}`} alt="picture" />
        <div className="card-body">
         <h5 className="card-title">{user?.fullname}</h5>
         <p className="card-text">{userDetail?.job}</p>
         <p className={`card-text ${style.detail}`}><GrLocation /> {userDetail?.domicile}</p>

         <div className="d-grid mt-5">
          <button className="btn btn-primary btn-lg mb-3" onClick={updateProfile} disabled={isLoading}>{isLoading ? "loading..." : "Save"}</button>
          <button className="btn btn-light btn-lg mb-3">Cancel</button>
         </div>

        </div>

       </div>
      </div>
      <div className="col-md-8">
       <div className="card mb-3" style={{ zIndex: 5, marginTop: "100px" }}>
        <div className="card-header">
         <h5>Biodata</h5>
        </div>

        <div className="card-body">

         {error && (
          <div className="alert alert-danger mb-3" role="alert">
           {error}
          </div>
         )}

         <form>

          <div class="mb-3">
           <label for="fullname">Full Name</label>
           <input type="text" class="form-control" id="fullname" placeholder={user?.fullname} onChange={(e) => setFullname(e.target.value)} />
          </div>

          <div class="mb-3">
           <label for="jobdesc">Jobdesc</label>
           <input type="text" class="form-control" id="jobdesc" placeholder="jobdesc" onChange={(e) => setJobdesc(e.target.value)} />
          </div>

          <div class="mb-3">
           <label for="domicile">Domicile</label>
           <input type="text" class="form-control" id="domicile" placeholder={userDetail?.domicile} onChange={(e) => setDomicile(e.target.value)} />
          </div>

          <div class="mb-3">
           <label for="workplace">Workplace</label>
           <input type="text" class="form-control" id="workplace" placeholder={userDetail?.company} onChange={(e) => setWorkplace(e.target.value)} />
          </div>

          <div class="mb-5">
           <label for="desc">Describe the job</label>
           <textarea type="text" class="form-control" id="desc" placeholder={userDetail?.description} style={{ height: "120px" }} onChange={(e) => setDesc(e.target.value)}></textarea>
          </div>

         </form>
        </div>
       </div>

       <div className="card shadow mb-3">
        <div className="card-header">
         <h5>Skills</h5>
        </div>
        <div className="card-body">
         <div>
          {skillsEntered.map((_item) => (
           <button class="btn btn-primary" key={_item}>
            {_item}
            <span
             class={`badge bg-secondary`}
             style={{ display: "inline-block", marginLeft: "20px" }}
             onClick={() => {
              let newSkills = skillsEntered.filter(
               (res) => res !== _item
              );
              setSkillsEntered(newSkills);
             }}
            >
             x
            </span>
           </button>
          ))}
         </div>
         <div className="d-flex align-items-center gap-3">
          <input
           class="form-control"
           placeholder="Enter your skills"
           onChange={(e) => setSkillsValue(e.target.value)}
           value={skillsValue}
           onKeyDown={(e) => {
            if (e.key === "Enter") {
             setSkillsEntered([...skillsEntered, ...[skillsValue]]);
             setSkillsValue("");
            }
           }}
          />
          <button type="submit" className="btn btn-warning text-light" style={{ width: "90px" }} onClick={editSkill} disabled={isLoading}>{isLoading ? "loading..." : "Save"}</button>
         </div>
        </div>
       </div>

       <div className="card shadow mb-3">
        <div className="card-header">
         <h5>Work Experience</h5>
        </div>
        <div className="card-body">
         <form>
          <div class="form-floating mb-4">
           <input type="text" class="form-control" id="position" placeholder="position" onChange={(e) => setPosition(e.target.value)} />
           <label for="position">Position</label>
          </div>

          <div className="row">
           <div className="col-6">
            <div class="form-floating mb-4">
             <input type="text" class="form-control" id="company" placeholder="company" onChange={(e) => setCompany(e.target.value)} />
             <label for="company">Company</label>
            </div>
           </div>
           <div className="col-6">
            <div class="form-floating mb-4">
             <input type="text" class="form-control" id="year" placeholder="year" onChange={(e) => setYear(e.target.value)} />
             <label for="year">Month/Year</label>
            </div>
           </div>
          </div>

          <div class="form-floating mb-4">
           <textarea type="text" style={{ height: "100px" }} class="form-control" id="jobdesc" placeholder="jobdesc" onChange={(e) => setDescription(e.target.value)}></textarea>
           <label for="jobdesc">Jobdesc</label>
          </div>

          <div class="d-grid mb-4">
           <button className="btn btn-warning text-light" type="submit">Add work experience</button>
          </div>
         </form>
        </div>
       </div>

       <div className="card shadow mb-3">
        <div className="card-header">
         <h5>Portofolio</h5>
        </div>
        <div className="card-body">
         <form>
          <div class="form-floating mb-4">
           <input type="text" class="form-control" id="apkname" placeholder="apkname" onChange={(e) => setapkname(e.target.value)} />
           <label for="apkname">Aplication&apos;s Name</label>
          </div>

          <div class="form-floating mb-4">
           <input type="text" class="form-control" id="link" placeholder="link" onChange={(e) => setlink(e.target.value)} />
           <label for="link">Link Repository</label>
          </div>

          <div class="mb-4">
           <label for="images">Upload aplication&apos;s images</label>
           <input type="file" class="form-control" id="images" placeholder="images" onChange={(e) => setPosition(e.target.value)} />
          </div>
         </form>
        </div>
       </div>
       {/* <div class="d-grid mb-3">
        <button class="btn btn-warning text-light fw-bold" type="submit" onClick={hire} disabled={isLoading}>{isLoading ? "Loading..." : "Hire"}</button>
       </div> */}
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

export async function getServerSideProps({ req, res }) {

 // get data from cookie
 const token = getCookie("token", { req, res });

 if (!token) {
  return {
   redirect: {
    destination: '/auth/login',
    // permanent: false,
    // statusCode: 301
   }
  }
 } else {
  const config = {
   headers: {
    Authorization: `Bearer ${token}`,
   },
  }

  const detailProfile = await axios.get(
   `${process.env.NEXT_PUBLIC_API_URL}/v1/user/profile`, config
  );
  const convertData = detailProfile?.data;

  return {
   props: {
    detailProfile: convertData,
   }, // will be passed to the page component as props
  };
 }

}


export default Profile;
