import React from 'react';
import './index.scss';

const Loading = () => {
  return (
    <div className='spinning'>
      <div className="lds-hourglass"></div>
    </div>
  )
}

export default Loading;