import { useEffect, useState } from "react";
import words from './data/data.json'
import HangmanDrawing from "./HangmanDrawing/HangmanDrawing";
import Keyboard from "./Keyboard/Keyboard";
const App = () => {
  const [word, setWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [wrongGuesses, setWrongGuesses] = useState(1);
  const [matchedLetters, setMatchedLetters] = useState<string[]>([])
  const [isMatched, setIsMatched] = useState(false)
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [result, setResult] = useState('')
  console.log('coorect', matchedLetters);

  let wordArr: string[] = word.split('');
  console.log(word);

  useEffect(() => {

    if (matchedLetters.length === wordArr.length) {
      setIsMatched(true)
      setResult('You Won')
    }
    else if (wrongGuesses > 9) {
      setIsMatched(true)
      setResult('You Lose')
    }
    else {
      setIsMatched(false)
    }
  }, [matchedLetters, wordArr, wrongGuesses])

  const handleClick = (letter: string) => {
    console.log("pressed", letter);

    setPressedKeys((prev) => [...prev, letter]);

    setMatchedLetters((): string[] => {
      const countInWord = wordArr.filter((l) => l === letter).length;
      const newMatches = Array(countInWord).fill(letter);
      return [...matchedLetters, ...newMatches];
    });

    if (wordArr.includes(letter)) {
      setWrongGuesses(prev => prev)

    } else {
      setWrongGuesses(prev => prev + 1)

    }
  };

const handlePressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
  console.log('Pressed key:', event.key);
  const letter = event.key.toLowerCase()

  if(!pressedKeys.includes(letter))  handleClick(letter)

};

  console.log(wrongGuesses);
  return (
    <label htmlFor="guessWord">

    <div className='bg-slate-400 min-h-screen w-full md:w-1/2 mx-auto flex flex-col justify-center items-center gap-4 relative'>
      <HangmanDrawing wrongGuesses={wrongGuesses} />
      <h2 className="text-2xl tracking-widest uppercase flex justify-center items-center gap-2 text-center transition-all">{wordArr.map((letter, i) => <span className={'border-b-2 min-h-[35px] min-w-[25px]'} key={i}>{matchedLetters.includes(letter) && wrongGuesses < 11 ? letter : wrongGuesses > 9 ? letter : ''}</span>)}</h2>


      <input onKeyDown={handlePressed} type="text" className=" text-transparent outline-none absolute -top-20" id="guessWord" name="guessWord"/>



      {

         result && <div className="flex flex-col items-center justify-center p-6 bg-gray-300 rounded-2xl shadow-lg border max-w-sm mx-auto">
      <h2 className={`text-3xl font-bold mb-4 ${result === 'You Won' ? 'text-green-600' : 'text-red-600'}`}>
        {result === 'You Won' ? '🎉 You Won!' : '💀 You Lost!'}
      </h2>
      <p className="text-gray-700 mb-6 text-center">
        {result === 'You Won'
          ? 'Great job! You guessed the word correctly.'
          : 'Oops! You ran out of guesses.'}
      </p>
      <button
       onClick={() => {
            wordArr = []
            setWrongGuesses(1)
            setWord((() => {
              return words[Math.floor(Math.random() * words.length)]
            }))
            setIsMatched(false)
            setMatchedLetters([])
            setPressedKeys([])
            setResult('')
          }}
      className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition cursor-pointer">
        🔁 Restart Game
      </button>
    </div>
      }
      <Keyboard values={[pressedKeys, handleClick, wordArr, isMatched]} />
    </div>
    </label>
  );
};

export default App;