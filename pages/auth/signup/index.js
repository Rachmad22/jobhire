import axios from "axios";
import React from "react";
import style from "../../../styles/pages/signupStyles.module.scss";
import Head from "next/head";
import Link from "next/link";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

function Signup() {
 const router = useRouter()
 const [email, setEmail] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [phone_number, setPhone_number] = React.useState("");
 const [name, setName] = React.useState("");

 const [isLoading, setIsLoading] = React.useState(false);
 const [error, setError] = React.useState(null);

 React.useEffect(() => {
  let checkIsLogin =
   getCookie("token") && getCookie("profile");

  if (checkIsLogin) {
   router.replace("/")
  }
 }, []);

 const handleSubmit = async () => {
  try {
   setIsLoading(true);
   await axios.post("/api/signup", {
    fullname: name,
    email,
    phone_number,
    password,
   });
   setIsLoading(false);
   setError(null);
   router.push("/auth/login")

  } catch (error) {
   setIsLoading(false);
   setError(
    error?.response?.data?.messages ?? error?.response?.data?.message?.email?.message ?? error?.response?.data?.message?.fullname?.message ?? error?.response?.data?.message?.phone_number?.message ?? error?.response?.data?.message?.password?.message ?? "Something wrong in our server"
   );
  }
 };

 return (
  <>
   <Head>
    <title>SignUp | Peworld</title>
   </Head>
   <div className={style.main}>
    <div className="row">
     <div className="col-md-6">
      <div className={style.colKiri}>
       <div className={style.overlay} />
       <img src="/images/logo.svg" className={style.logo} />

       <div className={style.content}>
        <h1>
         Temukan developer berbakat & terbaik di berbagai bidang keahlian
        </h1>
       </div>
      </div>
     </div>
     <div className="col-md-6">
      <div className={style.centerContent}>
       <div className={style.colKanan}>
        <div className={error ? "mb-3" : "mb-5"}>
         <h2>Halo, Pewpeople</h2>
         <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          euismod ipsum et dui rhoncus auctor.
         </p>
         <p>If you are a recruiter click <Link href="/auth/signup/recruiter">here</Link></p>
        </div>

        {error && (
         <div class="alert alert-danger mb-3" role="alert">
          {error}
         </div>
        )}

        <form>
         <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
           Name
          </label>
          <input
           type="text"
           className="form-control name"
           id="inputAddress"
           placeholder="Write your name"
           onChange={(event) => setName(event.target.value)}
          />
          <label
           for="exampleFormControlInput1"
           className="form-label mt-3"
          >
           Email
          </label>
          <input
           type="email"
           className="form-control email"
           id="exampleFormControlInput1"
           placeholder="Write your email"
           onChange={(event) => setEmail(event.target.value)}
          />
          <label
           for="exampleFormControlInput1"
           className="form-label mt-3"
          >
           Phone Number
          </label>
          <input
           type="number"
           className="form-control phone"
           id="inputAddress"
           placeholder="Write your phone number"
           onChange={(event) => setPhone_number(event.target.value)}
          />
          <label
           for="exampleFormControlInput1"
           className="form-label mt-3"
          >
           Password
          </label>
          <input
           type="password"
           className="form-control password"
           id="inputAddress"
           placeholder="Write your password"
           onChange={(event) => setPassword(event.target.value)}
          />
          <label
           for="exampleFormControlInput1"
           className="form-label mt-3"
          >
           Password
          </label>
          <input
           onKeyDown={(event) => {
            if (event.key === "Enter") {
             handleSubmit
            }
           }}
           type="password"
           className="form-control password"
           id="inputAddress"
           placeholder="Confirm the password"
           onChange={(event) => setPassword(event.target.value)}
          />
         </div>
         <div class="d-grid mt-3 mb-3">
          <button
           type="submit"
           className="btn btn-primary btn-lg"
           onClick={handleSubmit}
           disabled={isLoading}
          >
           {isLoading ? "Loading..." : "Signup"}
          </button>
         </div>

         <p className="text-center">
          already have an account?
          <Link href="/auth/login"> Login here</Link>
         </p>
        </form>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default Signup;
