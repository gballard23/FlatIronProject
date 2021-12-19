let container = document.querySelector('.movie');
let inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = document.querySelector('#search');

    console.log(input.value);

    const res = await fetch('http://localhost:3000/mcu')
    const data = await res.json()
    console.log(data);
    
    let movie = data.filter(function(item){
      return item['title'].toUpperCase() === input['value'].toUpperCase()
    })
    console.log(movie)
    for(let i = 0; i < movie.length; i++){
      let newElement = document.createElement('div');
      newElement.classList.add('posts');

      container.appendChild(newElement);

      let h2 = document.createElement('h2');
      h2.innerHTML = movie[i].title;
      newElement.appendChild(h2);

      let p = document.createElement('p');
      p.innerHTML = movie[i].director;
      newElement.appendChild(p);

      let p2 = document.createElement('p');
      p2.innerHTML = movie[i].producer;
      newElement.appendChild(p2);

      let p3 = document.createElement('p');
      p3.innerHTML = movie[i].starring;
      newElement.appendChild(p3);

      let p4 = document.createElement('p');
      p4.innerHTML = movie[i].released;
      newElement.appendChild(p4);

      newElement.style.backgroundImage = `url(${movie[i].image})`;

    }
  
  })
  

const form = document.querySelector('form');
form.addEventListener('submit', myPlay);

function myPlay(){
  let audio = new Audio('The-Avengers-Theme-Song.mp3');
  audio.play();
}