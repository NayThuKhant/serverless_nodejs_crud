const knex = require('../../bootstrap/database')


class Model {
    constructor() {
        this.tableName = null
    }

    all() {
        this.query()
        return this.table.select()
    }

    create(payload) {
        this.query()
        return this.table.insert(payload).then((item) => this.find(item[0]))
    }

    find(id) {
        this.query()
        return this.table.select().where('id', id).first()
    }

    findAndUpdate(id, payload) {
        this.query()
        return this.find(id).update(payload).then(() => this.find(id))
    }

    findAndDelete(id) {
        this.query()
        return this.find(id).del().then((item) => {
            console.log(item)})
    }

    query() {
        this.table = knex(this.tableName)
        return this.table
    }
}

module.exports = Model
