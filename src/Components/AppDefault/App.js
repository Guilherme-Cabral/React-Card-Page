import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        color: "red",
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.color}</h1>
          </div>
        ))}
      </div>
    );
  }
}

/* function App() {
  // componentes começam com letra maiuscula 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
