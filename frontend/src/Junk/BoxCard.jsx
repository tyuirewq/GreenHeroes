import React from 'react';
import './boxcard.scss';
import myProfile from './../image/logo_2.jpg'

function BoxCard(props) {
  return (
    <div className="box-card">
      <img src={myProfile} alt="" className='profile_hero'/> 
      {props.children}
    </div>
  );
}

export default BoxCard;
