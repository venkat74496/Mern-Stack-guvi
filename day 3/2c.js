const arr =[1,2,3,4,5,6,7,8,9,10]
const isSumArray =(array)=>{
    const ans=array.reduce((count, num)=>count+num, 0)
    console.log(ans)
};
isSumArray(arr)