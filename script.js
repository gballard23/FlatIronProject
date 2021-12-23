const container = document.querySelector('.movie');
const inputForm = document.querySelector('form');

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
      const newElement = document.createElement('div');
      newElement.classList.add('posts');

      container.appendChild(newElement);

      const h2 = document.createElement('h2');
      h2.innerHTML = movie[i].title;
      newElement.appendChild(h2);

      const p = document.createElement('p');
      p.innerHTML = `Director: ${movie[i].director}`;
      newElement.appendChild(p);

      const p2 = document.createElement('p');
      p2.innerHTML = `Producer: ${movie[i].producer}`;
      newElement.appendChild(p2);

      const p3 = document.createElement('p');
      p3.innerHTML = `Starring: ${movie[i].starring}`;
      newElement.appendChild(p3);

      const p4 = document.createElement('p');
      p4.innerHTML = `Released: ${movie[i].released}`;
      newElement.appendChild(p4);
      
      play();
      newElement.style.backgroundImage = `url(${movie[i].image})`;
    }
    
  
  })
  


function play() {
  const audio = new Audio('avengers-assemble.mp3');
      audio.play();
   
}


const btn = document.querySelector('#btn');

btn.addEventListener('click', event => {
  event.preventDefault();
  const gif = document.createElement('div');
  gif.classList.add('gif')
  container.appendChild(gif);
  gif.style.backgroundImage= "url('deadpool.gif')";
     
  play2();
  
})

function play2() {
  let audio = new Audio('deadpool2.mp3')
  audio.play();
   
}


const marvel = document.querySelector('#marvel');
const image = document.querySelector('.image1');
const bckChange = ['image1','image2','image3','image4','image5','image6','image7','image8','image9','image10']
let item = bckChange[Math.floor(Math.random()*bckChange.length)]

marvel.addEventListener('click', event =>{
  event.preventDefault()
  image.classList.add(`${bckChange[Math.floor(Math.random()*bckChange.length)]}`);
})
