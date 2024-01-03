//---Spread---

const terrestrials = ["fox", "lion", "elephant"];
const aquatics = ["shark", "whale", "octopus"];

allAnimal = [...terrestrials,...aquatics]
console.log('After the spread function : '+JSON.stringify(allAnimal))
