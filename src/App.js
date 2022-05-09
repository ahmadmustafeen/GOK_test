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
    <Routes>
      <Route path="/home" exact element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
