// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let hq = 42;
  return Math.abs(hq-location)
  
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location)*264
}

function distanceTravelledInFeet(arg1, arg2) {
  return Math.abs(arg1-arg2)*264
}

function calculatesFarePrice(start, destination) {
  feet = Math.abs(start-destination)
  if (feet <= 400) {
    return 0;
  } else if (feet < 2000) {
    return feet*2
  }
  }
}
}