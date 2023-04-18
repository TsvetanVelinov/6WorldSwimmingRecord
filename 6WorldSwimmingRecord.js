function worldSwimmingRecord (input){

let recordInSeconds = Number (input[0]);
let distanceInMeters = Number (input[1]);
let SecondsPerMeters = Number (input[2]);

let ivanTime = distanceInMeters * SecondsPerMeters;
let waterResistance= Math.floor(distanceInMeters/15) * (12.5)
let ivanTimeWithResistance = ivanTime + waterResistance;

let difference = Math.abs(recordInSeconds - ivanTimeWithResistance)

if (ivanTimeWithResistance < recordInSeconds){

    console.log(`Yes, he succeeded! The new world record is ${ivanTimeWithResistance.toFixed(2)} seconds.`);  
} else {

    console.log(`No, he failed! He was ${(difference).toFixed(2)} seconds slower.`);
}


}

worldSwimmingRecord (["10464","1500","20"])

worldSwimmingRecord (["55555.67","3017","5.03"])
