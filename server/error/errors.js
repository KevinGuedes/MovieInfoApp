class ExternalApiError extends Error {
    constructor(message) {
        super(message)
        this.name = 'External API Error'
        this.message = message
    }
}

module.exports = {
    ExternalApiError
}
