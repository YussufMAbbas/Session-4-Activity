const gameScoreTracker = (function () {
    const players = {
        john: 10,
        sam: 20,
        doe: 5,
    }
    let currentPlayer = null

    function startGame(playerName) {
        if (Object.keys(players).includes(playerName)) {
            currentPlayer = playerName
        }
        else {
            players[playerName] = 0
            currentPlayer = playerName
        }
    }

    function updateScore(points) {
        players[currentPlayer] += points
    }

    function getPlayerScore(playerName=currentPlayer) {
        if (playerName === null) {
            console.log("Game hasn't started.")
            return
        }
        console.log(`${playerName}'s score: ${players[playerName]}`)
    }

    function endGame() {
        currentPlayer = null
        console.log("Game has ended!")
    }

    return {
        startGame,
        updateScore,
        getPlayerScore,
        endGame
    }
})()

gameScoreTracker.startGame("john")
gameScoreTracker.getPlayerScore()
gameScoreTracker.updateScore(10)
gameScoreTracker.getPlayerScore()
gameScoreTracker.endGame()

gameScoreTracker.startGame("joe")
gameScoreTracker.getPlayerScore()
gameScoreTracker.updateScore(10)
gameScoreTracker.getPlayerScore()
gameScoreTracker.endGame()

gameScoreTracker.startGame("joe")
gameScoreTracker.getPlayerScore()
gameScoreTracker.updateScore(10)
gameScoreTracker.getPlayerScore()
gameScoreTracker.endGame()

gameScoreTracker.getPlayerScore("sam")

gameScoreTracker.getPlayerScore()

console.log(gameScoreTracker.players) // returns undefined
console.log(gameScoreTracker.currentPlayer) // returns undefined
