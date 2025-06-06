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

      <div data-testid="keyboard" className="grid grid-cols-5 md:grid-cols-7 gap-2 mb-6 justify-center grid-auto-flow: row">
        {letters.map((letter, i) => {
          const isPressed = pressedKeys.includes(letter);
          const isCorrect = wordArr.includes(letter);

          let bgColor = '';
          if (isPressed && isCorrect) bgColor = 'bg-green-500';
          else if (isPressed && !isCorrect) bgColor = 'bg-red-500';

          return (
            <button
              key={i}
              onClick={() => {
                handleClick(letter)
              }}
              disabled={(isPressed) || isMatched === true}
              className={`border-2 font-mono border-black uppercase ${bgColor} active:${bgColor} hover: text-black font-semibold py-2 px-5 shadow flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
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
