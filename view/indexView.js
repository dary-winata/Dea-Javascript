const username = document.getElementById("username")
const deposit = document.getElementById("deposit")
const registerForm = document.getElementById("register_form")
const logoutButton = document.getElementById("logoutButton")
const registerDiv = document.getElementById("registerDiv")
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const box5 = document.getElementById("box5")
const startSection = document.getElementById("start")
const rewardSection = document.getElementById("reward")
const titleRegister = document.getElementById("title")
const iframeReward = document.getElementById("rewardVideo")
const depositText = document.getElementById("depositText")
const scoreText = document.getElementById("scoreText")

onload = function () {
    const username = sessionStorage.getItem('username')
    if(username && username != null) {
        tampilkanKotak(defaultRoll)
        tampilkanUser()
        registerForm.style.display = "none"
        registerDiv.style.display = "block"
        startSection.style.display = "block"
        setBoxLevel()
    }
}

const tampilkanKotak = (data) => {
    switch(level) {
        case 5:
            box5.textContent = data[4]
        case 4:
            box4.textContent = data[3]
        case 3:
            box1.textContent = data[0]
            box2.textContent = data[1]
            box3.textContent = data[2]
    }
}

const registerClick = () => {
    registerPlayer(username.value)
    tampilkanKotak(defaultRoll)
    tampilkanUser() 
    registerForm.style.display = "none"
    startSection.style.display = "block"
    registerDiv.style.display = "block"
    setTimeout(function() {
        location.href="#start"
    }, 500)
}

const logoutClick = () => {
    logoutPlayer()
    location.reload()
}

const startOnClick = () => {
    if(sessionStorage.getItem('deposit') >= 1000)
        startSlot()
    else
        alert("deposit kurang dari 1000")
}

const winnerSection = () => {
    switch(level) {
        case 5:
            if(box1.textContent != box5.textContent){
                alert("kamu kalah!!!")
                break
            }
        case 4:
            if(box1.textContent != box4.textContent){
                alert("kamu kalah!!!")
                break
            }
        case 3:
            if(box1.textContent == box2.textContent && box1.textContent == box3.textContent)
                setTimeout(function() {
                    winSlot()
                    iframeReward.src = "https://www.youtube.com/embed/rQ9YQJ3JpWw?autoplay=1&controls=0"
                    rewardSection.style.display = "block"
                    location.href="#reward"
                }, 500)
            else{
                alert("kamu kalah!!!")
            }
    }
}

const tampilkanUser = () => {
    const username = sessionStorage.getItem('username')
    const deposit = sessionStorage.getItem('deposit')
    const score = sessionStorage.getItem('score')
    titleRegister.textContent = "hello " + username
    depositText.textContent = "Deposito Anda: " + deposit
    scoreText.textContent = "Score Anda: " + score
}

const stopOnClick = () => stopSlot()

const setLevel = (levelParam) => {
    level = levelParam
    tampilkanKotak(defaultRoll)
    setBoxLevel()
}

const setBoxLevel = () => {
    switch(level) {
        case 5:
            box5.classList.add("box")
            box4.classList.add("box")
            console.log(level)
            break
        case 4:
            box4.classList.add("box")
            box5.textContent = null
            box5.classList.remove("box")
            break
        default:
            console.log("default")
            box4.textContent = null
            box5.textContent = null
            box5.classList.remove("box")
            box4.classList.remove("box")
    }
}

const depositClick = () => {
    isiDeposit(parseInt(deposit.value))
    location.reload()
}