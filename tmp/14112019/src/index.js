const fetch = require('node-fetch');
const jsdom = require('jsdom');


const {JSDOM} = jsdom;
const HEADERS = ['Год', 'Название', 'Автор']


function parseBooks(books) {
    const parsedBooks = [];

    for (const book of books) {
        parsedBooks.push(
            {
                title: book.querySelector('title').textContent,
                author: book.querySelector('author').textContent,
                year: book.querySelector('year').textContent
            }
        );
    }

    return parsedBooks;
}


async function main() {
    const txt = await fetch('https://kodaktor.ru/g/books_list').then(resp => resp.text());    
    const originalDoc = new JSDOM(txt);
    let books = originalDoc.window.document.querySelector('data').children;
    books = parseBooks(books);
    
    // Here we go again: empty document
    const newDoc = new JSDOM().window.document;
    // Table
    const table = newDoc.createElement('table');
    newDoc.body.appendChild(table);
    // Table header
    let tr = newDoc.createElement('tr');
    table.appendChild(tr);
    for (const header of HEADERS) {
        const textNode = newDoc.createTextNode(header);
        const th = newDoc.createElement('th');
        th.appendChild(textNode);
        tr.appendChild(th);
    }
    // Table content
    for (const book of books) {
        let tr = newDoc.createElement('tr');
        table.appendChild(tr);
        for (const property in book) {
            const td = newDoc.createElement('td');
            tr.appendChild(td);
            const textNode = newDoc.createTextNode(book[property]);
            td.appendChild(textNode);
        }
    }
    console.log(newDoc.body.innerHTML);
}

main();
