import { api, api_key } from './baseUrl';
import { getFullPathForPosters } from './helpers/getFullPathForPosters';

export const fetchDetails = async (id) => {
  const params = {
    api_key,
    language: 'en-US'
  };

  try {
    const response = await api.get(
      `/movie/${id}`,
      { params }
    );
    const data = response.data;

    return getFullPathForPosters(data, 'w500');

  } catch (err) {
    console.log(`😱 Axios request failed: ${err}`);
  }
};

// const getFullPathForPosters = (data, quality = 'w300') => {
//   if (Array.isArray(data)) {
//     return data.map((item) => {
//       item.poster_path = getPoster(data.poster_path);
//       return item;
//     });
//   }
//   data.poster_path = getPoster(data.poster_path);

//   function getPoster(poster) {
//     return poster ? `https://image.tmdb.org/t/p/${quality}${poster}` : null;
//   };

//   return data;
// };




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




