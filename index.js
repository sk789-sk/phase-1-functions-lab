// Code your solution in this file!

function distanceFromHqInBlocks(location){
    let output = location-42;
    if (output <0) {
        output = output*(-1)
    }
    return output
}

function distanceFromHqInFeet(location){
    let out = 264*distanceFromHqInBlocks(location)
    return out
}

function distanceTravelledInFeet(start,end){
    let out = (end-start)*264
    if (out <0){out = 0-out}
    return out
}

function calculatesFarePrice(start,end){
    let distanceTravelled = distanceTravelledInFeet(start,end)
    if (distanceTravelled > 2500){return "cannot travel that far"}
    if (distanceTravelled < 400) {return 0}
    if (distanceTravelled < 2000){
        return (.02*(distanceTravelled-400))
    }
    if (distanceTravelled > 2000){return 25}
}

console.log(calculatesFarePrice(30,31))