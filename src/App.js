import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './Login';
import Admin from './Admin';
import ProtectedRoutes from './ProtectedRoutes';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/'  element={<Login />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/admin'  element={<Admin />}/>
        </Route>
     </Routes>
    </div>
  );
}

export default App;
