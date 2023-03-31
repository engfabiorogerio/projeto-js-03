var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup', function(){
    pegaPokemons(quantidade.value);
})

pegaPokemons(2);

function pegaPokemons(quantidade){


    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(allpokemon => {

        var pokemons = [];

    allpokemon.results.map((val)=> {
       

    fetch(val.url)
    .then(response => response.json())
    .then(pokemonSingle => {
        pokemons.push({nome:val.name,imagem:pokemonSingle.sprites.front_default});
       
        if(pokemons.length == quantidade){
            //console.log(pokemons);

            var pokemonBoxes = document.querySelector('.pokemon-boxes');
            pokemonBoxes.innerHTML = "";

            pokemons.map((val)=>{
            pokemonBoxes.innerHTML += `
            
                <div class="pokemon-box">
                <img src="`+val.imagem+`"/>
                <p>`+val.nome+`</p>
                </div><!-- pokemon-box -->     
                
            
            `;
                
                
            })
        }
    
    });
        
        
    })

    })

    pokemons.map((val)=> {
        console.log(val.nome);
    })
}




