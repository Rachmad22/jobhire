import Link from "next/link";
import React, { useState } from "react";
import style from "../../styles/pages/profile.module.scss"


function Portofolio({ item }) {
 // const { menuActive } = props
 // const porto = [
 //   {
 //     id: 2,
 //     title: "Remainder App",
 //     src: "/images/portofolio/1.jpg",
 //   },
 //   {
 //     id: 3,
 //     title: "Social Media App",
 //     src: "/images/portofolio/2.jpg",
 //   },
 //   {
 //     id: 4,
 //     title: "Project Management Web",
 //     src: "/images/portofolio/3.jpg",
 //   },
 //   {
 //     id: 5,
 //     title: "Remainder App",
 //     src: "/images/portofolio/4.jpg",
 //   },
 //   {
 //     id: 6,
 //     title: "Social Media App",
 //     src: "/images/portofolio/5.jpg",
 //   },
 //   {
 //     id: 7,
 //     title: "Project Management Web",
 //     src: "/images/portofolio/6.jpg",
 //   },
 // ];

 // const riwayat = [
 //   {
 //     id: 4,
 //     title: "Remainder App",
 //     src: "/images/portofolio/1.jpg",
 //   },
 //   {
 //     id: 5,
 //     title: "Remainder App",
 //     src: "/images/portofolio/1.jpg",
 //   },
 //   {
 //     id: 6,
 //     title: "Remainder App",
 //     src: "/images/portofolio/1.jpg",
 //   },
 // ];

 const [activeTab, setActiveTab] = useState("portofolio");

 const handleTabClick = (tab) => {
  setActiveTab(tab);
 };

 return (
  <>
   <div>
    <ul className="nav nav-tabs">
     <li className="nav-item" style={{ cursor: "pointer" }}>
      <a
       className={`nav-link bg-light ${activeTab === "portofolio" ? "active" : ""}`}
       onClick={() => handleTabClick("portofolio")}
      >
       Portofolio
      </a>
     </li>
     <li className="nav-item" style={{ cursor: "pointer" }}>
      <a
       className={`nav-link bg-light ${activeTab === "pengalaman" ? "active" : ""}`}
       onClick={() => handleTabClick("pengalaman")}
      >
       Pengalaman Pekerjaan
      </a>
     </li>
    </ul>
    <div className="tab-content">
     {activeTab === "portofolio" && (
      <div className="tab-pane fade show active">
       <div className="card p-2">
        <div className="card-body">
         <div className="row gap-4">
          {item?.portofolio?.length === 0 ? (
           <div className="d-flex align-items-center justify-content-center" style={{ height: "300px" }}>
            <h5>No update portofolio</h5>
           </div>
          ) : null}
          {item.portofolio.map((item, key) => (
           <div className={`card p-2 shadow`} key={key} style={{width: "200px"}}>
            <div className="card-header">
             <h6>{item.name}</h6>
             </div>
            <Link href={item.link} >
             <div className="card-body d-flex align-items-center">
             <img src={item.photo} alt={item.name} style={{ objectFit: "cover", height: "140px", width: "180px" }} />
             </div>
             <div class="card-footer">
              <p class="text-center">{item.type}</p>
             </div>
            </Link>
           </div>
          ))}
         </div>
        </div>
       </div>
      </div>
     )}
     {activeTab === "pengalaman" && (
      <div className="tab-pane fade show active">
       <div className="card">
        <div className="card-body">
         {item?.work_experience?.length === 0 ? (
          <div className="d-flex align-items-center justify-content-center" style={{ height: "300px" }}>
           <h5>No update work experience</h5>
          </div>
         ) : null}
         {item.work_experience.map((_item, key) => (
          <div key={key} className="row">
           <div className="col-2">
            <img src="/images/portofolio/tokped.svg" className={style.tokped} alt={key} />
           </div>
           <div className="col-5">
            <h3>{_item.position}</h3>
            <h5>{_item.company}</h5>
            <p>{_item.date}</p>
            <p>{_item.description}</p>
           </div>
          </div>

         ))}
        </div>
       </div>
      </div>
     )}
    </div>
   </div>
  </>
 );
}

export default Portofolio;