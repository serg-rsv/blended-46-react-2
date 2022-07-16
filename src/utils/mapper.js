export const mapperFilms = (movies) => {
  return movies.map(
    ({ id, poster_path: poster, title, vote_average: votes }) => ({
      id,
      title,
      poster,
      votes,
      watched: false,
    })
  );
};
