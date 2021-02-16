const paths = require('../utils/paths')

const moviesInfoMapper = (movies) => {

    return mappedMovies = movies.map(function (movie) {
        return {
            title: movie.original_title,
            overview: movie.overview,
            poster: `${paths.imageUrl}${movie.poster_path}`,
            id: movie.id,
        }
    })

}

module.exports = {
    moviesInfoMapper,
}
