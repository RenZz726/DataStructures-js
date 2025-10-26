function converter(num) {
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "tweleve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "ninteen"]
    const tens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninty"];

    if(num < 10) return ones[num];
    else if (num < 20) return teens[Math.floor(num % 10)];
    else if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? " " + ones[num % 10] : "");
    else if (num < 1000) {
        const rem = num % 100;
        return ones[Math.floor(num / 100)] + " hundred" + (rem ? " " + converter(rem) : "");
    } else if( num <= 2000) {
        if(num === 2000) return "Two thousand";
        else {
            const rem = num % 1000;
            return "One thousand " + (rem ? converter(rem): "") ;
        }
    }
}

console.log(converter(1355));