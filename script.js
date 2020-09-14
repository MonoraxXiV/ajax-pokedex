//https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/ resource to help find the API content
//https://pokeapi.co/docs/v2#pokemon


var searchButton= document.getElementById("run").addEventListener("click",function() {


    function fetchPokemon() {
        var input= document.getElementById("pokemonID").value;
        console.log(input); //already getting data based on number and ID, now to show the needed data.
        fetch('https://pokeapi.co/api/v2/pokemon/' + input)
            .then((response) => {
                return response.json()
            })
            .then(data=> displayPokemon(data))
            .catch((err) => {
                console.error("Pokemon not found");
            })
    }

    /*
    //basically we want to put the data in this template that we made
    function displayPokemon(pokemon) {
        //gets the data of the pokemon that was input
        pokemon.forEach(poke=> {
            fetchPokemon();
            let templateNode = document.getElementById('tpl-pokemon').content.cloneNode(true);
            templateNode.querySelector('.name').innerText =poke.name;
            templateNode.querySelector(".sprite").innerHTML=poke.sprites;
            //templateNode.querySelector('.moves').innerText=poke.moves;
            // I think moves won't work like this
            //templateNode.querySelector(".previousEvo")
            templateNode.querySelector(".Evolution").innerHTML=poke.evolves_to;

        })


    }
    */
     fetchPokemon()

})