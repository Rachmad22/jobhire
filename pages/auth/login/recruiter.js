import axios from "axios";
import React from "react";
import style from "../../../styles/pages/loginStyles.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { setCookie, getCookie } from "cookies-next";
import Link from "next/link";

function Recruiter() {
 const router = useRouter();
 const [email, setEmail] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [isLoading, setIsLoading] = React.useState(false);
 const [error, setError] = React.useState("");
 const [success, setSuccess] = React.useState("");


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

   const connect = await axios.post("/api/login", {
    email,
    password,
   });

   setIsLoading(false);
   setError(null);

   if (connect?.data?.data.recruiter_id) {
    setSuccess(connect?.data?.messages)
    setCookie("token", connect?.data?.token);
    setCookie("profile", JSON.stringify(connect?.data?.data));
    router.push("/jobs")
   } else {
    setError("Can't login in this area");
   }
  } catch (error) {
   setIsLoading(false);
   setError(
    error?.response?.data?.messages ?? "Something wrong in our server"
   );
  }
 };

 return (
  <>
   <Head>
    <title>Login Recruiter | Peworld</title>
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
        <h2>Halo, Pewpeople</h2>
        <p className={error ? "mb-3" : "mb-5"}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
         euismod ipsum et dui rhoncus auctor.
        </p>

        {error && (
         <div className="alert alert-danger mb-3" role="alert">
          {error}
         </div>
        )}
        {success && (
         <div className="alert alert-success mb-3" role="alert">
          {success}
         </div>
        )}

        <form>
         <div className="mb-4">
          <label for="exampleInputEmail1" className="form-label">
           Email address
          </label>
          <input
           type="email"
           className="form-control form-control-lg"
           id="exampleInputEmail1"
           aria-describedby="emailHelp"
           placeholder="Masukan alamat email"
           onChange={(e) => setEmail(e.target.value)}
          />
         </div>
         <div className="mb-5">
          <label for="exampleInputPassword1" className="form-label">
           Password
          </label>
          <input
           type="password"
           className="form-control form-control-lg"
           id="exampleInputPassword1"
           placeholder="Masukan kata sandi"
           onChange={(e) => setPassword(e.target.value)}
          />
         </div>
         <div className="d-grid mb-3">
          <button
           type="submit"
           className="btn btn-primary btn-lg"
           onClick={handleSubmit}
           disabled={isLoading}
          >
           {isLoading ? "Loading..." : "Login"}
          </button>
         </div>

         <p className="text-center">
          Dont have an account?{" "}
          <Link href="/auth/signup">Signup here</Link>
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

export default Recruiter;
