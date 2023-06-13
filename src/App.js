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
  const colors = ["blue", "red", "green", "purple"]
  const names = ["Jean", "John", "Scott", "Bernadina-Bess", "Waldo", "Blorf"]
  const tags = names.map(name => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return <Tag name={name} color={color} />;
  })
  return (
    <div>
      <h1>hello, world!</h1>
      <div className="tags">
        {tags}
      </div>
    </div>
  );
}

export default App;
