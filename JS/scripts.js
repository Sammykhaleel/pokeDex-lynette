let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  function add(pokemon) {
    if (typeof pokemon === "object") {
      pokemonList.push(pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addlistitem(pokemon) {
    let ul = document.querySelector(".pokemon-list");
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button");
    li.appendChild(button);
    ul.appendChild(li);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function(){
      console.log(pokemon);
    })
    
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = [];
      details.types.forEach(function(typeItem){
        item.types.push(typeItem.type.name)
      })
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addlistitem: addlistitem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    // let color;
    // if (pokemon.types.includes("fire")) {
    //   color = '<span style="color: red;"> ';
    // } else if (pokemon.types.includes("water")) {
    //   color = '<span style="color: blue;"> ';
    // } else if (pokemon.types.includes("speed")) {
    //   color = '<span style="color: orange;"> ';
    // } else if (pokemon.types.includes("flying")) {
    //   color = '<span style="color: lightblue;"> ';
    // } else if (pokemon.types.includes("grass")) {
    //   color = '<span style="color: green;"> ';
    // }

    // let size = "";
    // if (pokemon.height > 15) {
    //   size = "This Is A Tall Pokemon";
    // } else if (pokemon.height <= 10) {
    //   size = "This Is A Short Pokemon";
    // } else {
    //   size = "This Is An Average Pokemon";
    // }
    pokemonRepository.addlistitem(pokemon);
  });
});
