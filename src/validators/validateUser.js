const Validator = require('./validator')
const {userModel} = require("../models")

class UserValidator extends Validator {

    validateCreation = (event) => {
        this.validateName(event)
        return this.result()
    }

    validateShowing = (event) => {
        this.validateId(event)
        return this.result()
    }

    validateUpdating = async (event) => {
        this.validateName(event)
        await this.validateIfIdExists(event)
        return this.result()
    }

    validateDeleting = async (event) => {
        await this.validateIfIdExists(event)
        return this.result()
    }


    validateName(event) {
        const body = event.body
        if(!body) {
            return this.addErrors("body", "request body is required")
        }

        const {name} = JSON.parse(body)
        if (!name || !name instanceof String) {
            return this.addErrors("name", "name field is required and need to be string")
        } else {
            return this.addData("name", name)
        }
    }

    validateId(event) {
        const id = event.pathParameters.id
        if (!id || isNaN(id)) {
            return this.addErrors("id", "route path parameter 'id' is required and need to be integer")
        } else {
            return this.addData("id", id)
        }
    }

    async validateIfIdExists(event) {
        if (this.validateId(event)) {
            const user = await new userModel().find(event.pathParameters.id)
            if (!user) {
                return this.addErrors("user", `The requested user does with id ${event.pathParameters.id} not exist`)
            } else {
                return this.addData("user", user)
            }
        }
    }
}

module.exports = UserValidator