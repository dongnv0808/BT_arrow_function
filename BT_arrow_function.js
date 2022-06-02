const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
];

// let totalMachineValue = inventory.reduce(function(total, inventory){
//     console.log(total);
//     return total + inventory.value;
// },0)

// reduce arrow function
let totalMachineValue = inventory.reduce((a, b) => a + b.value, 0);

// for of
// let totalMachineValue = 0;
// for(let inventoryValue of inventory){
//     totalMachineValue += inventoryValue.value;
// }

console.log(totalMachineValue);