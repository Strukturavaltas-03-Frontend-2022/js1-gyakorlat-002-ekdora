/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap 
(inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

const listArray = ["első", "második", "harmadik"];

const generateList = (array) => {
	listElement = document.createElement('ul');
	document.getElementsByTagName('body')[0].appendChild(listElement);
	for (i = 0; i < array.length; ++i) {
			listItem = document.createElement('li');
			listItem.innerHTML = array[i];
			listElement.appendChild(listItem);
	}
}

generateList(listArray);

export default generateList;