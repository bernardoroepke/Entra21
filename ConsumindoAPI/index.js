function trocarForma(buttonNumber) {
    for (let i = 1; i <= 4; i++) {
        const form = document.getElementById(`form${i}`);
        if (i === buttonNumber) {
            form.style.display = "block";
        } else {
            form.style.display = "none";
        }
    }
}

// LISTAGEM DOS ANIMAIS

fetch("http://cafepradev.com.br:21020/animals/list")
    .then(result => result.json())
    .then((data) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let tbody = document.querySelector("tbody");
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            let td5 = document.createElement('td');

            tbody.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            td1.innerText = `${data[i].id}`;
            td2.innerText = `${data[i].name}`;
            td3.innerText += `${data[i].species}`;
            td4.innerText += `${data[i].color}`;
            td5.innerText += `${data[i].size}`;
        }
    })
    .catch(erros => console.log(erros));

// FORMULÁRIO ADICIONAR

let formadicionar = document.querySelector("#formadicionar");
let campoNome = document.querySelector("#campo2e1");
let campoEspecie = document.querySelector("#campo2e2");
let campoCor = document.querySelector("#campo2e3");
let campoTamanho = document.querySelector("#campo2e4");
    
formadicionar.addEventListener('submit', function(e) {

    fetch("http://cafepradev.com.br:21020/animals/insert", {
        method : "POST",
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        },
        body : JSON.stringify({
            name : campoNome.value,
            species : campoEspecie.value,
            color : campoCor.value,
            size : campoTamanho.value
        })
    })
    .then(result => result.json())
    .then((data) => {
        if(data.success) {
            console.log(data)
        } else {
            new Error(data.error)
        }
    })
    .catch(err => console.log(err))

    e.preventDefault();
})

// FORMULÁRIO EDITAR

let formeditar = document.querySelector("#formeditar");
let campoId = document.querySelector("#campo3e1");
let novoCampoNome = document.querySelector("#campo3e2");
let novoCampoEspecie = document.querySelector("#campo3e3");
let novoCampoCor = document.querySelector("#campo3e4");
let novoCampoTamanho = document.querySelector("#campo3e5");
    
formeditar.addEventListener('submit', function(e) {

    fetch("http://cafepradev.com.br:21020/animals/update", {
        method : "PUT",
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        },
        body : JSON.stringify({
            id : campoId.value,
            name : novoCampoNome.value,
            species : novoCampoEspecie.value,
            color : novoCampoCor.value,
            size : novoCampoTamanho.value
        })
    })
    .then(result => result.json())
    .then((data) => {
        if(data.success) {
            console.log(data)
        } else {
            new Error(data.error)
        }
    })
    .catch(err => console.log(err))

    e.preventDefault();
})

// FORMULÁRIO DELETE

let formdelete = document.querySelector("#formdelete");
let campo4 = document.querySelector("#campo4");

formdelete.addEventListener('submit', function(e) {

    let idEscolhido = campo4.value;

    fetch("http://cafepradev.com.br:21020/animals/delete", {
        method : "DELETE",
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        },
        body : JSON.stringify({
            id : idEscolhido
        })
    })
    .then(result => result.json())
    .then((data) => {
        if(data.success) {
            console.log(data)
        } else {
            new Error(data.error)
        }
    })
    .catch(err => console.log(err))

    e.preventDefault();
})