import React from 'react';
import './SubTitleChild.css';
import subtitle from '../../../assets/images/subtitle.png';

const SubTitleChild = (props) => {
  const videoObject = props.playerObject;

  return (
    <div>
      <img src={subtitle} alt='' className='vjs-subtitle-button' />
    </div>
  );
};

export default SubTitleChild;
