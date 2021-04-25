function findLongest(array){
    var newArr=array.slice().sort(function(a,b){    //slice method allows you to trim the array
      return b.toString().length-a.toString().length;  //tostring returns a string representing the object which in this case is a and b
      
    })
    return newArr[0];
   }