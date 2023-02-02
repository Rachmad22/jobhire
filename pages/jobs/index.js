/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useState } from "react";
import style from "../../styles/pages/jobStyles.module.scss";
import Head from "next/head";
import JobItemList from "../../components/molecules/jobList";
import Footer from "@/components/organisms/footer";
import Top from "@/components/molecules/top";
import Navbar from "@/components/organisms/navbar";
import Search from "@/components/molecules/search";
// import { getCookie } from "cookies-next";

function Index(props) {
  const { jobList } = props;
  // console.log(jobList.data.rows[0].skills)

  return (
    <>
      <Head>
        <title>Job List | Hire Jobs</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Pacifico&family=Poppins:wght@300;500&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Navbar />
        <Top />
        <div className="container py-5">
          <Search />
          <div class={`card border-0 shadow ${style.cardStyle}`}>
            {jobList?.data?.rows.map((item, key) => (
                            <React.Fragment key={key}>
                                <JobItemList item={{ 
                                image: item['user.photo_profile'], 
                                name: item['user.fullname'],
                                job: item['job'],
                                location: item ['domicile'],
                                skills: item?.skills}} />
                                <hr />
                            </React.Fragment>
                        ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const jobList = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list`
  );
  const convertData = jobList.data;

  // const token = getCookie("token", { req, res });

  return {
    props: {
      jobList: convertData,
    }, // will be passed to the page component as props
  };
}

export default Index;