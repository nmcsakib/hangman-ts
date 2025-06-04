✅ 1. Functional Tests
These test whether the core logic of the Hangman game works:

✅ Game Start
 The game starts with a random or fixed word.✅ 

 The word is hidden (e.g., shown as underscores). ✅

 No letters are marked as guessed at the start. ✅

✅ Key Press Handling
 Clicking a key reveals the correct letter(s) in the word. ✅

 Wrong guesses are counted properly. ✅

 Letters can’t be guessed twice. ✅

 Guessed letters are tracked and displayed. ✅

 Clicking the same letter twice doesn’t add extra wrong counts.

✅ Win & Lose Conditions
 If all letters are guessed correctly, show a win message. ✅

 If the max number of wrong guesses is reached, show a lose message and reveal the word. ✅

 Disable all keys after the game ends. ✅

✅ 2. UI/UX Tests

🧪 Keyboard UI
 Keys are disabled after clicking. ✅

 Correct guesses are styled (e.g., green), wrong ones differently (e.g., red). ✅

 Keyboard layout is visually readable and responsive. ✅

🧪 Word Display
 Correct letters appear in place when guessed. ✅

 Word updates live on each guess. ✅

 Underscores or dashes are shown for unguessed letters. ✅

🧪 Restart
 There’s a Restart button that resets the game. ✅

 State (wrong guesses, guessed letters, word) resets properly.

✅ 3. Edge Case Tests
These test uncommon but possible scenarios:

 The word has repeated letters (e.g., “apple”) → all instances reveal. ✅

 The word has no vowels (e.g., “rhythm”) → still playable.

 Guessing all wrong letters leads to loss. ✅

 Empty word (for testing only) → doesn’t break game.

 All 26 keys are guessed → ends game gracefully. 

✅ 4. Performance Tests
 Game runs smoothly on slower devices or browsers.

 No console errors during interaction.

 No memory leaks or excessive re-renders (you can check with React DevTools).

✅ 5. Optional Advanced Tests (if applicable)
 Responsive design (keyboard & game board work on mobile and desktop). ✅

 Accessibility: keyboard input support (not just mouse clicks). (TO DO)

 Word difficulty levels (TO DO).

 Word fetched from API or dictionary ( TO DO ).

 Tools will Use for Testing
🧪 Manual testing (by playing the game)

⚙️ React Testing Library or Vitest (for component/unit tests)

🧱 Jest (for game logic/unit tests)
