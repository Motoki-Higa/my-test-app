import React, { useState, useEffect } from 'react';

const NormalUnitTest = () => {
  const [ isClicked, setIsClicked ] = useState(false);

  const handleSetIsClicked = () => {
    setIsClicked(true);
  }

  return (
    <div>
      <h2>Normal Unit Test</h2>
      <p>This is a simple unit test to test if button works properly.</p>

      <button onClick={handleSetIsClicked}>Click</button>

      {
        isClicked ? (
          <div>Clicked</div>
        ) : (
          <div>Not clicked yet</div>
        )
      }
    </div>
  )
}

export default NormalUnitTest;