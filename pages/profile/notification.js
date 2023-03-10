import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/navbar";
import React from "react";
import style from "@/styles/pages/profile.module.scss"
import Head from "next/head";
import { getCookie } from "cookies-next";
import axios from "axios";


const Notification = (props) => {

 const { hireHistory } = props

 const [isClicked, setIsClicked] = React.useState(false)

 const handleClick = () => {
  setIsClicked(!isClicked);
 };

 return (
  <>
   <Head>
    <title>Notification | Hiring</title>
   </Head>
   <main>
    <Navbar />
    <div className={style.overlay}></div>
    <div className="container">
     <div className="row pb-5">
      <div className="col">
       <div className={`card shadow p-3`} style={{ zIndex: 5, marginTop: "100px" }} >
        <div className="card-header">
         <h3>Notification</h3>
        </div>

        {/* set height when no invitation */}
        <div className="card-body" style={hireHistory?.length === 0 ? { height: "200px" } : null}>

         {/* when no invitation */}
         {hireHistory?.length === 0 ? (
          <div className="d-flex align-items-center justify-content-center h-100">
           <h5>No Hiring Invitation</h5>
          </div>
         ) : null}

         {/* some invitation */}
         {hireHistory?.slice(0, 5).map((item, key) => {
          return (
           <React.Fragment key={key}>
            <div className="card shadow mb-3">
             <div className="card-header">
              <h5>{item?.fullname}</h5>
             </div>
             <div className="card-body">
              <div className="row">
               <div className="col-7">
                <h6>{item?.purpose}</h6>
                <p>{item?.description}</p>
               </div>
               <div className="col-3">
                <h6>Created</h6>
                <p>{item?.createdAt}</p>
               </div>
               <div className="col-2">
                <button className={`btn ${isClicked ? "btn-light" : "btn-primary"}`} onClick={handleClick}>{item?.is_read || "mark as read"}</button>
               </div>
              </div>
             </div>
            </div>
           </React.Fragment>
          )
         })}

        </div>
       </div>
      </div>
     </div>
    </div>
   </main>

   <Footer />
  </>
 )
}

export async function getServerSideProps({ req, res }) {

 // get data from cookie
 const token = getCookie("token", { req, res });

 // is login yet?
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

  const hireHistory = await axios.get(
   `${process.env.NEXT_PUBLIC_API_URL}/v1/user/profile`, config
  )
  const convertData = hireHistory?.data?.data?.[0]?.hire_histories;


  return {
   props: {
    hireHistory: convertData,
   },
  };
 }
}


export default Notification