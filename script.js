//Collect elements as variables
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");

const oh = document.getElementById("oh");
const megaminx = document.getElementById("megaminx");
const pyraminx = document.getElementById("pyraminx");
const clock = document.getElementById("clock");
const sq1 = document.getElementById("sq1");
const fto = document.getElementById("fto");
const skewb = document.getElementById("skewb");

const threeBLD = document.getElementById("threeBLD");
const fourBLD = document.getElementById("fourBLD");
const fiveBLD = document.getElementById("fiveBLD");

const submitBTN = document.getElementById("submit");

//The scores for each tier
const tiers = {
    "F": 0,
    "E": 1,
    "D": 2,
    "C": 3,
    "B": 4,
    "A": 5,
    "A+": 6,
    "S": 7,
    "S+": 8,
    "SS": 9
};

//The weights of the events
const weights = {
    "TWO": 2,
    "THREE": 4,
    "FOUR": 3,
    "FIVE": 2,
    "SIX": 2,
    "SEVEN": 2,

};
submitBTN.addEventListener("click", () => {
    //on button click
    console.log("everything works fine")
});