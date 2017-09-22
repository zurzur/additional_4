module.exports = function multiply(first, second) {

let product = new Array(first.length+second.length).fill(0);

for(let i = first.length-1; i >= 0; i--) {

    for(let j = second.length-1; j>=0; j--) {

        let digitsProduct = +first[i] * +second[j];
        let digitIndex = product.length - first.length + i - second.length + j + 1;

        digitsProduct += +product[digitIndex];
        product[digitIndex] = digitsProduct%10;
        product[digitIndex-1] += Math.floor(digitsProduct/10);
    }
}

if (product[0] === 0) product.splice(0,1);
return product.join('');
}
