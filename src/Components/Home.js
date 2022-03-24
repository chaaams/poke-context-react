import React, { useEffect, useState } from "react";
import axios from 'axios';

function Home(){
    const [pokemon, setPokemon] = useState(null);

    function data (){
        function randomNumber() {
          return Math.floor(Math.random() * 100) + 1
        }
        const URL = `https://pokeapi.co/api/v2/pokemon/${randomNumber()}`;
        axios(URL).then(pokemon =>{
            const data = pokemon.data;
            setPokemon(data)
        })
    }

 
    

    useEffect(()=>{
        data()
    },[])
    

    return(
        <div>
            <h1 className="text-center">Home</h1>
            {pokemon?
                <div className="text-center">
                    <h3>{'Name: '+pokemon.name}</h3>
                    <h3>{'Height: '+pokemon.height}</h3>
                    <h3>{'Weight: '+pokemon.weight}</h3>
                    <h3>{'Type: '+pokemon.types[0].type.name}</h3>
                    <button onClick={data}>Random Pokemon</button>
                </div>            
            :null}
                
                      
        </div>
    )
}

export default Home