import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0) // si l'utilisateur arrive à 6 essai, game over
    const [currentGuess, setCurrentGuess] = useState('') // traque ce que l'utilisateur est en train de taper, à chaque nouvelle touche
    const [guesses, setGuesses] = useState([]) // chaque essai est un array
    const [history, setHistory] = useState([]) // chaque essai est un string, sert à gérer les doublons (si l'utilisateur entre un mot déjà entré)
    const [isCorrect, setIsCorrect] = useState(false) // true quand l'utilisateur gagne

    // formatte l'essai entré en array, où chaque lettre sera un objet
    // [{key: 'drain', color: 'green'}]
    const formatGuess = () => {

    }

    // ajoute un nouvel essai à guesses et history
    // met à jour l'isCorrect si l'essai est corrent
    // ajoute 1 au state de turn
    const addNewGuess = () => {

    }

    // gère les touches enfoncées par l'utilisasteur et traque l'essaie entré actuel
    // si l'utilisateur appuie sur Enter, ajoute le nouvel essai (addNewGuess)
    const handleKeyUp = () => {

    }

    return {turn, currentGuess, guesses, isCorrectState, handleKeyUp}

}

export default useWordle