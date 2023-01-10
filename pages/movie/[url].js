import Head from "next/head";

export default function FilmDetay({ movie }) {
  console.log(movie);
  return (
    <div className="movie">
      <Head>
        <title>{movie.title}</title>
      </Head>
      <div>
        <img
          src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`}
        />
      </div>
      <h3>{movie.title}</h3>
      <div className="summary">{movie.overview}</div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${params.url}?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-EN`
  );
  const movie = await request.json();

  return {
    props: {
      movie,
    },
  };
}
