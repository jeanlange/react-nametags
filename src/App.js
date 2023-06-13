import logo from './logo.svg';
import './App.css';

function Tag({name, color}) {
  return (
    <div className="tag">
      <div className="greeting" style={{backgroundColor: color}}>Hello, my name is</div>
      <div className="name">{name}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>hello, world!</h1>
      <div className="tags">
        <Tag name="Jean" color="blue" />
        <Tag name="John" color="red" />
        <Tag name="Sebastian" color="purple" />
        <Tag name="Blorf" color="green" />
      </div>
    </div>
  );
}

export default App;
