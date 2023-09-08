function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h2>Add your todo</h2>
        </nav>
      </header>
      <main className="main-container">
        <form>
          <div className="input-div">
            <input type="text" placeholder="title..." required />
            <input type="date" required />
          </div>
          <button type="submit">Add</button>
        </form>
      </main>
    </div>
  );
}

export default App;
