function reduceSum(accumulator,current){
    return accumulator + current
}

export default function PrimeSum(lenght) {
    if (lenght === '' || lenght === null || lenght === undefined){
        return 0;
    }
    var n = 0;
    try{
        n= parseInt(lenght,10);
    }catch(e){
        n = 0;
    }
    if (n === 0) {
        return 0;
    }
    var prime_numbers = [2];
    var i = 3;
    while (prime_numbers.length < n) {
        let isPrime = true;
        let j = 0;
        while ( isPrime && j < prime_numbers.length){
            if(i%prime_numbers[j] === 0){
                isPrime = false
                break;
            }
            j++;
        }
        if (isPrime){
            prime_numbers.push(i)
        }
        i++;
    }
    return prime_numbers.reduce(reduceSum)
}