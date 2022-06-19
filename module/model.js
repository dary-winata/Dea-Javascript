class User {
    constructor(_username, _role) {
        this._username = _username
        this._role = _role
    }

    get username() {
        return this._username
    }

    get role() {
        return this._role
    }
}

class Player extends User {
    constructor(_username, _role, _deposit) {
        super(_username, _role)
        this._deposit = _deposit
        this._score = 0
    }

    set deposit(_deposit) {
        return this._deposit = _deposit
    }

    get deposit() {
        return this._deposit
    }
}