let home = 0
let away = 0


function homeScore() {
    home++
    drawScore()
    return home
}

function awayScore() {
    away++
    drawAwayScore()
    return away

}

function homeScoreThree() {
    home += 3
    drawScore()
    return home
}

function awayScoreThree() {
    away += 3
    drawAwayScore()
    return away
}

function resetScoreHome() {
    home = 0
    away = 0

    drawResetScoreHome()
    drawResetScoreAway()

    return

}

function drawScore() {
    document.getElementById('home-score').textContent = home

}

function drawAwayScore() {
    document.getElementById('away-score').textContent = away

}

function drawResetScoreHome() {
    document.getElementById('home-score').textContent = home

}

function drawResetScoreAway() {
    document.getElementById('away-score').textContent = away

}
