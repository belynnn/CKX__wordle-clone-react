import { useEffect, useState } from 'react';
import Wordle from './components/Wordle'

function App() {
  const [solution, setSolution] = useState(null)
  
  useEffect(() => {
    fetch('http://localhost:3001/solutions') // erreur: oui... un url sans '://'.... tout va bien... :o)
      .then(res => res.json())
      .then(json => {
        // random int entre 0 & 14
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.word) // erreur: important de mettre .word car la solution est un objet. Ce qui nous intéresse est le mot de cet objet, non pas l'objet lui-même.
      })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle (Lingo)</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App

// erreur principale: il est important de laisser le terminal ouvert pour le json-server...... :o)