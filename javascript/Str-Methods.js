         //charAt()//
let name = "srilakshmi"
let sri = name.charAt(5);
console.log(sri);

        
const string = "Hello World!";

let index1 = string.charAt(8);

console.log("Character at index 1 is " + index1);

        //indexOf()//
let x = "nagaraju"
console.log(x.indexOf("r"));

        //lastIndexOf()//
console.log(x.lastIndexOf("n"))

          //toLowerCase()//
  let a = "SRILAKSHMI";
  let i = a.toLowerCase();
  console.log("Ch." + i); 
  
          //toUpperCase()//
const b = "srilakshmi";
console.log(b.toUpperCase());

         //concat()//
 let sree = "sri";
 let nag = "Nag";
 const g =sree+nag;  //first methode
 console.log(g);
console.log(sree.concat(nag));  //second mathode

              //trim()//This method does not accept any parameter//

function srii() {
        let Str = "   srilakshmi   ";
        let h = Str.trim();
        console.log(h);

}
srii();


            //split()//
function c() {
        let d = "srilakshmi";
        let e = d.split("lakshmi");
        console.log(e)
}
        c();


              //startsWith()//
              //endsWith()//
  function func() {
 
                
                let str = 'It is a great day.';
                let value = str.startsWith("It");
                let value1 = str.endsWith(".");
                let value2 = str.startsWith("a",6);


                console.log(value);
                console.log(value1);
                console.log(value2);
  }
  func()           

                  //slice()//to cut string
 let A = 'ch srilakshmi';
  B1 = A.slice(0, 2);
 C1 = A.slice(3, 6);
 D1 = A.slice(6);
                   
                 
    console.log(B1);
                 
    console.log(C1);
                 
    console.log(D1);

                    //substring()//In this example, we are using starting and last index values.
                    //substr()// In this example, the method substr() extracts the substring starting at index 5, and the length of the string is 6.

  const str1 = "ch srilakshmi";//substring()
  const result = str1.substring(2, 6); 
 console.log(result);

 function func() {    //substr()
 
        
        let str2 = 'It is a great day.';
     
        let sub_str = str2.substr(5, 6);
        console.log(sub_str);
    }
     
    func();


                         //includes()//

 let str3 = " In this case, the second parameter is not defined, so the search will take place from the starting index. But as this method is case sensitive it will treat the two strings differently, hence returning a boolean false." 

 
 let check = str3.includes("will");
 let check1 = str3.includes("Will");

 console.log(check);
 console.log(check1);


                         //repeat()//
        const f = "sri";
        k = f.repeat(5); 
        console.log(k); 
        
                        //replace()//
                        //replaceAll//
const a1 ="sri Nagaraju"
const a2 = a1.replace("sri","srilakshmi");
const a3 = a1.replaceAll("sri Nagaraju","Nag sri");

console.log(a2);
console.log(a3);

                  
                //padStart()//
                //padend()//

            
                function pad() {
                        
                        ex = "sri";
                        ex2 = "Nag";
                         
                 
                        
                        prep = ex.padStart(8, "@");//padStart//
                        prep2 = ex2.padEnd(8, "XX");//padEnd//
                     
                        
                        console.log(prep);
                        console.log(prep2);
                    }
                     
                
                    pad()
                             

                           //toLocateLowerCase()//
                           //toLocateUpperCase()//
