import logo from './logo.svg';

import './App.css';

import { Home } from './todo/Home';

import { About } from './todo/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './todo/Header';
import Footer from './todo/Footer';
import Base from './todo/Base';
import Login from './todo/Login';
import Welcome from './todo/Welcome';
import AuthenticationService from './service/AuthenticationService';
import Todos from './todo/Todos';
import UpdateTodo from './todo/UpdateTodo';
import Reducer from './todo/Reducer';
import TaskReducer from './todo/TaskReducer';
import StudentState from './context/StudentState';
import TodoState from './context/TodoState';
import NewTodos from './todo/NewTodo/NewTodos';
import Master from './todo/Master';
import Counter from './todo/Counter';
import StudentDemo from './todo/StudentDemo';

function App() {
  const login = (username) => {
    AuthenticationService.login(username)
  }
  const logout = (username) => {
    AuthenticationService.login()
  }
  return (

    <Base>
      <StudentState>
        <TodoState>
          <BrowserRouter>
            <Routes>
              <Route path="home" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="login" element={<Login login={login} />}></Route>
              <Route path="welcome" element={<Welcome />}></Route>
              <Route path="todos" element={<Todos />}></Route>
              <Route path="updatetodo" element={<UpdateTodo />}></Route>
              <Route path="reducer" element={<Reducer />}></Route>
              <Route path="taskreducer" element={<TaskReducer />}></Route>
              <Route path='master' element={<Master />}></Route>
              <Route path='newtodos' element={<NewTodos />}></Route>
              <Route path='counter' element={<Counter />}></Route>
              <Route path='studentdemo' element={<StudentDemo />}></Route>

            </Routes>
          </BrowserRouter>
        </TodoState>
      </StudentState>
    </Base>
  );

}
export default App;



{/* <h2>Hello master Developer</h2>

      <About />

      <Home /> */}

    //   <div>
    // <Header/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="home" element={<Home/>}></Route>
    //     <Route path="about" element={<About/>}></Route>

    //   </Routes>
    // </BrowserRouter>
    // <Footer/>
    // </div>