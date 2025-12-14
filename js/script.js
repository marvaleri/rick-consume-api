const container = document.getElementById("cards-container");

fetch("https://rickandmortyapi.com/api/character?page=10")
    .then(response => response.json())
    .then(data => {
        data.results.forEach(character => {

            const card = document.createElement("div");
            card.classList.add("card");

            const favorite = document.createElement("div");
            favorite.classList.add("favorites");
            favorite.innerHTML = "♡";

            favorite.addEventListener("click", () => {
                favorite.classList.toggle("Active");
                favorite.innerHTML = favorite.classList.contains("Active") ? "♥" : "♡";
            });

            const img = document.createElement("img");
            img.src = character.image;

            const name = document.createElement("h3");
            name.innerText = character.name;

            const species = document.createElement("p");
            species.innerText = `Espécie: ${character.species}`;

            const status = document.createElement("p");
            status.innerText = `Status: ${character.status}`;

            const gender = document.createElement("p");
            gender.innerText = `Gênero: ${character.gender}`;

            const origin = document.createElement("p");
            location.innerText = `Origem: ${character.origin.name}`;

            card.appendChild(favorite);
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(species);
            card.appendChild(status);
            card.appendChild(gender);
            card.appendChild(origin);

            container.appendChild(card);
        });
    });
