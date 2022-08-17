/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! 
(Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/

const numericArray = [1, 12, 28, 50, 100];

const brutto = (array) => Number(array.reduce(
	(previousValue, currentValue) => previousValue + currentValue * 1.27, 
	0
).toFixed(0));

console.log(brutto(numericArray));