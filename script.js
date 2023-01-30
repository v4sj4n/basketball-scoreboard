let homeScore = 0
let awayScore = 0
let homeScoreP = document.getElementById('home-score')
let awayScoreP = document.getElementById('away-score')

let scoreChanger = (team, points) => {
  if (team === 'home') {
    homeScore += points
    homeScoreP.textContent = homeScore
  } else {
    awayScore += points
    awayScoreP.textContent = awayScore
  }
}

let newGame = () => {
  homeScore = 0
  awayScore = 0
  homeScoreP.textContent = homeScore
  awayScoreP.textContent = awayScore
}
