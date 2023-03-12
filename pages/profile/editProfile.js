import Navbar from "@/components/organisms/navbar";
import style from "../../styles/pages/profile.module.scss"
import { GrLocation } from "react-icons/gr";
import React from "react";
import Footer from "@/components/organisms/Footer";


export default function Edit() {
 const [skillsEntered, setSkillsEntered] = React.useState([]);
 const [skillsValue, setSkillsValue] = React.useState("");

 return (
  <>
   <Navbar />
   <div className={style.overlay}></div>
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
        <div className="d-grid mt-5">
         <button className="btn btn-primary btn-lg mb-3">Simpan</button>
         <button className="btn btn-light btn-lg mb-3">Batal</button>
        </div>
       </div>
      </div>
     </div>

     <div className="col-md-6">
      <div className={`card ${style.right}`}>
       <div className="card-body">
        <form>
         <div className="container">
          <div class="form-group mb-3">
           <label for="inputName">Nama Lengkap</label>
           <input type="text" class="form-control" id="inputName" placeholder="Masukkan Nama Lengkap" />
          </div>
          <div class="form-group mb-3">
           <label for="inputJobdesc">Job Desk</label>
           <input type="text" class="form-control" id="inputJobdesc" placeholder="Masukkan job desk" />
          </div>
          <div class="form-group mb-3">
           <label for="inputDomicile">Domisili</label>
           <input type="text" class="form-control" id="inputDomicile" placeholder="Masukkan Domisili" />
          </div>
          <div class="form-group mb-3">
           <label for="inputPlacement">Tempat Kerja</label>
           <input type="text" class="form-control" id="inputPlacement" placeholder="Masukkan Tempat Kerja" />
          </div>
          <div class="form-group mb-3">
           <label for="inputDesc">Deskripsi Singkat</label>
           <textarea class="form-control" id="inputDesc" rows="5" placeholder="Masukkan Deskripsi Singkat">
           </textarea>
          </div>
         </div>
        </form>
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
       </div>
      </div>

     </div>

    </div>
   </div>
   <Footer />
  </>
 )
}