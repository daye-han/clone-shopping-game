// main
loadItems()
    .then(items => {
        displayItems(items); //items 보여주기
        // setEventListeners(items); //items 이벤트 걸기
    })
    // .catch(console.log('error'));


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





