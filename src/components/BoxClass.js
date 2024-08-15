import React, { Component } from 'react';
import rockScissorsPaperImg from '../assets/people-playing-paper-rock-scissors.jpg';

export default class BoxClass extends Component {
  defaultImage = rockScissorsPaperImg;

  render() {
    const borderColor =
      this.props.result === 'win'
        ? 'box-win'
        : this.props.result === 'lose'
        ? 'box-lose'
        : 'box-tie';

    return (
      <div>
        <div className={`box ${borderColor}`}>
          <h1 className='box-title'>{this.props.title}</h1>
          <img
            className='item-img'
            src={
              this.props.item && this.props.item.img
                ? this.props.item.img
                : this.defaultImage
            }
            alt='user-choice'
          ></img>
          <h2 className='box-result'>{this.props.result}</h2>
        </div>
      </div>
    );
  }
}
