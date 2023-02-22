import { letters } from './helpers/letters';
import './App.css';
import { HangImage } from './components/Hanglmage';
import { useEffect, useState } from 'react';


function App() {
    const [word] = useState('COMPUTADORA')
    const [hiddenWord, setHiddenWord] = useState('_ '.repeat (word.length))
    const [ attemps, setAttemps ] = useState(0)
    const [lose, setLose ] = useState(false);

    useEffect( () => {
        if ( attemps >= 9 ){
            setLose(true);
        }
    }, [attemps]);


    useEffect( () => {
        console.log(hiddenWord)
      
    },[])

    const checkLetter = (letter : string) => {
        if  ( !word.includes(letter) ){
                setAttemps(Math.min (attemps + 1, 9) )
                return;
            } 
        
        const hiddenWordArray = hiddenWord.split(' ')
        
    
        for (let i = 0; i < word.length; i++){
            if ( word[i] === letter ) {
                hiddenWordArray[i] = letter;
                setHiddenWord(hiddenWordArray.join(' '));
            }
        } 
    }


    // const checkLetter = (letter : string) => {
    //   console.log(letter)
    //   setAttemps(Math.min (attemps + 1, 9 ) );
    // }


    return(
        <div className="App">
            {/* Imagenes del juego */}
            <HangImage imageNumber={attemps} />

            {/* Palabra oculta */}
            <h3>{ hiddenWord }</h3>

            {/* Contador de intentos */}
            <h3>Intentos:{attemps} </h3>
            
            {
                ( lose )
                ?<h2>Perdió, la palabra es: { word }</h2> 
                : ''
            }
            
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
