//map, filter and reduce//

//what is map()  ?
               
                   //map()//
const nums = [1,2,3,4,5];

const maltiply = nums.map((num, i, arr) =>{
       return num * 2 + i;
});

console.log(maltiply);
                  
                 //filter()//
const num1 = ["raju","raghu","sree","lakshmi"];

const str = num1.filter((String) =>{
    return String > "sree";
});
console.log(num1);


                     //reduce//
const num2 = [1,2,3,4,5,];
const sum = num2.reduce((acc, curr, i, arr) => {
    return acc +curr;
},0);

console.log(sum);

// map //
let map = new Map([
    [1 , 10], [2 , 20] ,
    [3, 30],[4, 40]
    ]);
     
console.log("Map1: ");
console.log(map);


//map - 2 //
let map1 = new Map([ 
	[1, 2], 
	[2, 3], 
	[4, 5] 
]); 

console.log("Map1"); 
console.log(map1); 

let map2 = new Map([ 
	["firstname", "srilakshmi"], 
	["lastname", "cheeraboina"], 
	["website", "srilakshmi@.com"] 
]); 

console.log("Map2"); 
console.log(map2);


//MAp - 3 //
const arr = [4, 5, 10, 3, 8, 6];
let result = [];

// Square function returns square of a number
const square = function (num) {
	return num * num;
}

for (let i = 0; i < arr.length; i++) {
	result.push(square(arr[i]));
}

// Expected output: [16 ,25, 100, 9, 64, 36]
console.log(result);



//mapget()//

let GFGMap = new Map(); 

// Adding a key value pair 
GFGMap.set(1, "India"); 

// Getting the value by key 
console.log(GFGMap.get(1)); 

// Updating the existing value 
GFGMap.set(1, "England"); 

// Getting the value back 
console.log(GFGMap.get(1)); 


//map forEach()//

// Creating a map using Map object
let mp = new Map()

// Adding values to the map
mp.set("a", 1);
mp.set("b", 2);
mp.set("c", 3);

// Logging map object to console
mp.forEach((values, keys) => {
	console.log(values, keys)
})




//null

var x = null;
console.log(typeof(x));



//undefined
var y;
console.log(typeof(y));



//   map    //

const array1 = [1, 4, 9, 16];

// Pass a function to map
const mp1 = array1.map((x) => x * 2);

console.log(mp1);



const input = "srilakshmi";

let reversed = "";
for(let i = input.length -1; i>=0; i--){
    reversed += input[i];
}
console.log(reversed);









