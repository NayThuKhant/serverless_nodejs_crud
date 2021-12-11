function forbidden(message) {
    return {
        statusCode: 403,
        body: JSON.stringify({
            message,
        }),
    }
}

function success(data) {
    return {
        statusCode: 200,
        body: JSON.stringify(data),
    }
}

function validationFailed(data) {
    return {
        statusCode: 422,
        body: JSON.stringify(data)
    }
}

function failed(reason) {
    return {
        statusCode: 500,
        body: JSON.stringify({
            error: reason
        })
    }
}

function notFound(reason) {
    return {
        statusCode: 400,
        body: JSON.stringify({
            error: reason
        })
    }
}

module.exports = {forbidden, success, failed, validationFailed, notFound}
