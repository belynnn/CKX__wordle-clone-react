// extension ES7+ React/Redux/React-Native snippets from dsznajder
import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyup } = useWordle(solution)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    return (
        <div>
            <div>Solution - {solution}</div>
            <div>Essai actuel - {currentGuess}</div>
        </div>
    )
}
