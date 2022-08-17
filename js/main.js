/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap 
(inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

var listArray = ["első", "második", "harmadik"];

const generateList = (array) => {
	let listElementOpen = '<ul>';
	for (i = 0; i < array.length; ++i) {
		const listItem = `<li>${array[i]}</li>`;
		listElementOpen = `${listElementOpen}${listItem}`
	}

	return `${listElementOpen}</ul>`
}

generateList(listArray);

export default generateList;