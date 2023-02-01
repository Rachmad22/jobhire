// import axios from "axios";
import React from "react";
import style from "../styles/pages/profile.module.scss";

function Profile() {
  return (
    <>
<div className={style.overlay}></div>
<div className="col-3">
<div className="card">
  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" className="card-img-top rounded-circle pp" alt="profile"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</>
  );
}

export default Profile;
