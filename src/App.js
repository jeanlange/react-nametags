import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Tag({name, color}) {
  return (
    <div className="tag">
      <div className="greeting" style={{backgroundColor: color}}>Hello, my name is</div>
      <div className="name">{name}</div>
    </div>
  );
}

function App() {
  const [newName, setNewName] = useState("");
  const colors = ["blue", "red", "green", "purple"]
  const names = ["Jean", "John", "Scott", "Bernadina-Bess", "Waldo", "Blorf"]
  const tags = names.map(name => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return <Tag name={name} color={color} />;
  })

  function handleType(e) {
    setNewName(e.target.value);
  }
  return (
    <div>
      <h1>hello, world!</h1>
      <input type="text" placeholder="A name?" value={newName} onChange={handleType}></input>
      <button>Make tag!</button>
      <div className="tags">
        {tags}
      </div>
    </div>
  );
}

export default App;
