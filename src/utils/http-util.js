import axios from 'axios';
import { apis } from '../config/env';

const env = 'dev';

export const HTTP = {
  get: async (url) => {
    try {
      return await axios.get(`${apis.starWars[env]}/${url}`);
    } catch (e) {
      console.log('e', e)
    }
  },
  post: async (url, body) => {
    try {
      return await axios.post(`${apis.backend[env]}/${url}`, body)
    } catch (e) {
      console.log('e', e)
    }
  },
}