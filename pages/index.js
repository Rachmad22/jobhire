import axios from "axios";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <button type="button" class="btn btn-primary">
                    Primary
                </button>
            </main>
        </div>
    );
}

// export async function getServerSideProps(context) {

//     const user = await axios.get("") 
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }