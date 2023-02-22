let words:string [] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'ANIMAL',
    'VETERIANRIO',
    'AHORCADO',
    'JUEGO',
    'INFORMATICA',
    'HORACIO',
    'PALABRAS',
    'TELEFONO',
    'TÉCNICA',
    'LOGRADO',
    

];

export function getRandomWord(){

    const randomIndex = ( Math.floor(Math.random() * words.length ) );




 return words[randomIndex];
   
}