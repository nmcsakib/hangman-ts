
const HangmanDrawing = ({wrongGuesses}:{wrongGuesses: number}) => {
    return (
        <div>
              <svg width="200" height="250" className="stroke-black stroke-[3px]">
      {/* 1. Base */}
      {wrongGuesses > 0 && <line x1="10" y1="240" x2="150" y2="240" />}
      
      {/* 2. Vertical pole */}
      {wrongGuesses > 1 && <line x1="42" y1="20" x2="42" y2="240" />}
      
      {/* 3. Horizontal top bar */}
      {wrongGuesses > 2 && <line x1="40" y1="20" x2="120" y2="20" />}
      
      {/* 4. Rope */}
      {wrongGuesses > 3 && <line x1="118" y1="20" x2="118" y2="50" />}
      
      {/* 5. Head */}
      {wrongGuesses > 4 && <circle cx="120" cy="70" r="20" fill="none" />}
      
      {/* 6. Body */}
      {wrongGuesses > 5 && <line x1="120" y1="90" x2="120" y2="150" />}
      
      {/* 7. Left arm */}
      {wrongGuesses > 6 && <line x1="120" y1="110" x2="100" y2="130" />}
      
      {/* 8. Right arm */}
      {wrongGuesses > 7 && <line x1="120" y1="110" x2="140" y2="130" />}
      
      {/* 9. Left leg */}
      {wrongGuesses > 8 && <line x1="120" y1="150" x2="100" y2="190" />}
      
      {/* 10. Right leg */}
      {wrongGuesses > 9 && <line x1="120" y1="150" x2="140" y2="190" />}
    </svg>
        </div>
    );
};

export default HangmanDrawing;