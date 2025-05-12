import { API_KEY } from "./Constants/Constants"  
export const orginals=`discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`
export const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`
export const topRated = `/movie/top_rated?api_key=${API_KEY}&language=en-US`
export const upcoming = `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
export const popular = `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const nowPlaying = `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
export const tv = `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
export const search = `/search/movie?api_key=${API_KEY}&language=en-US&page=1`
