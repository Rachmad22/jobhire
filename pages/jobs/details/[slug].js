import React from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "@/components/organisms/navbar";

function DetailProfile(props) {
  const { profile } = props;
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  return (
    <>
      <Head>
        <title>{slug} | Hire Jobs</title>
      </Head>
      <main>
        <Navbar />
        <div class="card" style={{ width: "18rem" }}>
          <img src={profile?.image} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{profile?.name}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card&#39;s content.
            </p>
            <Link href="#" class="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const {
    query: { slug },
  } = context;
  const profile = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/user/detail/${slug}`
  );
  const convertData = profile.find((res) => res.data.id === slug);

  return {
    props: {
      profile: convertData,
    }, // will be passed to the page component as props
  };
}

export default DetailProfile;