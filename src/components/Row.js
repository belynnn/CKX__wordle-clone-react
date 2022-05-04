import React from 'react'

export default function Row({ guess, currentGuess }) {

    // check value guess
    if (guess) {
        return (
            // erreur: j'avais écris class="" au lieu de className=""
            <div className="row past">
                {guess.map((l, i) => ( // l = letters, i = index
                    <div key={i} className={l.color}>{l.key}</div>
                ))}
            </div>
        )
    }

    if (currentGuess) {
        let letters = currentGuess.split('')

        return (
            <div className='row current'>
                {letters.map((letter, i) => (
                    <div key={i} className="filled">{letter}</div>
                ))}
                {/*  vvv  comptabilise le nombre de lettres déjà entrées pour continuellement afficher 5, ou 4, ou 3,... carré  vvv  */}
                {[...Array(5 - letters.length)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        )
    }

    return (
        <div className='row'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}