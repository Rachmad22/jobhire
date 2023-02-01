import axios from "axios";
import React from "react";
import style from "../../../styles/pages/signupStyles.module.scss";
import Head from "next/head";

function SignupRecruiter() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [matchPassword, setMatchPassword] = useState("");
  const [phone_number, setPhone_number] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [position, setPosition] = React.useState("");



  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const connect = await axios.post("/api/signup", {
        fullname,
        email,
        company,
        position,
        phone_number,
        password,
      });

      setIsLoading(false);
      setError(null);

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
        <title>SignUp Recruiter | Peworld</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Pacifico&family=Poppins:wght@300;500&display=swap" rel="stylesheet" />
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
                  <div class="alert alert-danger mb-3" role="alert">
                    {error}
                  </div>
                )}

                <form>
                  <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">
                      Fullname
                    </label>
                    <input
                      type="text"
                      className="form-control name"
                      id="inputAddress"
                      placeholder="Write your fullname"
                      onChange={(event) => setFullname(event.target.value)}
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
                      Company
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Write your company"
                      onChange={(event) => setCompany(event.target.value)}
                    />
                    <label
                      for="exampleFormControlInput1"
                      className="form-label mt-3"
                    >
                      Position
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Position"
                      onChange={(event) => setPosition(event.target.value)}
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
                    // onChange={(event) => setPassword(event.target.value)}
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
                          // setIsLoading(true);

                          // axios
                          //   .post(`${process.env.NEXT_PUBLIC_API_URL}/user/add`, {
                          //     firstname,
                          //     lastname,
                          //     phone: phone_number,
                          //     email,
                          //     password,
                          //   })
                          //   .then((res) => {
                          //     navigate("/Sign-in");
                          //   })
                          //   .catch((err) => {
                          //     setIsError(true);
                          //     if (
                          //       err?.response?.data?.message?.firstname?.message
                          //     ) {
                          //       setErrMsg(
                          //         err?.response?.data?.message?.firstname
                          //           ?.message ??
                          //           "System error, please try again later."
                          //       );
                          //     } else if (
                          //       err?.response?.data?.message?.lastname?.message
                          //     ) {
                          //       setErrMsg(
                          //         err?.response?.data?.message?.lastname?.message ??
                          //           "System error, please try again later."
                          //       );
                          //     } else if (
                          //       err?.response?.data?.message?.phone?.message
                          //     ) {
                          //       setErrMsg(
                          //         err?.response?.data?.message?.phone?.message ??
                          //           "System error, please try again later."
                          //       );
                          //     } else if (
                          //       err?.response?.data?.message?.email?.message
                          //     ) {
                          //       setErrMsg(
                          //         err?.response?.data?.message?.email?.message ??
                          //           "System error, please try again later."
                          //       );
                          //     } else if (
                          //       err?.response?.data?.message?.password?.message
                          //     ) {
                          //       setErrMsg(
                          //         err?.response?.data?.message?.password?.message ??
                          //           "System error, please try again later."
                          //       );
                          //     } else {
                          //       setErrMsg(
                          //         err?.response?.data?.message ??
                          //           "System error, please try again later."
                          //       );
                          //     }
                          //   })
                          //   .finally(() => setIsLoading(false));
                        }
                      }}
                      type="password"
                      className="form-control password"
                      id="inputAddress"
                      placeholder="Confirm the password"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
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
                    Anda sudah punya akun?{" "}
                    <a href="/auth/login/recruiter">Login disini</a>
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

export default SignupRecruiter;
