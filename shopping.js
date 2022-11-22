function shopping (input) {
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpuCost = gpuCount * 250; 
    let cpuCost = 0.35 * gpuCost * cpuCount; 
    let ramCost = 0.10 * gpuCost * ramCount; 
    
    let totalExpenses = gpuCost + cpuCost + ramCost;
    
   

    if (gpuCount > cpuCount) {
        totalExpenses = 0.85 * totalExpenses
    }

    if (budget >= totalExpenses) {
        moneyLeft = budget - totalExpenses; 
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    } else if (budget < totalExpenses) {
        moneyNeeded = totalExpenses - budget; 
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }

}

shopping(["920.45",

"3",

"1",

"1"])