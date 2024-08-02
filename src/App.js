import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screen/home';
import LoginPage from './screen/loginpage';
import RegisterPage from './screen/registerpage';
import AddUser from './screen/adduser';
import GroupTodos from './screen/todosgroup';


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" Component={RegisterPage } />
      <Route path="/register" Component={RegisterPage } />
      <Route path="/loginpage" Component={LoginPage } />
       <Route path="/loginpage/adduser" Component={AddUser} />
       <Route path="/loginpage/adduser/todos" Component={GroupTodos} />
         <Route  path="/LoginPage/adduser/todos/home" Component={Home} />
        
        </Routes>
    </Router>
  );
}

export default App;
