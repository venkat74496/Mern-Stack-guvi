(function(array){
    var ans=array.filter(function(num){
        return num%2!==0
    });
    console.log(ans);
})([1,2,3,4,5,6,7,8,9,10]);