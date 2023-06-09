function Movie(props) {
  const { title, year } = props;

  return (
    <>
      <p className="text-xs mt-2 ml-2">Movie Title:</p>
      <h2 className="font-semibold text-2xl ml-2"> {title}</h2>
      <p className="text-xs mt-2 ml-2">Year Released:</p>
      <h2 className="font-semibold text-lg ml-2"> {year}</h2>
    </>
  );
}

export default Movie;
