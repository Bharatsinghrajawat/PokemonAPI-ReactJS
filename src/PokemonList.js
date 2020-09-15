import React from 'react'

export default function PokemonList({pokemon}) {
    return (
        <div>
            {pokemon.map(pokename => (<li key={pokename}>{pokename}</li>))}
        </div>
    )
}
