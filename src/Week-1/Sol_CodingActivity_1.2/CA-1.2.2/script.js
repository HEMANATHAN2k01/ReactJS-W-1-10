//---Rest---

function sumAll(...rest)
{
    let total =0
    for (const arg of rest)
    {
        total+=arg
    }
    return total
}
console.log(sumAll(1,2));//3
console.log(sumAll(1,2,3));//6
console.log(sumAll(1,2,3,4));//10