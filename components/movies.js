import Link from "next/link";

export default function Movies({ movies }) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="movies">
      {movies.results.map((movie, index) => (
        <div key={index}>
          <Link href={`/movie/${movie.id}`}>
            <img src={`${IMG_PATH}${movie.poster_path}`} id="movies-poster" />
            <p id="movies-title">{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
