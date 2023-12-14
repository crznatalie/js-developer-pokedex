function showPokemonDetails(pokemon) {
  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = convertPokemonToModal(pokemon);

  const modal = document.getElementById("pokemonModal");
  modal.className = `modal ${pokemon.type.toLowerCase()}`;

  openModal();
}

function convertPokemonToModal(pokemon) {
  return `
        <div class="modal-pokemon">
            <div class="modal-details">
                <div class="modal-details-left">
                    <h2>${pokemon.name}</h2>
                    <ol class="types">
                        ${pokemon.types
                          .map(
                            (type) => `<li class="type ${type}">${type}</li>`
                          )
                          .join("")}
                    </ol>
                </div>
        
                <div class="modal-details-right">
                    <p class="number">#${pokemon.number}</p>
                </div>
            </div>

            <div class="modal-pic">
            <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        
            <div class="modal-info">
                <div class="left-info">
                <p>Species</p>
                <p>Height</p>
                <p>Weight</p>
                <p>Abilities</p>
                </div>

                <div class="right-info">
                <p>${pokemon.species}</p>
                <p>${pokemon.height}</p>
                <p>${pokemon.weight}</p>
                <ol class="abilities">
                    ${pokemon.abilities
                      .map(
                        (ability) =>
                          `<li class="ability">${ability}</li>`
                      )
                      .join("|")}
                </ol>
                </div>


            </div>
        </div>
    `;
}

function openModal() {
  const modal = document.getElementById("pokemonModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("pokemonModal");
  modal.style.display = "none";
}
