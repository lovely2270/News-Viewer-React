import React, { useState, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './pages/NewsPage';
import { Route, Router } from 'react-router-dom';

const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
