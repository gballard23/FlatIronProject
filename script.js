const name = ["Captian America: The First Avenger", "Captian Marvel", "Iron Man", "Iron Man 2","Thor","Avengers","Thor: The Dark World","Iron Man 3","Captian America: The Winter Soldier","Guardians of the Galaxy","Guardians of the Galaxy vol.2","Avengers: Age of Ultron","Ant-Man","Captain America: Civil War","Black Panther","Black Widow","Doctor Strange","Thor Ragnarok","Ant-Man and the Wasp","Avengers: Infinity War","Avengers: Endgame","Spider-Man: Homecoming","Spider-Man: Far From Home","Loki","WandaVision","The Falcon and the Winter Soldier","Shang-chi and the Legend of the Ten Rings","Hawkey"]

const name2 = name.map(name =>name.toUpperCase());
function index(array){
  return name2.indexOf(array) +1;
}

let container = document.querySelector('.movie');

const init = async () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = document.querySelector('input#search');

    console.log(input.value);

    let id = index(input.value.toUpperCase());

    let url = `http://localhost:3000/mcu/${id}`;

   const res = await fetch(url);
   const data = await res.json(); 
    
      console.log(data);

     
      
      let temp = '';
    
      

        console.log(temp += `
          <div class="posts">
            <h2 id="title"><strong>${data.title}</strong></h2>
            <p id="date">Released:${data.released}</p>
            <p id='direct'>Director:${data.director}</p>
            <p id='producer'>Producer:${data.producer}</p>
            <p id='star'>Starring:${data.starring}</p>
          </div>
        `)
    

    container.innerHTML = temp;

    
  })
}

window.addEventListener('DOMContentLoaded', init);



