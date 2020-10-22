let pokemonRepository = (function () {

    let pokemonList = [
        { name: "Squirtle", height: 7, types: ["grass", "slow"] },
        { name: "Butterfree", height: 10, types: ["bug", "flying"] },
        { name: "Vaporeon", height: 15, types: ["water", "fast"] },
        { name: "Evy", height: 11, types: ["speed", "electric"] },
        { name: "Charmander", height: 16, types: ["fire", "flying"] },
      ];

      function add(pokemon) {
        if (
          typeof pokemon === "object" &&
          "name" in pokemon &&
          "height" in pokemon &&
          "types" in pokemon
        ) {
          pokemonList.push(pokemon);
        }
      }
  
    function getAll() {
      return pokemonList;
    }
  
    return {
      add: add,
      getAll: getAll
    };
  })();

  console.log(pokemonRepository.getAll())
pokemonRepository.add({ name: "Charizd", height: 15, types: ["flying", "fire"] })
console.log(pokemonRepository.getAll())

pokemonRepository.getAll().forEach(function(pokemon){
    let color;
    if(pokemon.types.includes("fire")){
        color='<span style="color: red;"> '
    } else if(pokemon.types.includes("water")){
        color='<span style="color: blue;"> ' 
    } else if(pokemon.types.includes("speed")){
        color='<span style="color: orange;"> ' 
    } else if(pokemon.types.includes("flying")){
        color='<span style="color: lightblue;"> '
    } else if(pokemon.types.includes("grass")){
        color='<span style="color: green;"> '
    }

    let size = "";
    if (pokemon.height > 15) {
      size = "This Is A Tall Pokemon";
    } else if (pokemon.height <= 10) {
      size = "This Is A Short Pokemon";
    } else {
      size = "This Is An Average Pokemon";
    }

    document.write(
      '<div class="box">' +
        pokemon.name +
        " (height: " +
        pokemon.height +
        ") " +
        size +
        color +
        "<br>" +
        pokemon.types +
        "<br>" +
        "</div>"
    );
})
  
