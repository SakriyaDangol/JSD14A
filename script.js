const table = document.getElementById('table');

{
const titleHead = document.createElement('th');
table.appendChild(titleHead);
titleHead.innerHTML = 'Title';

const authorHead = document.createElement('th');
table.appendChild(authorHead);
authorHead.innerHTML = 'Author';

const isbnHead = document.createElement('th');
table.appendChild(isbnHead);
isbnHead.innerHTML = 'ISBN#';
}


const form = document.querySelector('.submit-page');
form.addEventListener('submit', submit);

function submit(event){
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    const titleData = document.createElement('td');
    tableRow.appendChild(titleData);
    titleData.innerHTML = title;

    const authorData = document.createElement('td');
    tableRow.appendChild(authorData);
    authorData.innerHTML = author;

    const isbnData = document.createElement('td');
    tableRow.appendChild(isbnData);
    isbnData.innerHTML = isbn;
}

console.log(table);