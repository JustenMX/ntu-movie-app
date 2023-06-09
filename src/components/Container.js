import Genre from "./Genre";
import comedyImage from "../asset/comedy.jpg";
import romanceImage from "../asset/romance.jpg";

function Container() {
  return (
    <>
      <div className="bg-gradient-to-t from-teal-400 to-blue-500">
        <h1 className="font-extrabold text-6xl font-sans text-center p-10 text-slate-50 text">
          MOVIE APP
        </h1>
        <div className="flex flex-row items-center justify-center">
          {/* Comedy */}
          <Genre
            genreImgSrc={comedyImage}
            name="Comedy"
            description="Comedy entertains through humor, funny situations, and clever storytelling. It explores everyday life, human behavior, and social interactions, bringing joy and laughter to the audience with witty dialogue and light-heartedness."
            movieTitle1="The Hangover"
            movieYear1="2009"
            movieImgSrc01="https://media.giphy.com/media/l3fZEeSwVQP6bz1Ti/giphy.gif"
            movieTitle2="The IT Crowd"
            movieYear2="2006"
            movieImgSrc02="https://media.giphy.com/media/DUtVdGeIU8lmo/giphy.gif"
          />
          {/* Romance */}
          <Genre
            genreImgSrc={romanceImage}
            name="Romance"
            description="Romance revolves around love and emotional connections. It evokes passion, attraction, and longing, taking audiences on emotional journeys filled with desire, conflicts, and the pursuit of a happy ending in romantic relationships."
            movieTitle1="The Notebook"
            movieYear1="2004"
            movieImgSrc01="https://media.giphy.com/media/P02aEAoaS4YkU/giphy.gif"
            movieTitle2="Cold War"
            movieYear2="2016"
            movieImgSrc02="https://media.giphy.com/media/BjvwZs1ILO37l7f9E4/giphy.gif"
          />
        </div>
        <p className="text-xs text-slate-50 text-center p-2">
          © 2023 JustenMX - "Do whatever you want with this"
        </p>
      </div>
    </>
  );
}

export default Container;
