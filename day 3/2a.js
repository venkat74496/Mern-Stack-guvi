const arr=[1,2,3,4,5,6,7,8,9,10]

const printOdd =(array)=>{
    const ans=array.filter(num =>num%2!==0);
    console.log(ans)
};
printOdd(arr)