import Head from "next/head";
import Movies from "../components/movies";
export default function Home({ movies }) {
  return (
    <>
      <Head>
        <title>Popular Movies</title>
      </Head>
      <Movies movies={movies} />
    </>
  );
}

export async function getStaticProps() {
  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
  const responce = await fetch(API_URL);
  const movies = await responce.json();

  return {
    props: {
      movies,
    },
  };
}
