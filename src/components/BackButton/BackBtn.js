import React from 'react'
import { Link } from 'react-router-dom';
import BackButton from '../../assets/images/back-icon.png';
import './BackButton.css';

export const BackBtn = () => {
  return (
    <Link to='/topics'>
        <div className='btn'>
            <img src={BackButton} alt="Back button" />Go back
        </div>
    </Link>
  )
}
