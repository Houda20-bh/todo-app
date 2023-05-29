import {BrowserRouter,Route,Routes} from 'react-router-dom';
// pages && components
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>

        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
