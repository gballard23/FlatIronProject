fetch('http://localhost:3000/MCU')
    .then(res => res.json())
    .then((json) => console.log(json));
    
const divTable = document.createElement('div');

document.body.append(divTable);

const table = document.createElement('table');

for(let i = 0; i < 7; i++) {
    const td = document.createElement('td');
    const tr = document.createElement('tr');
}




