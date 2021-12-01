const mockurl = 'http://localhost:3000/MCU/1';


async function getMockUrl(url){

    const response = await fetch(url);

    let data = await response.json();
        console.log(data);
    
    show(data);

}

getMockUrl(mockurl);


function show(data) {
    let tab = 
        `<tr>
          <th>Title</th>
          <th>Released</th>
          <th>Director</th>
          <th>Producer</th>
          <th>Image</th>
         </tr>`;
    
    
    for (let r in data) {
        tab += `<tr> 
    <td>${r.title} </td>
    <td>${r.released}</td>
    <td>${r.director}</td> 
    <td>${r.producer}</td>
    <td>${r.image-url}</td>          
    </tr>`;
    }
    
    document.getElementById("movielist").innerHTML = tab;
}

