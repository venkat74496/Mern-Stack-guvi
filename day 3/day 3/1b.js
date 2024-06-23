var arr =["hi i am venkat","from pondicherry","working in it"]

var toTitleCase =function(array){
    var ans =array.map(function(str){
        return str.split(' ').map(function(word){
            return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
        }).join(' ')
    });
    console.log(ans)
};
toTitleCase(arr)