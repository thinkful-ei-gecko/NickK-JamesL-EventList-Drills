// your code here
//create event listner on submit
function fizzbuzz(countTo){
    let myArr = [];
    for(let i =1;i <= countTo;i++){
       
        if(i % 15 === 0){
            return 'fizzbuzz'
        }
        if(i % 3 === 0){
            return 'fizz'
        }
        if(i % 5 === 0){
            return 'buzz'
        }
            myArr.push([i])
        }
            return myArr;
    }

    $().on('submit',)





//