import Head from "next/head";

export default function MovieDeail({ movie }) {
  return (
    <>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <div className="movie-page">
        <img
          id="movie-img"
          src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`}
        />
        <div className="movie-detail">
          <div className="movie-title">
            <h1 id="movie-title">{movie.title}</h1>
            <span className="movie-average">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
          <p className="movie-overview">{movie.overview}</p>
        </div>
      </div>
    </>
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

