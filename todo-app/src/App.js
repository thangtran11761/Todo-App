// import logo from './logo.svg';
import './App.css';
import Task from './Component/Task'
import Header from './Component/Header'
import Completed from './Component/Completed';
import Add from './Component/Add'


function App() {
  return (
    <div className="App"> 

      <h1>To do App</h1> 
      <Header/>
      <Task/>
      <Completed/>
      
    </div>
  );
}

export default App;
