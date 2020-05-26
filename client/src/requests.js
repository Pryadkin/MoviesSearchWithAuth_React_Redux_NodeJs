import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  responseType: "json"
});

export const requestMovies = async (name, isWithPicture, page) => {
  try {
    const response = await api.get("/search/movie", {
      params: {
        api_key: 'b72f01423c617f99db15bb46a8285ccb',
        query: name,
        page: page,
        language: 'en-US',
        include_adult: false
      }
    })
    const data = response.data;
    let dataMovies = data.results;

    // message if movies not found
    if (dataMovies.length === 0 && page === 1) {
      alert('Movies not found')
    }

    if (isWithPicture) {
      dataMovies = dataMovies.filter(movie => {
        return movie.poster_path !== null;
      });
    }

    const moviesWithFullPathForPosters = dataMovies.map((item) => {
      item.poster_path = `https://image.tmdb.org/t/p/w300${item.poster_path}`;
      item.backdrop_path = `https://image.tmdb.org/t/p/w300${item.backdrop_path}`;
      return item;
    });
    data.results = moviesWithFullPathForPosters;
    return data;

  } catch (err) {
    console.log(`😱 Axios request failed: ${err}`);
  }
}

// --------- for get quality pictures -------------
// -------(need will be correct this code)---------

// export const getPoster = async (
//   urlImg = '/kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
//   qualityImg = 0
// ) => {
//   const response = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${api_key}`);
//   const json = await response.json();
//   const secure_base_url = json.images.secure_base_url;
//   const backdrop_sizes = json.images.backdrop_sizes;
//   const img = urlImg;
//   console.log(`${secure_base_url}${backdrop_sizes[qualityImg]}${img}`)
//   return `${secure_base_url}${backdrop_sizes[qualityImg]}${img}`;
// };



