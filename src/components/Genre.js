import Movie from "./Movie";
// import Card from "./Card";

function Genre(props) {
  const {
    name,
    description,
    movieTitle1,
    movieTitle2,
    movieYear1,
    movieYear2,
    genreImgSrc,
    movieImgSrc01,
    movieImgSrc02,
  } = props;

  const imgAlt = props.imgAlt || "image";

  return (
    <div className="card w-96 bg-base-100 shadow-2xl mx-2 mb-4">
      <figure>
        <img src={genreImgSrc} alt={imgAlt} />
      </figure>
      <div className="card-body">
        <p className="text-xs">Genre:</p>
        <h1 className="card-title font-extrabold text-5xl font-sans">{name}</h1>
        <p className="font-light">{description}</p>
        <div className="flex-auto">
          <div className="mb-10 mt-5 border-1 border-gray-500 shadow-xl">
            <Movie title={movieTitle1} year={movieYear1} />
            <img className="w-80 h-40" src={movieImgSrc01} alt={imgAlt} />
          </div>
          <div className="border-1 border-gray-500 shadow-xl">
            <Movie title={movieTitle2} year={movieYear2} />
            <img className="w-80 h-40" src={movieImgSrc02} alt={imgAlt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Genre;
