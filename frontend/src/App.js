import { useEffect, useState } from "react";
import List from "./components/List";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchList = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/api/todos");

      const todos = await response.json();
      console.log(todos);
      setList(todos);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleEdit = (id) => {
    console.log("edit", id);
  };

  const handleDelete = (id) => {
    console.log("delete", id);
  };

  const handleSubmit = () => {};

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

        {loading ? (
          <p>loading... </p>
        ) : list.length === 0 ? (
          <p>You have not set any todos</p>
        ) : (
          <List
            list={list}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </main>
    </div>
  );
}

export default App;
