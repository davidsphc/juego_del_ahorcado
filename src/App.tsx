import { letters } from './helpers/letters';
import './App.css';
import { HangImage } from './components/Hanglmage';
import { useState } from 'react';

function App() {

 const [ attemps, setAttemps ] = useState(0)

const checkLetter = (letter : string) => {
  console.log(letter)
  setAttemps(Math.min (attemps + 1, 9 ) );
}


    return(
      <div className="App">
          {/* Imagenes del juego */}
          <HangImage imageNumber={attemps} />

          {/* Palabra oculta */}
          <h3>_ _ _ _ _ _ _ _ _ _ _ _</h3>

          {/* Contador de intentos */}
          <h3>Intentos:{attemps} </h3>
          {
            letters.map((letter)=>(
              <button 
                onClick={ () => checkLetter(letter)}
                key ={ letter} > 
                { letter }
              </button>
            ))                                    
          }         
  </div>
  );

};

export default App;
