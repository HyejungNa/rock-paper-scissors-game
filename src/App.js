import { useState } from 'react';
import './styles/App.css';
import Box from './components/Box';
import rockImg from './assets/rock-img.webp';
import paperImg from './assets/paper-img.jpg';
import scissorsImg from './assets/scissors-img.jpeg';

const choice = {
  rock: {
    name: 'Rock',
    img: rockImg,
    // 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png'
  },
  paper: {
    name: 'Paper',
    img: paperImg,
    // 'https://www.teachersuperstore.com.au/assets/alt_5/PA313.jpg?20210904233250',
  },
  scissors: {
    name: 'Scissors',
    img: scissorsImg,
    // 'https://thumb.ac-illust.com/19/19c97f48d78aa6eaf21e77af1d4e1bd3_t.jpeg',
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log(user, computer);

    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock')
      return computer.name === 'Scissors' ? 'win' : 'lose';
    else if (user.name === 'Scissors')
      return computer.name === 'Paper' ? 'win' : 'lose';
    else if (user.name === 'Paper')
      return computer.name === 'Rock' ? 'win' : 'lose';
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    // console.log(itemArray);

    const randomItem = Math.floor(Math.random() * itemArray.length);
    // console.log(randomItem);

    const final = itemArray[randomItem];
    return choice[final];
  };

  const invertResult = (result) => {
    switch (result) {
      case 'win':
        return 'lose';
      case 'lose':
        return 'win';
      default:
        return result; // 'tie' remains 'tie'
    }
  };

  return (
    <div>
      <div className='title'>Choose your move</div>
      <div className='box-main'>
        <Box title='You' item={userSelect} result={result} />
        <Box
          title='Computer'
          item={computerSelect}
          result={invertResult(result)}
        />
      </div>
      <div className='button-main'>
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
