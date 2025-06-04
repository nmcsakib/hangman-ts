import React, { useEffect, useState } from "react";
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

  const wordArr = word.split('');
  console.log(word);

  useEffect(() => {

    if(matchedLetters.length === wordArr.length){
      setIsMatched(true)
      setResult('You Won')
    }
    else if(wrongGuesses > 9){
      setIsMatched(true)
      setResult('You Lose')
    }
    else{
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
  return (
    <div className='bg-slate-400 min-h-[90vh] w-full md:w-1/2 mx-auto flex flex-col justify-center items-center gap-4'>
      {/* <h2 className="text-2xl tracking-widest uppercase"> {((matchedLetters.length > 0 || matchedLetters.length < 5) && wrongGuesses < 10) ? matchedLetters.join(' ') : word }</h2> */}

      <h2 className="text-2xl tracking-widest uppercase flex justify-center items-center gap-2 pt-5 text-center">{wordArr.map(letter => <span className={'border-2 min-h-[35px] min-w-[25px]'} key={letter}>{matchedLetters.includes(letter)? letter : ''}</span>)}</h2>
      <HangmanDrawing wrongGuesses={wrongGuesses} />
     {
      result &&  <div className={`text-2xl font-bold ${result === 'You Won' ? 'text-green-300' : 'text-red-500'} flex justify-center items-center gap-4`}><p>{result}</p> <br /> <button
      onClick={() => {
        setWrongGuesses(1)
        setWord((() => {
    return words[Math.floor(Math.random() * words.length)]
  }))
        setIsMatched(false)
        setMatchedLetters([])
        setPressedKeys([])
        setResult('')
      }}
      className="text-sm border p-3 rounded-lg hover:bg-green-600 cursor-pointer text-center">Restart</button></div>
     }

      {/* <button className="bg-amber-800 rounded-md p-2" onClick={() => setWrongGuesses(1)}>click</button> */}
      <Keyboard values={[pressedKeys, handleClick, wordArr, isMatched]} />
    </div>
  );
};

export default App;