import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/navbar";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
 return (
  <>
   <Head>
    <title>Home | Peworld</title>
   </Head>

   <Navbar />
   <main>
    <div className="row">
     <div className="container d-flex align-items-center justify-content-center" style={{ margin: "100px 0px 100px 0px" }}>
      <div className="col-6">
       <div className="col-8 m-3">
        <h1>The Local Best Talents for Revolutionary Change 4.0</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        <Link href="/jobs">
         <button type="button" className="btn btn-lg btn-primary mt-3">
          Start Now
         </button>
        </Link>
       </div>
      </div>
      <div className="col-4">
       <img src="/images/home.svg" alt="home" style={{ height: "400px", width: "400px" }} />
      </div>

     </div>
    </div>
   </main>
   <Footer />
  </>
 );
}

// export async function getServerSideProps(context) {

//     const user = await axios.get("")
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }