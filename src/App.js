import me from './me.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hi! I am Giovanni :)</p>
        <img className="profilePic" src={me} alt="Profile"/>
      </header>
    </div>
  );
}

export default App;
