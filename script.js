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



const resultDiv = document.getElementById("result");
const breakdownDiv = document.getElementById("breakdown");

let cutoffs;
fetch("data/cutoffs.json")
    .then(response => response.json())
    .then(data => {
        cutoffs = data;

    });

const eventIDs = [
    "222",
    "333",
    "444",
    "555",
    "666",
    "777",
    "333oh",
    "minx",
    "pyram",
    "clock",
    "sq1",
    //"fto",
    "skewb",
    "333bf",
    "444bf",
    "555bf"
];

const weightIDs = [
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "OH",
    "MEGAMINX",
    "PYRAMINX",
    "CLOCK",
    "SQ1",
    //"FTO",
    "SKEWB",
    "THREEBLD",
    "FOURBLD",
    "FIVEBLD"
]

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
    //fto,
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
    "SS": 9,
    null: null
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
      //This is not yet a WCA event. It will have a weight of 2. FTO, that is
    "THREEBLD": 1,
    "FOURBLD": 1,
    "FIVEBLD": 1
};

function inTier(event,time) {
    const tierOrder = ["SS", "S+", "S", "A+", "A", "B", "C", "D", "E", "F"];

    for (const tier of tierOrder) {
        if (time === null) {
            return null;
        }

        if (time <= cutoffs[event][tier]) {
            return tier;
        }
    }
    if (time > cutoffs[event]["F"]) {
        return "F";
    }
    return null;
}

function scoreToTier(score) {
    for (const tier in tierscores) {
        if (tierscores[tier] == score) {
            return tier;
        }
    }
    return null;
}


function calculate() {
    const times = events.map(event => {
        if (event.value === "") {
            return null;
        }
    
        return Number(event.value);
    });

    const eventTiers = times.map((time,index) => {
        if (time === null) {
            return null;
        }

        const event = eventIDs[index]
        const tier = inTier(event, time)

        return {
            event: event,
            time: time,
            tier: tier,
            score: tierscores[tier]
        };
    });
    
    //weighted average
    let weightedTotal = 0;
    let Total = 0;

    eventTiers.forEach((result,index) => {
        if (result === null) {
            return;
        }
        const weightId = weightIDs[index]
        const weight = weights[weightId];
        weightedTotal += weight * result.score;
        Total += weight;
    });

    const overallScore = weightedTotal/Total;
    const overallTier = scoreToTier(Math.round(overallScore));

    //show result
    resultDiv.textContent = `${overallTier} Tier`; 
}




submitBTN.addEventListener("click", () => {
    //on button click
    calculate()
    
});