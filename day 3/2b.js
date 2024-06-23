const arr= ["hi i am venkat","from pondicherry","working in it"]
const toTitleCase =(array)=>{
    const ans =array.map(str=>
        str.split(' ').map(word =>
            word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
        ).join(' ')
    )
    console.log(ans)
};
toTitleCase(arr)