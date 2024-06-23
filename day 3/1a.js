var arr1=[1,2,3,4,5,6,7,8,9,10];

var printOdd = function(array){
    var ans = array.filter(function(num){
        return num%2 !==0;
    });
    console.log(ans)
};
printOdd(arr1)