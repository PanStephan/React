function calcDeg(hours, minutes) {
  if(hours > 24) return console.log('more than 24h')
  if(minutes > 60) return console.log('more than 60m')
  if(hours > 12) {
    hours = hours-12;
  }
  else if(hours === 12) {
    hours = 0
  }
  else if(minutes === 60) {
    minutes = 0 
  }
  calcCurrentDeg(hours, minutes) 
}

function calcCurrentDeg(currHours, currMinutes) {
  let deg = (currHours+(currMinutes/60))*30-currMinutes*6
  if(deg < 0) deg = 360+deg
  return console.log(`deg between hours and minutes arrows:${deg}`)
}

calcDeg(23, 11)
calcDeg(23, 61)
calcDeg(0, 0)
calcDeg(24, 14)
calcDeg(25, 11)
calcDeg(15, 24)
calcDeg(12,60)
calcDeg(15,15)
calcDeg(12,35)
calcDeg(14,00)
calcDeg(18,30)

