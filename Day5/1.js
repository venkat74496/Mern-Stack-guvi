class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
  // Creating an instance of Movie with specific details
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Example usage of getPG method
  const movies = [
    new Movie("James Bond 007:Casino Royale", "Eon Productions", "PG-13"),
    new Movie("Batman", "DC", "R"),
    new Movie("The Dark Knight", "Warner Bros. Pictures", "PG-13"),
    new Movie("Iron Man", "Marvel", "PG"),
    new Movie("The Matrix Revolutions", "Warner Bros. Pictures", "R")
  ];
  
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);
  