import React from 'react'
import { Link } from 'react-router-dom';
import BackButton from '../../assets/images/back-icon.png';
import styles from './BackButton.module.css';

export const BackBtn = () => {
  return (
    <Link to='/topics'>
      
        <div className={styles['btn']}>
            <img src={BackButton} alt="Back button" />Go back
        </div>
    </Link>
  )
}
