import axios from 'axios';

export const HTTP = {
  getStarWars: async (url) => {
    try {
      return await axios.get(`${process.env.STAR_WARS}/${url}`);
    } catch (e) {
      console.log('e', e)
    }
  },
  get: async (url, param) => {
    return await axios.get(`${process.env.BACKEND}/${url}/${param}`)
  },
  post: async (url, body) => {
    return await axios.post(`${process.env.BACKEND}/${url}`, body)
  },
}