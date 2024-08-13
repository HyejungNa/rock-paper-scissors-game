import React from 'react';

const Box = (props) => {
  // console.log(props);
  const defaultImage =
    'https://hips.hearstapps.com/hmg-prod/images/people-playing-paper-rock-scissors-royalty-free-illustration-1583269312.jpg';

  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img
        className='item-img'
        src={props.item && props.item.img ? props.item.img : defaultImage}
        alt='user-choice'
      ></img>
      <h2>Win</h2>
    </div>
  );
};

export default Box;
