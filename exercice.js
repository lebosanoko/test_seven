function countDivisors(integer) {
    if (integer > 100 || integer < 1) {
        return "L'entier doit être supérieur à 0 et inférieur à 100";
    }
    
    const divisors = [];
    
    for (let i = 1; i <= integer; i++) {
        if (integer % i === 0) {
            divisors.push(i);
        }
    }
    
    return divisors;
}

// Test de la fonction
const integer = 15;
const result = countDivisors(integer);
console.log(result);
