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
  const [names, setNames] = useState([
    {name: "Jean",  color: randomColor()},
    {name: "John", color: randomColor()}])

  const tags = names.map(name => {
    return <Tag name={name.name} color={name.color} />;
  })
  function randomColor() {
    const colors = ["blue", "red", "green", "purple"]
    return colors[Math.floor(Math.random() * colors.length)];
  }
  function handleType(e) {
    setNewName(e.target.value);
  }
  function newTag() {
    let newNames = names.slice();
    newNames.unshift({name: newName, color: randomColor()});
    setNames(newNames);
    setNewName("");
  }
  function maybeNewTag(e) {
    if (e.which === 13) {
      newTag();
    }
  }
  return (
    <div>
      <h1>hello, world!</h1>
      <input type="text" placeholder="A name?" value={newName} onChange={handleType}></input>
      <button onClick={newTag} onKeyPress={maybeNewTag}>Make tag!</button>
      <div className="tags">
        {tags}
      </div>
    </div>
  );
}

export default App;
