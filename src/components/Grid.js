import React from 'react'
import Row from './Row'

export default function Grid({ currentGuess, guesses, turn }) { // erreur: j'avais oublié les { } pour englober currentGuess, guesses, turn
    return (
        <div>
            {guesses.map((g, i) => { // g = guesses, i = index
                return <Row key={i} guess={g} />
            })}
        </div>
    )
}