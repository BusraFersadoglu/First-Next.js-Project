import Link from "next/link";

export default function Movies({ movies }) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="movies">
      <h1>Popular Movies</h1>
      {movies.results.map((movie, index) => (
        <div key={index}>
          <Link href={`/movie/${movie.id}`}>
            <p>{movie.original_title}</p>
            <img src={`${IMG_PATH}${movie.poster_path}`} />
          </Link>
        </div>
      ))}
      <style jsx>{`
        img {
          width: 15rem;
        }
      `}</style>
    </div>
  );
}
