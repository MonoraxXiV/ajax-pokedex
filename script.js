//https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/ resource to help find the API content
//https://pokeapi.co/docs/v2#pokemon


var searchButton= document.getElementById("run").addEventListener("click",function() {
    var input= document.getElementById("pokemonID").value;
    console.log(input); //already getting data based on number and ID, now to show the needed data.
    fetch('https://pokeapi.co/api/v2/pokemon/'+input)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // Work with JSON data here
            console.log(data)
        })
        .catch((err) => {
            console.error("Pokemon not found");
        })

})