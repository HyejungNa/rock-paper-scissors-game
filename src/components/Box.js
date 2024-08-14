import React from 'react';
import rockScissorsPaperImg from '../assets/people-playing-paper-rock-scissors.jpg';

const Box = (props) => {
  // console.log(props);

  const defaultImage = rockScissorsPaperImg;
  // 'https://hips.hearstapps.com/hmg-prod/images/people-playing-paper-rock-scissors-royalty-free-illustration-1583269312.jpg'

  const borderColor =
    props.result === 'win'
      ? 'box-win'
      : props.result === 'lose'
      ? 'box-lose'
      : 'box-tie';

  return (
    <div className={`box ${borderColor}`}>
      <h1 className='box-title'>{props.title}</h1>
      <img
        className='item-img'
        src={props.item && props.item.img ? props.item.img : defaultImage}
        alt='user-choice'
      ></img>
      <h2 className='box-result'>{props.result}</h2>
    </div>
  );
};

export default Box;
