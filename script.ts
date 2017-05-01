function numbers(n){
let a = 0, b = 1, c = 1;
for(i = 2; i <= n; i++){
c = a + b;
a = b;
b = c;
}
return c;
}

console.log(numbers(1));
