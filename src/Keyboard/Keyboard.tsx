type KeyboardProps = {
    values: [
        string[],
        (letter: string) => void,
        string[],
        boolean
    ];
};
const Keyboard = ({ values }: KeyboardProps) => {

    const [pressedKeys, handleClick, wordArr, isMatched] = values
    // console.log('correct', correctLetters);




    // Generate A–Z using ASCII codes
    const letters = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(97 + i)
    );

    

    return (
        <div className="flex flex-col items-center justify-center p-4">

            <div className="grid grid-cols-7 gap-2 mb-6">
                  {letters.map((letter) => {
          const isPressed = pressedKeys.includes(letter);
          const isCorrect = wordArr.includes(letter);


          let bgColor = '';
          if (isPressed && isCorrect) bgColor = 'bg-green-500';
          else if (isPressed && !isCorrect) bgColor = 'bg-red-500';

          return (
            <button
              key={letter}
              onClick={() => {
                handleClick(letter)}}
              disabled={(isPressed && !isCorrect) || isMatched===true}
              className={`border-2 border-black uppercase ${bgColor} hover:bg-amber-100/50 text-black font-semibold py-2 px-4 shadow flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {letter}
            </button>
          );
        })}
            </div>
        </div>
    );
};

export default Keyboard;
