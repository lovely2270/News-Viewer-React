import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import NewsList from './components/NewsList';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=84084ebfc9a74965bb5683e780be2020',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return <NewsList />;
};

export default App;
