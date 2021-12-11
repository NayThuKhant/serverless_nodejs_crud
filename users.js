'use strict'
const {userController} = require('./src/controllers')

const index = async () => {
    return await userController.index()
}

const create = async (event) => {
   return await userController.create(event)
}

const show = async (event) => {
    return await userController.show(event)
}

const update = async (event) => {
    return await userController.update(event)
}

const deleteUser = async (event) => {
    return await userController.deleteUser(event)
}

module.exports = {index, create, show, update, deleteUser}
