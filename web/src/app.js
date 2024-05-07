const doc = {
    empBody: document.querySelector('#empBody')
}

const state = {
    booklist : []
}

function getBooks () {
    const url ='http://localhost:8000/Books';
    fetch(url)
    .then(response => response.json() )
    .then(result => {
        emplist = result
        
        renderTable();
    });
}

function renderTable(){

    state.booklist.forEach( emp => {
        var tr = document.createElement('tr');
        tr.innerHTML= `
            <td>${emp.id}</td>
            <td>${emp.title}</td>
            <td>${emp.Author}</td>
            <td>${emp.Price}</td>
        `;
        doc.empBody.append(tr);
    })
}

getBooks();