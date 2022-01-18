const btn = document.querySelector("#share-icon");
const btn2 = document.querySelector("#share-icon-mobile");



function displayDiv() {
    const divA = document.querySelector("#display");
    divA.classList.toggle("display");


}

btn.addEventListener('click', displayDiv);
btn2.addEventListener('click', displayDiv);