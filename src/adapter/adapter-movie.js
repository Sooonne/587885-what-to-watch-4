export const createMovie = (movie) => {
  return {
    title: movie.name,
    genre: movie.genre,
    release: movie.released,
    img: movie.preview_image,
    bg: movie.background_image,
    poster: movie.poster_image,
    id: movie.id,
    description: movie.description,
    ratingScore: movie.rating,
    ratingCount: movie.scores_count,
    director: movie.director,
    starring: movie.starring,
    runTime: movie.run_time,
    src: movie.preview_video_link,
    srcFull: movie.video_link,
    isFavorite: movie.is_favorite,
    bgColor: movie.background_color,
  };
};
