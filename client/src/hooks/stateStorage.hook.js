import { useCallback } from 'react'

const storageName = 'userData';

export const useStateToLocalStorage = () => {
  const localData = JSON.parse(localStorage.getItem(storageName));

  return useCallback((movies) => {
    localData.userData.movies = movies;

    try {
      localStorage.setItem(storageName, JSON.stringify(localData));
    } catch (e) {
      if (e == 'QUOTA_EXCEEDED_ERR') {
        alert('Quota exceeded in local storage!');
      }
    }

  }, [])
}