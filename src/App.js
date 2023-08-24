import './App.css';

import ListUsers from './components/ListUsers';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
function App() {
  return (
      <>
        <h1>React CRUD PHP&MYSQL</h1>
        <BrowserRouter>
        <nav>
          <ul>
            <li>
                <Link to="/">Show Users</Link>
            </li>
            <li>
              <Link to="user/create">Create User</Link>
            </li>
          </ul>
        </nav>


        <Routes>
              <Route index element={<ListUsers />} />
              <Route path='user/create' element={<CreateUser/>}/>
              <Route path='user/:id/edit' element={<EditUser/>}/>
          </Routes>
        </BrowserRouter>


      </>
  );
}

export default App;
