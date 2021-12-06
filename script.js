const myURL = `http://localhost:3000/mcu`
const input = document.getElementById('input#search');
const searchForm = document.getElementById('form');

document.addEventListener('submit', handleSubmit);
function handleSubmit(event){
    event.preventDefault()
    console.log('submit handled');
    fetch(myURL)
        .then(res => res.json())
        .then(drinks);
}

const drinks = function(data){
    console.log(data);
    
} 

