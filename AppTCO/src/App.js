import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Connexion from '../src/components/Connexion';
import Table from './components/Table';


function App() {
  
  return (
    <Router>
      <div className='App'>
      <Routes>
        <Route path="/" element={<Connexion /> }/>
        <Route path="/table" element={<Table />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;