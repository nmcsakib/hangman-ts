import React, { useEffect, useState } from "react";
import words from './data/data.json'
import HangmanDrawing from "./HangmanDrawing/HangmanDrawing";
import Keyboard from "./Keyboard/Keyboard";
const App = () => {
  const [word] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [wrongGuesses, setWrongGuesses] = useState(1);
  const [matchedLetters, setMatchedLetters] = useState<string[]>([])
  const [isMatched, setIsMatched] = useState(false)
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  console.log('coorect', matchedLetters);

  const wordArr = word.split('');
  console.log(word);

  useEffect(() => {

    if(matchedLetters.length === wordArr.length){
      setIsMatched(true)
      alert('You Won')
    }
    else if (matchedLetters.length === wordArr.length || wrongGuesses > 9) {
      setIsMatched(true)
    }
    else{
      setIsMatched(false)
    }
  }, [matchedLetters])

  const handleClick = (letter: string) => {
    console.log("pressed", letter);

    setPressedKeys((prev) => [...prev, letter]);

    setMatchedLetters((): string[] => {
      if (wordArr.includes(letter)) {
        return [...matchedLetters, letter]
      } else {
        return [...matchedLetters]
      }
    })

    if (wordArr.includes(letter)) {
      setWrongGuesses(prev => prev)

    } else {
      setWrongGuesses(prev => prev + 1)

    }
  };
  return (
    <div className='bg-slate-400 min-h-screen w-2/3 mx-auto flex flex-col justify-center items-center gap-4'>
      {/* <h2 className="text-2xl tracking-widest uppercase"> {((matchedLetters.length > 0 || matchedLetters.length < 5) && wrongGuesses < 10) ? matchedLetters.join(' ') : word }</h2> */}

      <h2 className="text-2xl tracking-widest uppercase">{wordArr.map(letter => <span className={`${matchedLetters.includes(letter)? 'inline': 'hidden'}`} key={letter}>{letter}</span>)}</h2>
      <HangmanDrawing wrongGuesses={wrongGuesses} />

      {/* <button className="bg-amber-800 rounded-md p-2" onClick={() => setWrongGuesses(1)}>click</button> */}
      <Keyboard values={[pressedKeys, handleClick, wordArr, isMatched]} />
    </div>
  );
};

export default App;