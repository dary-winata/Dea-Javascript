let rolling

function randomSlot() {
    let hasilRandom = []
    for (let i = 0; i < level; i++) {
        const roll = defaultRoll[~~(Math.random() * level)]
        hasilRandom.push(roll)
    }

    return hasilRandom
}

function startSlot() {
    const deposit = parseInt(sessionStorage.getItem('deposit')) - 1000
    sessionStorage.setItem('deposit', deposit)

    rolling = setInterval(function() {
        const result = randomSlot()
        tampilkanKotak(result)
    }, 100)

    setTimeout(function() {
        clearInterval(rolling)
        winnerSection()
    }, 3000)
}

function stopSlot() {
    clearInterval(rolling)
    rolling = null
}

function winSlot() {
    const deposit = parseInt(sessionStorage.getItem('deposit')) + (1000 * (level - 2))
    sessionStorage.setItem('deposit', deposit)
    const score = parseInt(sessionStorage.getItem('score')) + 1
    sessionStorage.setItem('score', score)
}
