import { useState } from 'react';
import './App.css';
import Box from './components/Box';

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png',
  },
  paper: {
    name: 'Paper',
    img: 'https://www.teachersuperstore.com.au/assets/alt_5/PA313.jpg?20210904233250',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://thumb.ac-illust.com/19/19c97f48d78aa6eaf21e77af1d4e1bd3_t.jpeg',
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} />
        {/* <Box title='Computer' /> */}
      </div>
      <div className='main'>
        <button className='button' onClick={() => play('rock')}>
          rock
        </button>
        <button className='button' onClick={() => play('paper')}>
          paper
        </button>
        <button className='button' onClick={() => play('scissors')}>
          scissors
        </button>
      </div>
    </div>
  );
}

export default App;
