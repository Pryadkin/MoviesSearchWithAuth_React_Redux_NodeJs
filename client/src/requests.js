const api_key = 'b72f01423c617f99db15bb46a8285ccb';

export const getPoster = async (
  urlImg = '/kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
  qualityImg = 0
) => {
  const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`);
  const json = await response.json();
  const secure_base_url = json.images.secure_base_url;
  const backdrop_sizes = json.images.backdrop_sizes;
  const img = urlImg;
  console.log(`${secure_base_url}${backdrop_sizes[qualityImg]}${img}`)
  return `${secure_base_url}${backdrop_sizes[qualityImg]}${img}`;
};

export const getMovie = async (name) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${name}&page=1&include_adult=false`)
  const json = await response.json();
  const dataMovies = json.results;
  const moviesWithPosters = dataMovies.filter(movie => {
    return movie.poster_path !== null;
  });
  const moviesWithFullPathForPosters = moviesWithPosters.map(async (item) => {
    item.poster_path = `https://image.tmdb.org/t/p/w300${item.poster_path}`;
    item.backdrop_path = `https://image.tmdb.org/t/p/w300${item.backdrop_path}`;
    return item;
  });
  return Promise.all(moviesWithFullPathForPosters);
};



