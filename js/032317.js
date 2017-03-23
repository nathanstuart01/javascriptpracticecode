//let itemTwo = document.getElementById('two');

//let elText = itemTwo.firstChild.nodeValue;

//elText = elText.replace('pine nuts', 'kale');

//itemTwo.firstChild.nodeValue = elText;

//let firstItem = document.getElementById('one');

//let showTextContent = firstItem.textContent;

//let showInnerText = firstItem.innerText;

//let msg = '<p>textContent: ' + showTextContent + '</p>';
//    msg += '<p>innerText: ' + showInnerText + '</p>';
//let el = document.getElementById('scriptResults');
//el.innerHTML = msg;

//firstItem.textContent = 'sourdough bread';

let firstItem = document.getElementById('one');

let itemContent = firstItem.innerHTML;

firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';
