          //push()//numbers
  const numbers = [1,2,3];
  numbers.push(4,5);
 console.log(numbers);
         //push()//strings
  const str = ["Sri","Mahi","Koti"] ;     
    str.push("Nag","Anu","Sankar"),
    console.log(str); 
    
    
          //Pop()//numbers
  const num = [1,2,3,4];
  const lastNumber = num.pop();        
  console.log(lastNumber);
        //Pop()//String
const str1 = ["sri","Nag","ammu"];
const lastString = str1.pop();
console.log(lastString);


           //shift()//
  const numbers1 = [1,2,3,4,5];
 const firstNumber = numbers.shift();
    console.log(firstNumber);

    const str2 = ["sri","Nag","ammu"];
     const firstString = str1.shift();
    console.log(firstString);


                 //unshift()//


const names = ["sri","nag","anu"];
 names.unshift("raj","rani") 
console.log(names);

           
                  //find()//
    const a = [1,2,3,4,5,]
    const foundNumber = a.find((a)=>a>3);
     console.log(foundNumber);


              //sort()//
   const fruits =["banana","appie","orange","grape"]
   fruits.sort();
   console.log(fruits);          


const Names = [ 'Sri', 'Mahi', 'Koti', 'Nag', 'Anu', 'Sankar' ]
Names.sort();
console.log(Names);
           
const num2 =[100,80,60,40,20];
num2.sort((a,b)=> a-b);
console.log(num2);

                     //slice()//
const num3 = [1,2,3,4,5,6];
const S = num3.slice(4,6);
console.log(S);


            //map()//
  const numbers3 = [1, 2, 3, 4];
  const double = numbers3.map((num) => num * 2 );
  console.log(double);
            
 
                   //filter()//
 const numbers4 = [1, 2, 3, 4, 5];
  const evenNumbers = numbers4.filter((num) => num % 2 === 0 );
  console.log(evenNumbers);

                        //reduce()//
 const numbers5 = [1, 2, 3, 4, 5];
 const sum = numbers5.reduce((total, num) => total + num, 0);
 console.log(sum);


                          //forEach()//
     const num4 = [1, 2, 3, 4, 5];
     num4.forEach((num) => console.log(num * 2));
                          

                                //indexOf()//
 const fruit = ['banana', 'apple', 'orange', 'grape'];
 const orangeIndex = fruit.indexOf('orange');
                                
 console.log(orangeIndex);


                             //reverse()//
         const numbers6 = [1, 2, 3, 4, 5];
         numbers6.reverse();
         console.log(numbers6);


                            //join()//
 const fruits3 = ['banana', 'apple', 'orange', 'grape'];
const joinedFruits = fruits3.join(', ');
console.log(joinedFruits);

                                    


                                               
                   



            