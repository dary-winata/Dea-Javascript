let player = null

const registerPlayer = (username) => {
    sessionStorage.setItem('username', randomToken(username))
    sessionStorage.setItem('deposit', 5000)
    sessionStorage.setItem('score', 0)
    player = new Player(username, "Player", 5000)
}

const randomToken = (username) => {
    const random = ~~[Math.random() * 1000]
    const token = username + random.toString()
    return token
}

const logoutPlayer = () => {
    sessionStorage.removeItem('username')
    player = null
}

const isiDeposit = (depositParam) => {
    let playerDeposit = parseInt(sessionStorage.getItem('deposit'))
    console.log(playerDeposit + depositParam)
    playerDeposit = depositParam + parseInt(playerDeposit)
    sessionStorage.setItem('deposit', playerDeposit)
}

const getDeposit = () => {
    return player.deposit
}