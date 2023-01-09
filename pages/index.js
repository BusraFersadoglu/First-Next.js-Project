// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="title">
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
    </>
  );
}
