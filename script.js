function numbers(howMany) {

    if (howMany === 0) return;

    let numArray = [0];

    if (howMany === 1) {
        console.log(numArray);
        return;
    }


    numArray.push(1);

    for(let i = 2, length = howMany; i < length; i++) {

        numArray.push(numArray[i-1] + numArray[i-2]);
    }


    console.log(numArray);
}

numbers(20);
