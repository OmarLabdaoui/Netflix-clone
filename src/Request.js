const API_KEY="84bf20882123351d2224b4a7aab326a0"

const requests={
    fetchTrending:`trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionsMovies:`/discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genre=99`,
}
export default requests;