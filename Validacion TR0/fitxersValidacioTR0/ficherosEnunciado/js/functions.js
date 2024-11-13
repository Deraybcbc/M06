let barraSearch;
let listContainer;
let btnLike;
let btnDisLike;


function init() {
    console.log('init');
    barraSearch = document.querySelectorAll('.form-control')
    listContainer = document.querySelector('#list');
}

function getJson() {
    fetch('http://alvaro.daw.inspedralbes.cat/api.php/records/BOOK', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            console.log(data.records);

            const ul = document.createElement('ul')
            for (let i = 0; i < data.records.length; i++) {
                listContainer.innerHTML += `
                <div class="card" style="width:200px; heigth:300px;">
                    <img src="${data.records[i].cover}" style="width:200px; height: 300px;"></img>
                    <br>
                    <a>${data.records[i].title}</a>
                    <br>
                    <div class="buttons">
                        <button class="btnlike" data-id-api='${data.records[i].id}'>
                            <img  class="btnlike" data-id-api='${data.records[i].id}' src="/img/hand-thumbs-up.svg"></img>
                        </button>
                        <button class="btndislike" data-id-api='${data.records[i].id}'>
                            <img class="btndislike" data-id-api='${data.records[i].id}' src="/img/hand-thumbs-down.svg"></img>
                        </button>
                    </div>

                <div>         
                `
            }
        })
        .catch(error => console.log(error))
}

function btnLikes() {
    listContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('btnlike')) {
            let id = e.target.dataset.idApi;
            window.alert("Like: " + id)
        } else if((e.target.classList.contains('btndislike'))) {
            let id = e.target.dataset.idApi;
            window.alert("Dislike: " + id)
        }
    })


}


document.addEventListener("DOMContentLoaded", function () {
    //EL TEU CODI AQUI
    init();
    getJson();
    btnLikes();
})
