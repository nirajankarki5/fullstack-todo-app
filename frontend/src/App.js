import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchList = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/todos");

      const todos = await response.json();
      console.log(todos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

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
            <input
              type="text"
              placeholder="title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <button type="submit">{isEdit ? "Edit" : "Add"}</button>
        </form>
      </main>
    </div>
  );
}

export default App;
