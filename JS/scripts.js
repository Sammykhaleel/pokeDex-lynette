let pokemonList = [
  { name: "Squirtle", height: 7, types: ["water", "slow"] },
  { name: "Butterfree", height: 10, types: ["bug", "flying"] },
  { name: "Vaporeon", height: 15, types: ["water", "fast"] },
  { name: "Evy", height: 11, types: ["speed", "electric"] },
  { name: "Charmander", height: 16, types: ["fire", "flying"] },
];

for (let i = 0; i < pokemonList.length; i++) {
  let size = "";
  if (pokemonList[i].height > 15) {
    size = "This Is A Tall Pokemon";
  } else if (pokemonList[i].height <= 10) {
    size = "This Is A Short Pokemon";
  } else {
    size = "This Is An Average Pokemon";
  }
  document.write(
    '<div class="box">' +
      pokemonList[i].name +
      " (height: " +
      pokemonList[i].height +
      ") " +
      size +
      "<br>" +
      pokemonList[i].types +
      "<br>" +
      "</div>"
  );
}