//https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/ resource to help find the API content
//https://pokeapi.co/docs/v2#pokemon

let pokemon = [];
document.getElementById("run").addEventListener("click", function () {


    async function fetchPokemon() {

        var input = document.getElementById("pokemonID").value;
        console.log(input); //already getting data based on number and ID, now to show the needed data.
        fetch('https://pokeapi.co/api/v2/pokemon/' + input)
            .then((response) => {
                return response.json()
            })
            .then(data => displayPokemon(data))


    }

    fetchPokemon()

    function displayPokemon(data) {

        let templateNode = document.getElementById('tpl-pokemon').content.cloneNode(true);
        //loop over template node and empty innerhtml
        // for every child in template node ="";

        templateNode.querySelector(".name").innerHTML = data.name;
        console.log(data);
        templateNode.querySelector(".id").innerHTML = data.id;
        templateNode.querySelector(".evolution").innerHTML = "evolves to: ";
        //save as an array. display four elements(move.name)!!watch out for ditto and smeargle.
        var i = 0;
        if (data.moves.length === 1) {

            templateNode.querySelector(".moves").innerHTML = " " + data.moves[0].move.name;
        } else {
            for (i; i < 4; i++) {

                let movePokemon = data.moves[i];
                templateNode.querySelector(".moves").innerHTML +=" "+movePokemon.move.name+",";
            }
        }
        let sprites = data.sprites.front_default;
        document.getElementById("placeholder").src = sprites;
        //still need to limit moves to 4 random ones.
        //separate API call for evolutions.

        document.getElementById("target").appendChild(templateNode);
        for (i; i< templateNode.childNodes.length; i++){

            templateNode.innerHTML = '';
        }



    }


        fetch('https://pokeapi.co/api/v2/pokemon-species/' + input)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                return fetch(data.evolution_chain)
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data.evolution);
            })
            .catch(function (error) {
                console.log('Requestfailed', error)
            });




    displayPokemon()

})