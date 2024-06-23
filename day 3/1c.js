var arr=[1,2,3,4,5,6,7,8,9,10]
var isSumArray =function(array){
    var ans=array.reduce(function(count, num){
        return count+num
    }, 0)
    console.log(ans)
};
isSumArray(arr)