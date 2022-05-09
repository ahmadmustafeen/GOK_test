import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigator from './Navigator';
import Home from './container/Home';

function App() {
  return (
    <BrowserRouter>
    <Navigator />
  </BrowserRouter>
  );
}

export default App;
