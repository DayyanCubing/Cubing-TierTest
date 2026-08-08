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

const events = [
    two,
    three,
    four,
    five,
    six,
    seven,
    oh,
    megaminx,
    pyraminx,
    clock,
    sq1,
    fto,
    skewb,
    threeBLD,
    fourBLD,
    fiveBLD
];

const submitBTN = document.getElementById("submit");
//The percentiles for each tier. These are the lower bounds. 
const tierpercentiles = {
    "F": 0,
    "E": 20,
    "D": 40,
    "C": 70,
    "B": 90,
    "A": 99,
    "A+": 99.9,
    "S": 99.99,
    "S+": 99.999,
    "SS": 99.9999
};

//The scores for each tier
const tierscores = {
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
    "OH": 2,
    "MEGAMINX": 2,
    "PYRAMINX": 2,
    "CLOCK": 1, //This will remain here until it is removed from WCA when it will be considered
    "SQ1": 1,
    "SKEWB": 1,
    "FTO": 0,  //This is not yet a WCA event. It will have a weight of 2
    "THREEBLD": 1,
    "FOURBLD": 1,
    "FIVEBLD": 1
};

function calculate() {
    const times = events.map(event => {
        if (event.value === "") {
            return null;
        }
    
        return Number(event.value);
    });
}




submitBTN.addEventListener("click", () => {
    //on button click
    calculate()
});