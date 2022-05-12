
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import logo from './logo.svg';
import './App.scss';
import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import Blog from './components/blog'
import Courses from './components/courses'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Blog />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
