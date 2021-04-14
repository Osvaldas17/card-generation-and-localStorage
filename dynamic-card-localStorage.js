
const createBtn = document.querySelector('#create-card');
const receivedData = JSON.parse(localStorage.getItem('test'))

window.addEventListener('DOMContentLoaded', () => {
    if (receivedData)
    create(receivedData)
});

function getInputValue(selector) {
    const input = document.querySelector(selector);
    return input ? input.value : null;
}

let arrObj = {}
createBtn.addEventListener('submit',(event) => {
    event.preventDefault()
    arrObj.name = getInputValue('#full-name')
    arrObj.email = getInputValue('#email')
    arrObj.phone = getInputValue('#phone')
    arrObj.address = getInputValue('#address')
    arrObj.jobServices = getInputValue('#job')
    const savedData = JSON.stringify(arrObj)
    create(arrObj)
    remove()
    localStorage.setItem('test',savedData)
});

const remove = () => {
    const card = document.querySelectorAll('#app div')
    if (card.length > 1) {
        document.querySelector('.card').remove()
    }
}

const createEl = (tag, content, parentToAppend, string) => {
    const element = document.createElement(tag);
    element.textContent = string + content;
    element.classList.add('p-el')
    parentToAppend.appendChild(element)
}

function create(val) {
    const { name, email, phone, address, jobServices } = val
    const card = document.createElement('div');
    card.classList.add('card');
    const app = document.querySelector('#app')
    app.appendChild(card);
    const img = document.createElement('img');
    img.classList.add('profile-img');
    img.src = 'https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898-450x450.png';
    card.appendChild(img)
    createEl('p', name, card, 'Name: ');
    createEl('p', email, card, 'Email: ');
    createEl('p', phone, card, 'Phone: ');
    createEl('p', address, card, 'Address: ');
    createEl('p', jobServices, card, 'Job/Services: ');
}

document.querySelector('.delBtn').addEventListener('click',() => {
    document.querySelector('.card').remove()
    localStorage.clear()
})





