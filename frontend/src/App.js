import { useEffect, useState } from "react";
import List from "./components/List";
import Alert from "./components/Alert";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });

  const fetchList = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/api/todos");
      const todos = await response.json();

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

  // Handle EDIT todo
  const handleEdit = (id) => {
    console.log("edit", id);
  };

  // Handle DELETE todo
  const handleDelete = async (id) => {
    console.log("delete", id);
    const response = await fetch(`http://127.0.0.1:5000/api/todos/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    // fetchList();
    setList(data);
  };

  // Run when user clicks the button
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date) {
      setAlert({
        show: true,
        type: "danger",
        msg: "Title and Date both required",
      });
    } else if (isEdit) {
      //
    } else {
      console.log("SUBMITTEDDD");
    }
  };

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h2>Add your todo</h2>
        </nav>
      </header>

      <main className="main-container">
        <form onSubmit={handleSubmit}>
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
          <button type="submit" onClick={handleSubmit}>
            {isEdit ? "Edit" : "Add"}
          </button>
        </form>

        {alert.show && <Alert alert={alert} setAlert={setAlert} />}

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
