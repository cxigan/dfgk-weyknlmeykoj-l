let addBtn = document.querySelector('#addBtn');
let input = document.querySelector('input');
let list = document.querySelector('#list');

addBtn.addEventListener('click', function () {
    let li = document.createElement("li");
    li.textContent = input.value;
    list.append(li);
    li.classList.add('item');

    let item = document.createElement('item');

    let div = document.createElement('div');
    item.append(div);

    let i = document.createElement('i');
    i.className = "fa-regular fa-square-plus";
    i.append(div);




})