import axios from 'axios';
import { API_ENDPOINTS } from '@/src/api/endpoints';

export const fetchTokenPairs = async () => {
  const response = await axios.get(API_ENDPOINTS.tokens);
  return response.data.pairs;
};