const name = ["Captian America: The First Avenger", "Captian Marvel", "Iron Man", "Iron Man 2","Thor","Avengers","Thor: The Dark World","Iron Man 3","Captian America: The Winter Soldier","Guardians of the Galaxy","Guardians of the Galaxy vol.2","Avengers: Age of Ultron","Ant-Man","Captain America: Civil War","Black Panther","Black Widow","Doctor Strange","Thor Ragnarok","Ant-Man and the Wasp","Avengers: Infinity War","Avengers: Endgame","Spider-Man: Homecoming","Spider-Man: Far From Home","Loki","WandaVision","The Falcon and the Winter Soldier","Shang-chi and the Legend of the Ten Rings","Hawkey"]

function index(array){
  return name.indexOf(array) +1;
}

let container = document.getElementsByClassName('.movie');

const init = async () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = document.querySelector('input#search');

    console.log(input.value);

    let id = index(input.value);

    let url = `http://localhost:3000/mcu/${id}`;

   const res = await fetch(url);
   const data = await res.json(); 
    
      console.log(data);
      let temp = '';
   
      data.forEach(match => {
        temp += `
          <div class="posts">
            <h2><strong>${match.title}</strong></h2>
            <p>Released:${match.released}</p>
            <p>Director:${match.director}</p>
            <p>Producer:${match.producer}</p>
            <p>Starring:${match.starring}</p>
          </div>
        `
    
    })

    container.innerHTML = temp;

    
  })
}

window.addEventListener('DOMContentLoaded', init);

   /*let temp = '';
    posts.forEach(post => {
        temp += `
          <div class="posts">
            <h2><strong>${post.title}</strong></h2>
            <p>Released:${post.released}</p>
            <p>Director:${post.director}</p>
            <p>Producer:${post.producer}</p>
            <p>Starring:${post.starring}</p>
          </div>
        `
    
    })

container.innerHTML = temp;

}


window.addEventListener('DOMContentLoaded', () => renderData());*/

