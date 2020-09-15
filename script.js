//https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/ resource to help find the API content
//https://pokeapi.co/docs/v2#pokemon



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


        //loop over template node and empty innerhtml
        // for every child in template node ="";

        document.getElementById("name").innerHTML = data.name;
        console.log(data);
        document.getElementById("id").innerHTML = data.id;
        document.getElementById("evolution").innerHTML = "";
        //save as an array. display four elements(move.name)!!watch out for ditto and smeargle.
        var i = 0;
        document.getElementById("moves").innerHTML ="";
        if (data.moves.length === 1) {

            document.getElementById("moves").innerHTML = " " + data.moves[0].move.name;
        } else {
            for (i; i < 4; i++) {

                let movePokemon = data.moves[i];
                document.getElementById("moves").innerHTML +=" "+movePokemon.move.name+",";
            }
        }
        let sprites = data.sprites.front_default;
        document.getElementById("placeholder").src = sprites;
        //still need to limit moves to 4 random ones.
        //separate API call for evolutions.
        //find a way to fetch the species
        var speciesUrl=data.species.url;
        console.log(speciesUrl)
        fetch (speciesUrl)
            .then(response=>  response.json())
            .then(data => {
            var babyCheck =data.is_baby;
            console.log(babyCheck); //returned true for magby
            var previousForm= data.evolves_from_species;
            console.log(previousForm.name) //shows bulbasaur for ivysaur.


            if (previousForm===null){
                document.getElementById("here").innerHTML = "";
            }else{
                document.getElementById("here").innerHTML = "Previous evolution: "+previousForm.name;

            }

            })






    }



})