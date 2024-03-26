
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Navbar';
import Create from './component/Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './component/Read';
import Update from './component/Update';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Create />}/>
      <Route path='/read' element={<Read />}/>
      <Route path='/edit/:id' element={<Update />}/>
    </Routes>

  
    </BrowserRouter>
  );
}

export default App;
