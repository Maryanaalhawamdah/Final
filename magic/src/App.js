
import './App.css';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Admin from './comp/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
        <Route path='./admin'  element={<Admin/>} />



     </Routes>
     
     
     
     </BrowserRouter>

    </div>
  );
}

export default App;
