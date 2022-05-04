import React from 'react'

export default function Row({ guess }) {

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