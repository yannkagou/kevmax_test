import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/list' element={<TaskList />} />
      </Routes>
    </Router>
  );
}

export default App;
