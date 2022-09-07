
let url = "https://pokeapi.co/api/v2/pokemon"
let abilities;
let content;
let array;
let nextVar;
let previousVar;

(function generalFunction(){
  fetch(url)
.then(response => response.json())
.then(data => {
    content=""
    nextVar = validation(data.next);
    previousVar = validation(data.previous);
    array = data.results;
    for(let i = 0; i < array.length; i++){
        fetch(array[i].url)
        .then(response => response.json())
        .then(data => {
            let img = data.sprites.other['official-artwork'].front_default
            abilities = data.abilities
            content += `
            <div class="col-4">
            <div class="card" style="width: 24rem;">
                <img src="${img}" height="160" width="100%"> </img>
                <div class="card-body">
                  <h5 class="card-title">${array[i].name}</h5>
                  <h2 class="card-text">Habilidades</h2>
                  <ul>`;
                  for(let i = 0; i<abilities.length; i++){
                    content += `<li>${abilities[i].ability.name}</li>`;
                  }
                  content +=`
                      
                  </ul>
                  
                </div>
              </div>
        </div>
            `;
        document.getElementById("content").innerHTML = content;
        })
    }    
})
})();

function optional(urlOpt){
  
  fetch(urlOpt)
.then(response => response.json())
.then(data => {
  content=""
  nextVar = validation(data.next);
  previousVar = validation(data.previous);
  array = data.results;
  for(let i = 0; i < array.length; i++){
      fetch(array[i].url)
      .then(response => response.json())
      .then(data => {
          let img = data.sprites.other['official-artwork'].front_default
          abilities = data.abilities

          content += `
          <div class="col-4">
          <div class="card" style="width: 24rem;">
              <img src="${img}" height="140" width="100%"> </img>
              <div class="card-body">
                <h5 class="card-title">${array[i].name}</h5>
                <h2 class="card-text">Habilidades</h2>
                <ul>`;
                for(let i = 0; i<abilities.length; i++){
                  content += `<li>${abilities[i].ability.name}</li>`;
                }
                content +=`
                    
                </ul>
                
              </div>
            </div>
      </div>
          `;
      document.getElementById("content").innerHTML = content;
      })
  }    
})
}


function next(){
  if(nextVar && previousVar){
    alert("No hay nada más adelante")
  }else{
    
    url="https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
    optional(url);
  }
}

function previous(){
  if(!previousVar){
    alert("No hay nada más atras")
  }else{
    
    url="https://pokeapi.co/api/v2/pokemon"
    optional(url);
  }
}


function validation(dato){
  if(dato){
    return true  
  }else{
    false
  }
}
