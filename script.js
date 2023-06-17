/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    //PrintDeveloperbyMap() - console.log all the employees which have the profession of developer using the map function. 
     let ans= arr.map(function(elem){
        if(elem.profession==="developer"){
            console.log(elem);
        }
     })
  }
  
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    //PrintDeveloperbyForEach() - console.log all the employees which have the profession of developer using the for each function. 
     let ans1= arr.forEach(function(elem){
         if(elem.profession==="developer"){
            console.log(elem);
         }

     })
  }
  
  function addData() {
    //Write your code here, just console.log
    //addData() - In this function make another such employee object and append that in this array. Example - push this in the array - {id:4,name:"susan",age:"20",profession:"intern"} and then console.log it. 
     let emp={
        id: 4, name: "Bob", age: "22", profession: "data-engineer" 
     }
     //let new_arr=[...arr, ...emp];
     arr.push(emp);
     console.log(arr);

  }

  function removeAdmin() {
    //Write your code here, just console.log
    //removeAdmin() - In this function remove the object where the profession is admin. console.log the changed array. 
    
    /*for(let i=0;i<arr.length;i++){
        if(arr[i].profession=="admin"){
            delete arr[i];
        }
    }
     console.log(arr);*/
       let updatedArray =arr.filter(function(elem){
           if(elem.profession!=="admin"){
                console.log(elem);
           }
       })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    //ConcatinateArray() - Make another array with 3 objects just like the one in the above given array. 
    let myarr=[{ id: 11, name: "Akhila", age: "18", profession: "SDE1" },
           { id: 21, name: "samriddhi", age: "88", profession: "SDE2" },
           { id: 31, name: "sreyasee", age: "78", profession: "SDE3"},];


           //     The objects should be different, with different ids and all other paramters should be different too. Then concatinate these 2 arrays, and console.log


           let requiredArr=arr.concat(myarr);
           console.log(requiredArr);

  }