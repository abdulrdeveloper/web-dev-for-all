const item = document.querySelector("#itemInput");
const btn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

btn.addEventListener('click', function () {

    const newItem = document.createElement('li');
    newItem.style.cursor = 'pointer';

    const text = document.createElement('span');
    text.textContent = item.value;

    const tick = document.createElement('i');
    tick.className = "fa-solid fa-check";

    if (!item.value) return;

    tick.addEventListener('click', function () {

        if (text.style.textDecoration === 'line-through') {
            text.style.textDecoration = '';
            newItem.style.backgroundColor = '';
        } else {
            text.style.textDecoration = 'line-through';
            text.style.color = '#928b8bb6';
            newItem.style.backgroundColor = '#0f0f0fe3';
            tick.remove();
        }
        
    })

    const cross = document.createElement('i');
    cross.className = "fa-solid fa-xmark";
    cross.addEventListener('click', function () {
        setTimeout(() => {
            newItem.remove();
        }, 100);
    })

    newItem.appendChild(text);
    newItem.appendChild(tick);
    newItem.appendChild(cross);

    list.appendChild(newItem);
    item.value = "";

});

item.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        btn.click();
    }
});
