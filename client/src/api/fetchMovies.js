import { api, api_key } from './baseUrl';

export const fetchMovies = async (name, isWithPicture, page) => {
  const params = {
    api_key,
    query: name,
    page: page,
    language: 'en-US',
    include_adult: false
  };

  try {
    const response = await api.get(
      '/search/movie',
      { params }
    );
    const data = response.data;
    let { results } = data;

    if (isWithPicture) {
      results = results.filter(movie => {
        return movie.poster_path !== null;
      });
    }

    data.results = getFullPathForPosters(results);
    return data;

  } catch (err) {
    console.log(`😱 Axios request failed: ${err}`);
  }
}

const getFullPathForPosters = (dataMovies, quality = 'w300') => {
  return dataMovies.map((item) => {
    item.poster_path = `https://image.tmdb.org/t/p/${quality}${item.poster_path}`;
    item.backdrop_path = `https://image.tmdb.org/t/p/${quality}${item.backdrop_path}`;
    return item;
  });
};