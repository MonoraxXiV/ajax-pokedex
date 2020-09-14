//https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/ resource to help find the API content
//https://pokeapi.co/docs/v2#pokemon

let pokemon = [];
var searchButton = document.getElementById("run").addEventListener("click", function () {


    function fetchPokemon() {
        var input = document.getElementById("pokemonID").value;
        console.log(input); //already getting data based on number and ID, now to show the needed data.
        fetch('https://pokeapi.co/api/v2/pokemon/' + input)
            .then((response) => {
                return response.json()
            })
            .then(data=> displayPokemon(data))
            .catch((err) => {
                console.error("unable to fetch");
            })
    }
    fetchPokemon()
    function displayPokemon(data) {

        let templateNode = document.getElementById('tpl-pokemon').content.cloneNode(true);
        templateNode.querySelector(".name").innerHTML = data.name;
        console.log(data.name);
        templateNode.querySelector(".id").innerHTML = data.id;
        templateNode.querySelector(".evolution").innerHTML = "evolves to: ";
        //still need to limit moves to 4 random ones.
        //separate API call for evolutions.
        document.getElementById("target").appendChild(templateNode);
    }
displayPokemon()
})