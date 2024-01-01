     //        push()    1    //

     const name = ["sri","Nag","Mahi","Anu"];
    let str = name.push("koti","siri");
     console.log(str);

     function func() {
	let arr = ['sri', 'nag', 'anu'];
	// Pushing the element into the array
	arr.push('mahi','koti');
	console.log(arr);
}
func();


    //       pop()    2    //

    const fruits = ['banana','orenge','apple','mongo'];
    let removed = fruits.pop();
    console.log(fruits);


    //     push()    3     //


    const name2 = ["sri","Nag","Mahi","Anu"];
     name2.push("koti","siri");
     console.log(name2);

     //      findIndex()     4        //

     let name1 = ['sri', 'nag', 'anu', 'mahi'];
     a = name1.indexOf('nag')
     // Printing result of method
     console.log(a)
     

     //       shift() &  pop()        5         //

     
	function func() { 
		
		// Original array 
		var array = ["sri", "siri", "raju", "anu"]; 
	
		// Checking for condition in array 
		var value = array.shift(); 
	
		console.log(value); 
		console.log(array); 
	} 
	
	func(); 




	
		var arr = ['sri', 'lakshmi', 'santhi', 'siri']; 
	
		// Popping the last element from the array 
		console.log(arr.pop()); 
	
	 

         //     reverse()       6    //


         const fruits1 = ["banana","orange","apple"];
         console.log(fruits.reverse());
      
     
        //       splice()        7        //

        let num = [5,6,2,7,6];
        num.splice(2,1);
        console.log(num);

         
        //       includes()      8     //

        const num3 = [1,2,3,4,5,6]
        console.log(num3.includes(5));

          //      sort()        9       //

const numbersArr = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5];

// Ascending Order
numbersArr.sort((a, b) => a - b);
console.log(numbersArr); // Output: [2,3,3,4,5,5,5,6,9,10,21]

// Descending Order
numbersArr.sort((a, b) => b - a);
console.log(numbersArr); // Output: [21,10,9,6,5,5,5,4,3,3,2]



           //          concat()         10           //

           

function func() { 

	// Original string 
	let str = 'sri'; 

	// Joining the strings together 
	let value = str.concat('lakshmi ','&' , ' nagaraju'); 
	console.log(value); 
} 

func();



