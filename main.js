let elemH1 = document.getElementsByClassName('firstH1')[0];
elemH1.style.color = 'green'
elemH1.style.backgroundColor = 'pink'

// Q2
let elemP = document.getElementById('para');
elemP.style.fontWeight = 'bold'

elemP.classList.add("para")

// Q3

let elemImg = document.getElementsByTagName("img")[0];
elemImg.src = 'https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg';
elemImg.style.height = '100px';
elemImg.style.width = '100px';

// Q4

let elemUl = document.querySelector('#listUl');
let items = ['test1', 'test2', 'test3'];

for (i in items) {
    let addingLi = document.createElement('li');
    addingLi.textContent = items[i];
    elemUl.appendChild(addingLi);
    addingLi.style.color = 'green';
    addingLi.style.border = '1px solid black';
}
elemUl.style.display = "flex";
elemUl.style.justifyContent = "space-around";

// Q5

let tableDiv = document.getElementById('tableContainer');
let table = document.createElement('table');

for (let i = 0; i < 2; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
        let cell = document.createElement('td');
        cell.textContent = "cell" + (j + 1);
        row.appendChild(cell);
    }
    table.appendChild(row);
}

tableDiv.appendChild(table);

table.className = 'tableClass';


