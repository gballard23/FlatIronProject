const name = ["Captain America: The First Avenger", "Captain Marvel", "Iron Man", "Iron Man 2","Thor","Avengers","Thor: The Dark World","Iron Man 3","Captain America: The Winter Soldier","Guardians of the Galaxy","Guardians of the Galaxy vol.2","Avengers: Age of Ultron","Ant-Man","Captain America: Civil War","Black Panther","Black Widow","Doctor Strange","Thor Ragnarok","Ant-Man and the Wasp","Avengers: Infinity War","Avengers: Endgame","Spider-Man: Homecoming","Spider-Man: Far From Home","Loki","WandaVision","The Falcon and the Winter Soldier","Shang-chi and the Legend of the Ten Rings","Hawkeye"]
//The above array is made for the function below to return the index number plus one that also matches the ID of the resources in the json server
const name2 = name.map(name =>name.toUpperCase());
function index(array){
  return name2.indexOf(array) +1;
}
//Name2 captalizes the name variable before it is used in the index function
let container = document.querySelector('.movie');
//The container variable is created to hold the div in which we inject the fetch data from json
const init = async () => {
  const inputForm = document.querySelector('form');
//This function and input watch the html form for user submit      
  inputForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = document.querySelector('input#search');
//The submit reads the users input from input form in the html 
    console.log(input.value);

    let id = index(input.value.toUpperCase());
//The ID variable is set to equal the users input and in all caps using the index function to match it with the array index which number also matches the ID of resources in th server 
    let url = `http://localhost:3000/mcu/${id}`;
//The url varible contains the path and the id is decided by the users input that is sent through the index variable. 
   const res = await fetch(url);
   const data = await res.json(); 
//The res in the fetch that grabs the data that the url data holds then passes that data to the data variable
//The data variable then holds that resulting data in a javascript object format
      console.log(data);

    let newElement = document.createElement('div');
    newElement.classList.add('dig');

    container.appendChild(newElement);

    let newContainer= document.querySelector('.dig');



    
      
      let temp = '';
    //The temp varible is set to an empty string to hold all the values collected from the json server
      

        temp = `
          <div class="posts">
            <h2 id="title"><strong>${data.title}</strong></h2>
            <p id="date">Released:${data.released}</p>
            <p id='direct'>Director:${data.director}</p>
            <p id='producer'>Producer:${data.producer}</p>
            <p id='star'>Starring:${data.starring}</p>
          </div>
        `
  
      newContainer.innerHTML = temp;


   
//The container takes the temp varible data to be displayed in the html file
    
  })
}

window.addEventListener('DOMContentLoaded', init);
//This event listener listens for the DOM and the init function that contains all of the functionality

const form = document.querySelector('form');
form.addEventListener('submit', myPlay);

function myPlay(){
  let audio = new Audio('The-Avengers-Theme-Song.mp3');
  audio.play();
}