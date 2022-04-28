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
    const handleKeyup = ({ key }) => {

        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1) // supprime la dernière lettre
            })
            return
        }
        // regex - être sûr que l'utilisateur n'envoi que des lettres et non pas les touches "shift", "delete", etc
        if (/^[A-Za-z]$/.test(key)) {
            // gestion de la longueur des mots
            if (currentGuess.length < 5) { // erreur: j'avais écris "lenght"... corrigé et fonctionnel !
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup} // erreur: j'avais écris "isCorrectState", corrigé

}

export default useWordle