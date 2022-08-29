import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '307b13a53cmsh38153ce3fc24343p1b467fjsnfc6b4a76d87c',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
  });
    
  return data;
}