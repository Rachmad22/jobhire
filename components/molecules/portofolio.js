import Link from "next/link";
import React, { useState } from "react";
import style from "../../styles/pages/profile.module.scss"


function Portofolio() {
  const porto = [
    {
      id: 2,
      title: "Remainder App",
      src: "/images/portofolio/1.jpg",
    },
    {
      id: 3,
      title: "Social Media App",
      src: "/images/portofolio/2.jpg",
    },
    {
      id: 4,
      title: "Project Management Web",
      src: "/images/portofolio/3.jpg",
    },
    {
      id: 5,
      title: "Remainder App",
      src: "/images/portofolio/4.jpg",
    },
    {
      id: 6,
      title: "Social Media App",
      src: "/images/portofolio/5.jpg",
    },
    {
      id: 7,
      title: "Project Management Web",
      src: "/images/portofolio/6.jpg",
    },
  ];

  const riwayat = [
    {
      id: 4,
      title: "Remainder App",
      src: "/images/portofolio/1.jpg",
    },
    {
      id: 5,
      title: "Remainder App",
      src: "/images/portofolio/1.jpg",
    },
    {
      id: 6,
      title: "Remainder App",
      src: "/images/portofolio/1.jpg",
    },
  ];

  const [activeTab, setActiveTab] = useState("portofolio");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "portofolio" ? "active" : ""}`}
              onClick={() => handleTabClick("portofolio")}
            >
              Portofolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "pengalaman" ? "active" : ""}`}
              onClick={() => handleTabClick("pengalaman")}
            >
              Pengalaman Pekerjaan
            </a>
          </li>
        </ul>
        <div className="tab-content">
          {activeTab === "portofolio" && (
            <div className="tab-pane fade show active">
              {porto.map((item) => (
                <div className="card">
                  {/* <div className={style.porto}> */}
                  <img src={item.src} alt={item} className="card-image-top"/>
                  {/* </div> */}
                  <div class="card-body">
                    <p class="card-title">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "pengalaman" && (
            <div className="tab-pane fade">
              {riwayat.map((_item)=>(
                <div className="card">
                <img src={_item.src} alt={_item}/>
                <p>{_item.title}</p>
                </div>
              ))}
            </div>
          )}
          {activeTab === "contact" && (
            <div className="tab-pane fade">...</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Portofolio;