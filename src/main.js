// main
loadItems()
    .then(items => {
        displayItems(items); //items 보여주기
        setEventListeners(items); //items 이벤트 걸기
    })
    .catch();


function loadItems() {
    return fetch('./data/data.json')
        .then(response => response.json()) //JSON형식의 문자열을 객체로 변환
        .then(json => json.items)
}

function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item=> createHTMLString(item)).join('');
}

function createHTMLString(item){
    return `
    <li class="item">
        <img src="${item.image}" class="item__thumbnail" alt="${item.type}">
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if(key == null || value == null){
        return;
    }

    displayItems(items.filter(item => item[key] === value));    
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', ()=> displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

/* function setEventListeners(items) {
    // 버튼 가져온다.
    // 버튼을 클릭한다
    // 옷 모양 클릭하면 -> type 에 맞는 item 보여주기
    // 색상 버튼 클릭하면 -> color에 맞는 item 보여주기 
    let buttons = document.querySelectorAll('.btn');
    console.log(items);
    
    buttons.forEach(function(button, index){
        button.addEventListener('click', function(){
            let selectItems = [];
            if(button.classList.contains('colorBtn')){
                items.forEach(function(item){
                    if(item.color === button.innerText){
                        selectItems.push(item);
                    }
                })
            } else {
                items.forEach(function (item) {
                    if (item.type === button.querySelector('img').getAttribute('alt')) {
                        selectItems.push(item);
                    }
                })
            }
            displayItems(selectItems);            
        })
    })    
} */





