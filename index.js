
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(string = "go to the office") {
    return `This Monday, I will ${string}.`
};

function wrapAdjective(adj = '*') {
    return function(string = "special") {
        return `You are ${adj}${string}${adj}!`;
    }
}
