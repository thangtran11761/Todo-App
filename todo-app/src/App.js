import logo from './logo.svg';
import './App.css';
import Task from './Component/Task'
// import addTask from './addTask'
import Header from './Component/Header'
import Completed from './Component/Completed';

function App() {
  return (
    <div className="App">
      <h1>To do App</h1> 
      <Header/>
      <Task/>
      <Completed/>
    </div>
  );
  // return (
  //   <ListTodo/>
  // )
}

export default App;
