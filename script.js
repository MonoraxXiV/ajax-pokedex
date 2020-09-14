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
                alert("unable to fetch, please use a name or id");
            })
    }
    fetchPokemon()



   function displayPokemon(data) {

        let templateNode = document.getElementById('tpl-pokemon').content.cloneNode(true);
        templateNode.querySelector(".name").innerHTML = data.name;
        console.log(data);
        templateNode.querySelector(".id").innerHTML = data.id;
        templateNode.querySelector(".evolution").innerHTML = "evolves to: ";
        //save as an array. display four elements(move.name)!!watch out for ditto and smeargle.
            var i=0;
            moves = data.moves[0].move.name;
            for (i; i<moves.length; i++) {
                templateNode.querySelector(".moves").innerHTML = "" + moves;
            }
           let sprites= data.sprites.front_default;
       document.getElementById("placeholder").src=sprites;
        //still need to limit moves to 4 random ones.
        //separate API call for evolutions.
        document.getElementById("target").appendChild(templateNode);
    }

displayPokemon()
})