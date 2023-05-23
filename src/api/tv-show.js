import axios from "axios";
import { FAKE_POPULAR, FAKE_RECOMENDATION } from "./fake_data";
import { BASE_URL, API_KEY } from "../config";

export class TVShowAPI {
  static async fetchPopular() {
    const response = await axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    return response.data.results;
    // return FAKE_POPULAR;
  }

  static async fetchRecommendation(tvShowId) {
    const response = await axios.get(`${BASE_URL}/tv/${tvShowId}/recommendations?api_key=${API_KEY}`);
    return response.data.results;
    // return FAKE_RECOMENDATION;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(`${BASE_URL}/search/tv?api_key=${API_KEY}&query=${title}`);
    return response.data.results;
  }
}
