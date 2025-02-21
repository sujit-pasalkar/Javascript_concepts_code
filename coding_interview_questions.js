// sorting

// sort array strings 
let arr = ["Harray", "warcross", "tHe Hunger"];
console.log('sorted arr string:',arr.sort( (a,b) => b-a ))
// Sort array of objects by author's lastname

const book = [
    { nm: "Harray", 'auther':'joanne' },
    { nm: "warcross", 'auther':'joanne' },
    { nm: "tHe Hunger", 'auther':'joanne' }
]

const sortedObject = book.sort()