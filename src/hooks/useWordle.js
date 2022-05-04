import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0) // si l'utilisateur arrive à 6 essais, game over
    const [currentGuess, setCurrentGuess] = useState('') // traque ce que l'utilisateur est en train de taper, à chaque nouvelle touche
    const [guesses, setGuesses] = useState([...Array(6)]) // chaque essai est un array d'objets
    const [history, setHistory] = useState([]) // chaque essai est un string, sert à gérer les doublons (si l'utilisateur entre un mot déjà entré)
    const [isCorrect, setIsCorrect] = useState(false) // true quand l'utilisateur gagne

    // formatte l'essai entré en array, où chaque lettre sera un objet
    // [{key: 'drain', color: 'green'}]
    const formatGuess = () => {
        // console.log("Mise en forme de l'essaie - ", currentGuess) // leçon 5
        let solutionArray = [...solution] // spread syntax ? Syntaxe de décomposition https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        let formattedGuess = [...currentGuess].map((l) => { // l = letters

            return {key: l, color: 'grey'} // chaque lettres a maintenant 2 propriétés, la touche et sa couleur. Gris par défaut, on mettra jaune et vert par après
        })

        // Trouvé s'il y a des lettres vertes
        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        // Trouvé s'il y a des lettres jaunes
        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess
    }

    // ajoute un nouvel essai à guesses et history
    // met à jour l'isCorrect si l'essai est correct
    // ajoute 1 au state de turn
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setCurrentGuess('')
    }

    // gère les touches enfoncées par l'utilisasteur et traque l'essaie entré actuel
    // si l'utilisateur appuie sur Enter, ajoute le nouvel essai (addNewGuess)
    const handleKeyup = ({ key }) => {
        if (key === 'Enter') {
            // uniquement ajouté l'essai si 'turn' est plus petit que 5
            if (turn > 5) {
                console.log('Vous avez utilisé tout vos essais')

                return
            }
            // ne pas autorisé les doublons
            if (history.includes(currentGuess)) {
                console.log('Vous avez déjà essayé ce mot')

                return
            }
            // vérifié si le mot a bien 5 lettres de long
            if (currentGuess.length !== 5) {
                console.log('Vous devez entrer un mot de 5 lettres')
                return
            }

            // formatGuess(currentGuess) // leçon 5
            const formatted = formatGuess()
            // console.log(formatted)  // leçon 6
            addNewGuess(formatted)

        }
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