const BASE_API = 'https://yts.am/api/v2/';
//const BASE_BCRP = 'http://ec2-34-220-86-67.us-west-2.compute.amazonaws.com/valida-billete';

class Api {
  async getSuggestion(id) {
    const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
    const { data } = await query.json();
    return data.movies
  }
  async getMovies() {
    const query = await fetch(`${BASE_API}list_movies.json?`);
    const { data } = await query.json();
    return data.movies
  }
}

export default new Api();
