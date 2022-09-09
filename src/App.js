import logo from './logo.svg';
import './App.css';
import SeatList from './MyComponents/SeatList.js';
import Screen from './MyComponents/Screen.js';
function App(props) {

  return (
    <div className="App">
      <Screen/>
      <SeatList />
    </div>
  );
}

export default App;
