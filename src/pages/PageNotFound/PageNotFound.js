import React from 'react'
import './PageNotFound.css';

export const PageNotFound = () => {
  return (
    <div className="layout">
  <h1 className="not-found">
    Oops! 
  </h1>
  <h1 className="subtext">
    404 - Page not found
  </h1>
  <p>The page you are looking for might have been removed had its name changed or is temporarily unavaliable</p>
  <button> 
    Go to homepage
  </button>
</div>
  )
}
