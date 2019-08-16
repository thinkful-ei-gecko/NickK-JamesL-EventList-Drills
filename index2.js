//count to a number passed into form
//for num divisible by 3 ->fizz
//for num divisible by 5 ->buzz
//for num divisible by 15 ->fizzbuzz
//if not return num
function fizzbuzz(num){
    if(num % 3 === 0) return 'fizz';
    if(num % 5 === 0) return 'buzz';
    if(num % 15 === 0) return 'fizzbuzz';
    return num;
};

//for each nbr the prgm counts-->generate either num/fizz/buzz/fizzbuzz
function fizzBuzzHtml(fizzBuzzResult){
    let fizzType = '';//->since result is going to be either string or num
    if(typeof fizzBuzzResult === 'string'){//-> if the param is 'f' 'b' or 'fb'
        fizzType = fizzBuzzResult; //-> if true then set f, b, or fb to fizztype
    }
    return `
        <div class="fizz-buzz-item ${fizzType}">${fizzBuzzResult}</div>`;
        //set class to correct type->either f,b, or fb then show the result in html  
};



function submissionForm(){
    $('#number-chooser').submit(event => {
        event.preventDefault(); //->prevents web default of refreshing page
        const countsTo = $('#number-choice').val(); 
        //->the number user chooses will be the max num it counts to
        $('#number-choice').val('');//->get results
        const resultFizzBuzz = [];
        //push the results from the fizzbuzz fnct of num passed in
        for(let i =1; i <= countsTo; i++){
            resultFizzBuzz.push(fizzbuzz(i));
        }
        const html = resultFizzBuzz.map(result => fizzBuzzHtml(result));
        $('.js-results').html(html);
    });
};

$(submissionForm);