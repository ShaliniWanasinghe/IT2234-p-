function maxPurchase(budget, keyboards, mice) {
    let max = -1;
    
    for (let k of keyboards) {
        for (let m of mice) {
            const total = k + m;
            if (total <= budget && total > max) {
                max = total;
            }
        }
    }
    
    return max;
}

console.log("example 01")

k =[40,50,60];
m=[5,8,12];
console.log("Budget = 60")
console.log("Key board prices = ",k);
console.log("Key board prices = ",k);
console.log(maxPurchase(60, [40,50,60], [5,8,12])); 


console.log("example 02")
n =[3,1];
l=[5,2,8];
console.log("Budget = 10")
console.log("Key board prices = ",n);
console.log("Key board prices = ",l);
console.log(maxPurchase(10, [3,1], [5,2,8])); 

console.log("example 03")
a =[30,15];
b=[8,10,6];
console.log("Budget = 20")
console.log("Key board prices = ",a);
console.log("Key board prices = ",b);
console.log(maxPurchase(20, [30,15], [8,10,6]));