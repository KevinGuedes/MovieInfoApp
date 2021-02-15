const paths = require('../utils/paths')

const moviesMapper = (movies) => {

    return mappedMovies = movies.map(function (movie) {
        return {
            title: movie.original_title,
            overview: movie.overview,
            poster: `${paths.imageUrl}${movie.poster_path}`,
        }
    })

}

module.exports = {
    moviesMapper,
}
