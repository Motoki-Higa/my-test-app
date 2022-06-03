import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface IAsyncUnitTest {
  message: string,
  status: string,
}

const AsyncUnitTest = () => {
  const [ dogData, setDogData ] = useState<IAsyncUnitTest>();

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <h2>AsyncUnitTest</h2>

      {
        dogData && (
          <div data-testid="dogData">
            <img src={dogData.message} alt="" />
          </div>
        )
      }
    </div>
  )
}

export default AsyncUnitTest;