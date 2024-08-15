import React, { Component } from 'react';
import './styles/App.css';
import BoxClass from './components/BoxClass';
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

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userState: null,
      computerState: null,
      result: '',
    };
  }

  play = (userChoice) => {
    const computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock')
      return computer.name === 'Scissors' ? 'win' : 'lose';
    else if (user.name === 'Scissors')
      return computer.name === 'Paper' ? 'win' : 'lose';
    else if (user.name === 'Paper')
      return computer.name === 'Rock' ? 'win' : 'lose';
  };

  randomChoice = () => {
    const itemArray = Object.keys(choice);

    const randomItem = Math.floor(Math.random() * itemArray.length);

    const final = itemArray[randomItem];
    return choice[final];
  };

  invertResult = (result) => {
    switch (result) {
      case 'win':
        return 'lose';
      case 'lose':
        return 'win';
      default:
        return result; // 'tie' remains 'tie'
    }
  };

  render() {
    return (
      <div>
        <div className='title'>Choose your move</div>
        <div className='button-main'>
          <button className='button' onClick={() => this.play('rock')}>
            rock
          </button>
          <button className='button' onClick={() => this.play('paper')}>
            paper
          </button>
          <button className='button' onClick={() => this.play('scissors')}>
            scissors
          </button>
        </div>

        <div className='box-main'>
          <BoxClass
            title='You'
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title='Computer'
            item={this.state.computerSelect}
            result={this.invertResult(this.state.result)}
          />
        </div>
      </div>
    );
  }
}
