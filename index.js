function saturdayFun(acty='roller-skate'){
    return `This Saturday, I want to ${acty}!`;
}
function mondayWork(acty='go to the office'){
    return `This Monday, I will ${acty}.`;
}




function wrapAdjective(x="*"){
    return function(msg='special'){
        return x === "*" ? `You are ${x}a hard worker${x}!` : `You are ${x}a dedicated programmer${x}!`;
}
}
const encouragingPromptFuncion = wrapAdjective(x)


