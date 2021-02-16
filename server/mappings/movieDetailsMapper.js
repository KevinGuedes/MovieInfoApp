const movieDetailsMapper = (details) => {

    return {
        title: details.title,
        adult: details.adult,
        releaseDate: details.release_date,
        originalLanguage: details.original_language,
    }

}

module.exports = {
    movieDetailsMapper,
}
