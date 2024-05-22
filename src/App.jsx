import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';
import { useState } from 'react';
import { INITIAL_INPUTS, MAX_DURATION, MIN_DURATION } from './constants';

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUTS);
  const isDurationValid =
    userInput.duration >= MIN_DURATION && userInput.duration <= MAX_DURATION;
  const isInputValid = isDurationValid;

  const handleChangeInput = (key, newVal) => {
    setUserInput((prevVal) => {
      return { ...prevVal, [key]: +newVal };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChangeInput={handleChangeInput} />
      {isInputValid && <Results userInput={userInput} />}
      {!isDurationValid && (
        <p className="center">
          Please enter a duration in range between {MIN_DURATION} and{' '}
          {MAX_DURATION}.
        </p>
      )}
    </>
  );
}

export default App;
