const Model = require('./model.js')
const moment = require('moment')

class User extends Model {
    constructor() {
        super()
        this.tableName = "users"
        this.query()
    }

    create(payload) {
        payload.created_at = moment().format("YYYY-MM-DD HH:mm:ss")
        return super.create(payload)
    }

    findAndUpdate(id, payload) {
        payload.updated_at = moment().format("YYYY-MM-DD HH:mm:ss")
        return super.findAndUpdate(id, payload)
    }
}

module.exports = User