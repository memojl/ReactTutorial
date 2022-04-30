import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from "./pages/Users";
import User from './pages/User';
import NotFoundPage from "./pages/NotFoundPage"
import Menu from "./components/Menu";
import './assets/css/App.css';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />
        <Route path='/usuarios' element={<Navigate to="/users" />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/user/new' element={<p>New User</p>} />
        <Route path='/dashboard/*' element={<Dashboard />}>
          <Route path="welcome" element={<p>Welcome!!</p>} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
