class Validator {
    errors = {}
    data = {}

    addErrors = (key, value) => {
        this.errors[key] = value
        return false
    }

    addData = (key, value) => {
        this.data[key] = value
        return true
    }

    result = () => {
        if (Object.getOwnPropertyNames(this.errors).length > 0) {
            return {passed: false, errors: this.errors}
        }

        return {passed: true, data: this.data}
    }
}

module.exports = Validator