// see ReadMe.md
function fizzBuzz(value) {
    var fizz = 3, buzz = 5;

    if(value % fizz != 0 && value % buzz != 0) {
        return value;
    } else {
        if(value % fizz == 0 && value % buzz != 0) {
            return 'fizz';
        }
        if(value % buzz == 0 && value % fizz != 0) {
            return 'buzz';
        }
        if(value % fizz == 0 && value % buzz == 0) {
            return 'fizzbuzz';
        }
    }

}

console.log(fizzBuzz(15));



// loop 30 times, printing the count value or 'fizz' for counts that 
// are multiples of 3 or 'buzz' for counts that are multiples of 5
for (var i=1; i <=30; i++) {
    if(i%3 != 0 && i%5 != 0) {
        console.log(i);
    } else {
        if(i%3 == 0 && i%5 != 0) {
            console.log('fizz');
        }
        if(i%5 == 0 && i%3 != 0) {
            console.log('buzz');
        }
        if(i%3 == 0 && i%5 == 0) {
            console.log('fizzbuzz');
        }
    }
}


// loop from 2 up until the value minus one as it's known that value is 
// divisible by itself and one
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

console.log(isPrime(7));