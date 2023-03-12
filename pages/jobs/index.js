/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useState, useEffect } from "react";
import style from "../../styles/pages/jobStyles.module.scss";
import Head from "next/head";
import JobItemList from "../../components/molecules/jobList";
import Footer from "@/components/organisms/Footer";
import Top from "@/components/molecules/top";
import Navbar from "@/components/organisms/navbar";
import Search from "@/components/molecules/search";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

function Index(props) {
 const router = useRouter()
 const { jobList, search } = props;

 // show search result / joblist 
 const { data: { rows, count } } = router.query.keyword || router.query.order ? search : jobList

 // set on/off button see profile
 const [isDisabled, setIsDisabled] = React.useState(false)


 useEffect(() => {
  const isLogin = getCookie("profile", "token")
  if (!isLogin) {
   setIsDisabled(true)
  } else {
   setIsDisabled(false)
  }
 }, [])

 // pagination
 const [data, setData] = React.useState(rows);
 const [page, setPage] = React.useState(1);
 const [total, setTotal] = React.useState(Math.ceil(count / 5));

 const getDataByPage = async (_page) => {
  const jobList = await axios.get(
   `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=10&page=${_page}&order=ASC`
  );
  const convertData = jobList.data;
  setData(convertData.data.rows);
 };
 return (
  <>
   <Head>
    <title>Job List | Hire Jobs</title>
   </Head>

   <main>
    <Navbar />
    <Top />
    <div className="container py-5">
     <div>
      <Search />
     </div>
     <div class={`card border-0 shadow ${style.cardStyle}`}>
      {rows.map((item, key) => (
       <React.Fragment key={key}>
        <JobItemList item={{
         image: item['user.photo_profile'],
         name: item['user.fullname'],
         job: item['job'],
         location: item['domicile'],
         skills: item?.skills,
         slug: isDisabled ? "#" : item?.id
        }} />
        <hr />
       </React.Fragment>
      ))}
     </div>
     <div className="d-flex justify-content-center mt-5">
      <nav>
       <ul class="pagination">
        <li
         class="page-item"
         onClick={() => {
          if (page > 1) {
           getDataByPage(page - 1);
           setPage(page - 1);
          }
         }}
        >
         <a class="page-link" href="#">
          Previous
         </a>
        </li>
        {[...new Array(total)].map((item, key) => {
         let currentPage = ++key;
         return (
          <li
           class={`page-item ${page === currentPage ? "active" : ""}`}
           key={currentPage}
           onClick={() => {
            getDataByPage(currentPage);
            setPage(currentPage);
           }}
          >
           <a class="page-link" href="#">
            {currentPage}
           </a>
          </li>
         );
        })}
        <li
         class="page-item"
         onClick={() => {
          if (page < total) {
           getDataByPage(page + 1);
           setPage(page + 1);
          }
         }}
        >
         <a class="page-link" href="#">
          Next
         </a>
        </li>
       </ul>
      </nav>
     </div>
    </div>
   </main>
   <Footer />
  </>
 );
}

export async function getServerSideProps(context) {
 const jobList = await axios.get(
  `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=5&page=1`
 );
 const convertData = jobList.data;

 const search = await axios.get(
  `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?&keyword=${context?.query?.keyword || ""}&order=${context?.query?.order || "DESC"}&sortBy=id`
 );
 const convertDataSearch = search.data;

 return {
  props: {
   jobList: convertData,
   search: convertDataSearch,
  },
 };
}

export default Index;